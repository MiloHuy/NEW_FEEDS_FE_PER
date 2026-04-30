import { formatBytes } from "../../utils/format.utils";
import Button from "../button";

interface FileItemProps {
  file: File;
  onRemove: (file: File) => void;
}

export function FileItem({ file, onRemove }: FileItemProps) {
  const preview = URL.createObjectURL(file);

  return (
    <div className="file-upload__item">
      <img
        src={preview}
        alt={file.name}
        className="file-upload__item-thumb"
        onLoad={() => URL.revokeObjectURL(preview)}
      />

      <div className="file-upload__item-info">
        <span className="file-upload__item-name">{file.name}</span>
        <span className="file-upload__item-size">{formatBytes(file.size)}</span>
      </div>
      
      <Button
        type="button"
        className="file-upload__item-remove"
        aria-label={`Remove ${file.name}`}
        onClick={() => onRemove(file)}
      >
        ✕
      </Button>
    </div>
  );
}
