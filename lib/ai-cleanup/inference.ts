import * as ort from "onnxruntime-web";
import { getModelFromCache, saveModelToCache } from "./modelCache";
import { imageToFloat32Array, maskToFloat32Array } from "./imageUtils";

ort.env.wasm.wasmPaths = "https://cdn.jsdelivr.net/npm/onnxruntime-web/dist/";
// Keep warnings off by default to prevent Next.js overlay, unless debugging
ort.env.logLevel = typeof window !== 'undefined' && (window as any).DEBUG_AI ? "info" : "fatal";
ort.env.debug = typeof window !== 'undefined' && (window as any).DEBUG_AI;

// Strict WASM configuration for stability and performance on UI thread
ort.env.wasm.numThreads = 1;
ort.env.wasm.simd = true;

// Local Inpainting model path - must be placed in public/models/lama.onnx
const INPAINTING_MODEL_URL = "/models/lama.onnx"; 
const MODEL_ID = "lama-inpaint-local-v1";

const logDebug = (...args: any[]) => {
  if (typeof window !== 'undefined' && (window as any).DEBUG_AI) {
    console.log("[AI-Cleanup Debug]:", ...args);
  }
};

export async function downloadAndCacheModel(onProgress: (progress: number) => void): Promise<ArrayBuffer> {
  const cached = await getModelFromCache(MODEL_ID);
  if (cached) {
    onProgress(100);
    console.log("model loaded (from cache)");
    return cached;
  }

  logDebug("Downloading model from", INPAINTING_MODEL_URL);
  const response = await fetch(INPAINTING_MODEL_URL);
  if (!response.ok) throw new Error("Model failed to load. Please ensure lama.onnx is placed in public/models/lama.onnx.");
  
  const contentLength = response.headers.get('content-length');
  const total = contentLength ? parseInt(contentLength, 10) : 0;
  
  let loaded = 0;
  const reader = response.body?.getReader();
  const chunks: Uint8Array[] = [];
  
  if (reader) {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      if (value) {
        chunks.push(value);
        loaded += value.length;
        if (total) onProgress(Math.round((loaded / total) * 100));
      }
    }
  }

  const arrayBuffer = new Uint8Array(loaded);
  let offset = 0;
  for (const chunk of chunks) {
    arrayBuffer.set(chunk, offset);
    offset += chunk.length;
  }

  const finalBuffer = arrayBuffer.buffer;
  await saveModelToCache(MODEL_ID, finalBuffer);
  onProgress(100);
  console.log("model loaded");

  return finalBuffer;
}

export async function runInferencePipeline(
  imageSource: string,
  maskSource: string | null,
  width: number,
  height: number,
  onProgress: (progress: number) => void
): Promise<string> {
  if (!maskSource) {
    return imageSource; // Return original if no mask is drawn
  }

  let session: ort.InferenceSession | null = null;
  
  try {
    logDebug("Starting inference pipeline", { width, height });
    onProgress(10);
    const modelBuffer = await downloadAndCacheModel(onProgress);

    // 1. Execution Provider Configuration
    // WebGPU removed due to LaMa binary operator kernel incompatibilities in browser environments.
    try {
      logDebug("Attempting to create InferenceSession with strict WASM provider.");
      session = await ort.InferenceSession.create(modelBuffer, { 
        executionProviders: ['wasm'],
        // Typical safe configuration for ONNX WASM memory
        graphOptimizationLevel: 'all'
      });
      console.log("Running with WASM EP");
      console.log("session created (wasm)");
    } catch (e: any) {
      throw new Error(`Failed to initialize ONNX session with WASM. Reason: ${e.message}`);
    }

    if (!session) throw new Error("Session is null after initialization.");

    // 2. Prepare Inputs
    onProgress(50);
    const INFERENCE_SIZE = 512;
    
    // Resize down to exactly 512x512 for the model
    const imageTensorData = await imageToFloat32Array(imageSource, INFERENCE_SIZE, INFERENCE_SIZE, 3);
    const maskTensorData = await maskToFloat32Array(maskSource, INFERENCE_SIZE, INFERENCE_SIZE);

    logDebug("Image tensor data length:", imageTensorData.length, "Expected:", 3 * INFERENCE_SIZE * INFERENCE_SIZE);
    logDebug("Mask tensor data length:", maskTensorData.length, "Expected:", 1 * INFERENCE_SIZE * INFERENCE_SIZE);

    // Validate normalizing scales (0..1)
    if (imageTensorData[0] > 1.0 || maskTensorData[0] > 1.0) {
       logDebug("Warning: Tensors may not be normalized to 0-1 range.");
    }

    const imageTensor = new ort.Tensor("float32", imageTensorData, [1, 3, INFERENCE_SIZE, INFERENCE_SIZE]);
    const maskTensor = new ort.Tensor("float32", maskTensorData, [1, 1, INFERENCE_SIZE, INFERENCE_SIZE]);

    console.log("Image tensor shape:", imageTensor.dims);
    console.log("Mask tensor shape:", maskTensor.dims);

    // 3. Model Compatibility Validation
    const expectedInputs = session.inputNames;
    logDebug("Model expects inputs:", expectedInputs);
    if (expectedInputs.length < 2 && !expectedInputs.includes("image")) {
       throw new Error(`Model compatibility failed: This ONNX model expects ${expectedInputs.join(',')} but pipeline requires image and mask.`);
    }

    let feeds: Record<string, ort.Tensor> = {};
    if (expectedInputs.includes("image") && expectedInputs.includes("mask")) {
      feeds["image"] = imageTensor;
      feeds["mask"] = maskTensor;
    } else {
      // Fallback naive feed mapping for LaMa style models
      feeds[expectedInputs[0]] = imageTensor;
      feeds[expectedInputs[1]] = maskTensor;
    }

    onProgress(70);

    // 4. Run Model
    logDebug("Executing session.run()...");
    
    // Yield to the main browser thread for 100ms so the UI can paint the "Running..." overlay
    // before the WASM process strictly locks up the thread.
    await new Promise(resolve => setTimeout(resolve, 100));

    console.time("inference");
    const output = await session.run(feeds);
    console.timeEnd("inference");
    
    console.log("inference complete");

    const outputKey = session.outputNames[0];
    const resultTensor = output[outputKey];
    
    if (!resultTensor || resultTensor.type !== 'float32') {
       throw new Error(`Invalid output tensor. Expected float32, got ${resultTensor?.type}`);
    }

    logDebug("Output tensor shape:", resultTensor.dims);

    // 5. Render Output Tensor back to Canvas
    onProgress(90);
    
    // Convert NCHW Float32 to standard HTML ImageData
    const floatData = resultTensor.data as Float32Array;
    const outputWidth = resultTensor.dims[3] || 512;
    const outputHeight = resultTensor.dims[2] || 512;

    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = outputWidth;
    tempCanvas.height = outputHeight;
    const tempCtx = tempCanvas.getContext("2d");
    if (!tempCtx) throw new Error("Failed to get 2d context for output render");

    const imgData = tempCtx.createImageData(outputWidth, outputHeight);
    
    // NCHW to interleaved RGBA [r,g,b,a, r,g,b,a]
    const channelSize = outputWidth * outputHeight;
    for (let i = 0; i < channelSize; i++) {
        const r = floatData[i] * 255;
        const g = floatData[i + channelSize] * 255;
        const b = floatData[i + channelSize * 2] * 255;
        
        const idx = i * 4;
        imgData.data[idx] = Math.max(0, Math.min(255, r));
        imgData.data[idx + 1] = Math.max(0, Math.min(255, g));
        imgData.data[idx + 2] = Math.max(0, Math.min(255, b));
        imgData.data[idx + 3] = 255; // Alpha
    }

    tempCtx.putImageData(imgData, 0, 0);

    // Resize output back up to original natural image dimensions to fit the Canvas UI seamlessly
    const finalCanvas = document.createElement("canvas");
    finalCanvas.width = width;
    finalCanvas.height = height;
    const finalCtx = finalCanvas.getContext("2d");
    if (!finalCtx) throw new Error("Failed to get 2d context for final upscale");

    finalCtx.drawImage(tempCanvas, 0, 0, width, height);

    const finalImageURL = finalCanvas.toDataURL("image/png");
    console.log("canvas updated");

    // Dispose tensors explicitly
    imageTensor.dispose();
    maskTensor.dispose();
    resultTensor.dispose();

    onProgress(100);
    return finalImageURL;
  } catch (error) {
    logDebug("Pipeline Error Exception caught:", error);
    throw error;
  } finally {
    if (session && session.release) {
        logDebug("Releasing session memory...");
        try {
          session.release();
        } catch (e) {
          logDebug("Error releasing session:", e);
        }
    }
  }
}

