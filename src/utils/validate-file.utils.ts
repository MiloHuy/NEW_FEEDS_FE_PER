import { formatBytes } from "./format.utils";

export function validateFile(
  file: File,
  maxBytes: number
): { valid: boolean; message?: string } {
  if (!file.type.startsWith("image/")) {
    return { valid: false, message: `"${file.name}" is not an image file.` };
  }
  if (file.size > maxBytes) {
    return {
      valid: false,
      message: `"${file.name}" is ${formatBytes(file.size)} — max allowed is ${formatBytes(maxBytes)}.`,
    };
  }
  return { valid: true };
}
