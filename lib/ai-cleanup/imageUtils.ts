// Utilities to handle HTML5 Canvas / Image object extraction to Tensors

export async function imageToFloat32Array(imageSource: string, width: number, height: number, channels: number = 3): Promise<Float32Array> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return reject("Failed to get 2d context for image conversion");

      ctx.drawImage(img, 0, 0, width, height);
      const imgData = ctx.getImageData(0, 0, width, height);
      const float32Data = new Float32Array(width * height * channels);

      // Convert from standard [r,g,b,a, r,g,b,a] HTML canvas data to [r... g... b...] or standard CHW or HWC.
      // Assuming ONNX placeholder model expects CHW float32 tensors scaled [0, 1] or [-1, 1]
      // Typically: shape [1, 3, H, W]
      
      let j = 0;
      for (let i = 0; i < imgData.data.length; i += 4) {
        // Red
        float32Data[j] = imgData.data[i] / 255.0;
        // Green
        float32Data[j + width * height] = imgData.data[i + 1] / 255.0;
        // Blue
        float32Data[j + 2 * width * height] = imgData.data[i + 2] / 255.0;
        j++;
      }
      resolve(float32Data);
    };
    img.onerror = reject;
    img.src = imageSource;
  });
}

// Convert mask from drawn canvas (black background, white strokes) to float32 tensor
// Typically shape [1, 1, H, W]
export async function maskToFloat32Array(maskSource: string, width: number, height: number): Promise<Float32Array> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return reject("Failed to get 2d context for mask conversion");

      ctx.drawImage(img, 0, 0, width, height);
      const imgData = ctx.getImageData(0, 0, width, height);
      const float32Data = new Float32Array(width * height);

      // Mask is grayscale, channel = rgb(255) maps to 1.0 (mask area)
      for (let i = 0, j = 0; i < imgData.data.length; i += 4, j++) {
        // Just take the Red channel (since it's B&W)
        float32Data[j] = imgData.data[i] / 255.0;
      }
      resolve(float32Data);
    };
    img.onerror = reject;
    img.src = maskSource;
  });
}
