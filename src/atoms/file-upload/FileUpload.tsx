import React, { useRef, useState, useCallback } from "react";
import clsx from "clsx";
import Input, { type InputProps } from "../input/Input";
import { validateFile } from "../../utils/validate-file.utils";
import { FileItem } from "./FileItem";

const DEFAULT_MAX_SIZE_MB = 2;
const IMAGE_ACCEPT = "image/png,image/jpeg,image/jpg";
const IMAGE_LABEL  = "PNG, JPG";

export interface FileUploadProps
  extends Omit<InputProps, "type" | "value" | "onChange" | "onError"> {
  multiple?: boolean;
  maxSizeMB?: number;
  onFileChange?: (files: File[]) => void;
  onError?: (message: string) => void;
}


const FileUpload = React.forwardRef<HTMLInputElement, FileUploadProps>(
  (
    {
      multiple = false,
      maxSizeMB = DEFAULT_MAX_SIZE_MB,
      onFileChange,
      onError,
      label = "Upload image",
      helperText,
      disabled,
      className,
      ...rest
    },
    _ref
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [files, setFiles] = useState<File[]>([]);
    const [error, setError] = useState<string | null>(null);

    const maxBytes = maxSizeMB * 1024 * 1024;

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const incoming = Array.from(e.target.files ?? []);
        setError(null);

        if (!incoming.length) {
          setFiles([]);
          onFileChange?.([]);
          return;
        }

        const errors: string[] = [];
        const valid: File[] = [];

        for (const file of incoming) {
          const result = validateFile(file, maxBytes);
          result.valid ? valid.push(file) : errors.push(result.message!);
        }

        if (errors.length) {
          const msg = errors.join(" ");
          setError(msg);
          onError?.(msg);
          e.target.value = "";
          setFiles([]);
          onFileChange?.([]);
          return;
        }

        const next = multiple ? valid : [valid[valid.length - 1]];
        setFiles(next);
        onFileChange?.(next);
      },
      [multiple, maxBytes, onFileChange, onError]
    );

    const handleRemove = useCallback(
      (target: File) => {
        const next = files.filter((f) => f !== target);
        setFiles(next);
        onFileChange?.(next);
        if (!next.length && inputRef.current) inputRef.current.value = "";
      },
      [files, onFileChange]
    );

    const handleClear = useCallback(() => {
      setFiles([]);
      setError(null);
      if (inputRef.current) inputRef.current.value = "";
      onFileChange?.([]);
    }, [onFileChange]);

    const hasFiles   = files.length > 0;
    const inputState = error ? "error" : hasFiles ? "success" : "default";

    const displayValue = !hasFiles
      ? ""
      : files.length === 1
      ? files[0].name
      : `${files.length} files selected`;

    return (
      <div className={clsx("file-upload", className)}>
        <input
          ref={inputRef}
          type="file"
          accept={IMAGE_ACCEPT}
          multiple={multiple}
          disabled={disabled}
          onChange={handleChange}
          style={{ display: "none" }}
          tabIndex={-1}
          aria-hidden="true"
        />

        <Input
          {...rest}
          ref={undefined}
          label={label}
          readOnly
          disabled={disabled}
          value={displayValue}
          state={inputState}
          helperText={
            error ??
            helperText ??
            `${IMAGE_LABEL} — Max ${maxSizeMB} MB${multiple ? " · Multiple allowed" : ""}`
          }
          className="file-upload__input"
          onClick={() => !disabled && inputRef.current?.click()}
          style={{ cursor: disabled ? "not-allowed" : "pointer" }}
          rightIcon={
            hasFiles
              ? ({ className: cn }) => (
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); handleClear(); }}
                    className={clsx("file-upload__clear", cn)}
                    aria-label="Clear all"
                    tabIndex={0}
                  >
                    ✕
                  </button>
                )
              : ({ className: cn }) => (
                  <span className={clsx("file-upload__icon", cn)}>📎</span>
                )
          }
        />

        {hasFiles && !error && (
          <div className="file-upload__list">
            {files.map((f) => (
              <FileItem
                key={f.name + f.size}
                file={f}
                onRemove={handleRemove}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
);

FileUpload.displayName = "FileUpload";
export default FileUpload;
