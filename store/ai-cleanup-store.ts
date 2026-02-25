import { create } from 'zustand';

interface AICleanupState {
  image: string | null;           // Base64 or Object URL of the uploaded image
  mask: string | null;            // Base64 of the generated mask
  isProcessing: boolean;          // Is the model inferencing?
  isModelLoaded: boolean;         // Is the model in memory?
  modelProgress: number;          // Loading progress 0-100
  brushSize: number;
  originalImageDimensions: { width: number; height: number } | null;
  reset: () => void;
  setImage: (img: string | null) => void;
  setMask: (mask: string | null) => void;
  setIsProcessing: (status: boolean) => void;
  setIsModelLoaded: (status: boolean) => void;
  setModelProgress: (progress: number) => void;
  setBrushSize: (size: number) => void;
  setOriginalImageDimensions: (dims: { width: number; height: number } | null) => void;
}

export const useAICleanupStore = create<AICleanupState>((set) => ({
  image: null,
  mask: null,
  isProcessing: false,
  isModelLoaded: false,
  modelProgress: 0,
  brushSize: 20,
  originalImageDimensions: null,

  reset: () => set({
    image: null,
    mask: null,
    isProcessing: false,
    modelProgress: 0,
    originalImageDimensions: null
  }),

  setImage: (img) => set({ image: img }),
  setMask: (mask) => set({ mask: mask }),
  setIsProcessing: (status) => set({ isProcessing: status }),
  setIsModelLoaded: (status) => set({ isModelLoaded: status }),
  setModelProgress: (progress) => set({ modelProgress: progress }),
  setBrushSize: (size) => set({ brushSize: size }),
  setOriginalImageDimensions: (dims) => set({ originalImageDimensions: dims }),
}));
