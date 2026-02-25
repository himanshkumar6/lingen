const DB_NAME = "AICleanupModelsDB";
const STORE_NAME = "models";
const DB_VERSION = 1;

export async function initDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
  });
}

export async function saveModelToCache(modelId: string, buffer: ArrayBuffer): Promise<void> {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    
    // Convert ArrayBuffer to Blob for storage to save memory/space
    const blob = new Blob([buffer], { type: "application/octet-stream" });
    const request = store.put(blob, modelId);

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

export async function getModelFromCache(modelId: string): Promise<ArrayBuffer | null> {
  const db = await initDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get(modelId);

    request.onsuccess = async () => {
      if (request.result) {
        const blob = request.result as Blob;
        resolve(await blob.arrayBuffer());
      } else {
        resolve(null);
      }
    };
    request.onerror = () => reject(request.error);
  });
}
