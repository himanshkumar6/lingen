
/**
 * LinkGen Security & Validation Utility
 * Prevents common injection attacks and ensures data integrity.
 */

export const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>]/g, ''); // Simple XSS prevention
};

export const isValidYoutubeUrl = (url: string): boolean => {
  const regex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
  return regex.test(url);
};

export const extractYoutubeId = (url: string): string | null => {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return (match && match[1]) ? match[1] : null;
};
