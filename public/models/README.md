# Local ONNX Models

To avoid 401 Unauthorized errors from HuggingFace and run the AI Image Cleanup tool completely offline, you must place the ONNX models in this directory.

1. Download your preferred inpainting model (e.g., `lama_fp32.onnx`).
2. Place it in this folder so the relative path resolves to `/models/lama.onnx`.

The Inference pipeline uses `fetch('/models/lama.onnx')` to load it directly from your Next.js server, avoiding standard CORS and external HuggingFace API key restrictions.
