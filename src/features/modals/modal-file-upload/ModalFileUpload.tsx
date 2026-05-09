import React, { useState, useCallback } from "react";
import FileUpload from "../../../atoms/file-upload";
import Button from "../../../atoms/button";
import { BaseModal } from "../../../atoms/base-modal";

export interface ModalFileUploadProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onUpload?: (files: File[]) => void;
  title?: string;
  trigger?: React.ReactNode;
}

const ModalFileUpload: React.FC<ModalFileUploadProps> = ({
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  onUpload,
  title = "Upload Media",
  trigger,
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;
  const onOpenChange = (val: boolean) => {
    if (isControlled) {
      setControlledOpen?.(val);
    } else {
      setInternalOpen(val);
    }
  };

  const handleFileChange = useCallback((files: File[]) => {
    setSelectedFiles(files);
  }, []);

  const handleUpload = () => {
    if (selectedFiles.length > 0) {
      onUpload?.(selectedFiles);
      onOpenChange(false);
      setSelectedFiles([]);
    }
  };

  const handleCancel = () => {
    onOpenChange(false);
    setSelectedFiles([]);
  };

  return (
    <>
      {trigger && (
        <BaseModal.Trigger onClick={() => onOpenChange(true)}>
          {trigger}
        </BaseModal.Trigger>
      )}
      <BaseModal open={open} onOpenChange={onOpenChange} size="sm">
      <BaseModal.Header>
        <BaseModal.Title>{title}</BaseModal.Title>
        <BaseModal.Close />
      </BaseModal.Header>

      <BaseModal.Content>
        <FileUpload
          placeholder="Select images or videos to upload"
          label="Choose files"
          onFileChange={handleFileChange}
          multiple
        />
      </BaseModal.Content>

      <BaseModal.Footer>
        <Button variant="secondary" onClick={handleCancel}>
          Cancel
        </Button>
        
        <Button
          variant="primary"
          onClick={handleUpload}
          disabled={selectedFiles.length === 0}
        >
          Upload
        </Button>
      </BaseModal.Footer>
      </BaseModal>
    </>
  );
};

export default ModalFileUpload;
