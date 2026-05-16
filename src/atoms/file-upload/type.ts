import type { InputProps } from "../input/Input";

export type FileUploadStatus = "idle" | "uploading" | "success" | "error";

export interface FileEntry {
  file: File;
  status: FileUploadStatus;
  error?: string;
  url?: string;
}

export interface FileUploadProps
  extends Omit<InputProps, "type" | "value" | "onChange" | "onError"> {
  multiple?: boolean;
  maxSizeMB?: number;
  /**
   * Called when files are selected or upload status changes.
   */
  onFileChange?: (entries: FileEntry[]) => void;
  onError?: (message: string) => void;
}
