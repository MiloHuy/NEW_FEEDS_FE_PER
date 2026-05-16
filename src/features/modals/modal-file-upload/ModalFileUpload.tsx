import React, { useState } from "react";
import FileUpload from "../../../atoms/file-upload";
import Button from "../../../atoms/button";
import { BaseModal } from "../../../atoms/base-modal";
import Input from "../../../atoms/input/Input";
import Select from "../../../atoms/select";
import { EStatusPost } from "../../../services/posts/type";
import { createPostCaller } from "../../../services/posts/create-post/create-post.svc";
import { useYupForm } from "../../../hook/useYupForm";
import { schemaCreatePost } from "./schema";

export interface ModalFileUploadProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onSuccess?: () => void;
  title?: string;
  trigger?: React.ReactNode;
}

const ModalFileUpload: React.FC<ModalFileUploadProps> = ({
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  onSuccess,
  title = "Create Post",
  trigger,
}) => {
  const [internalOpen, setInternalOpen] = useState(false);

  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;
  
  const { register, handleSubmit, getError, setValue, isSubmitting, reset } = useYupForm({
    schema: schemaCreatePost,
    defaultValues: {
      content: "",
      status: EStatusPost.PUBLIC,
      mediaUrl: "",
    },
    onSubmit: async (values) => {
      try {
        await createPostCaller.execute({
          user_id: "679f228d-f5f1-4f91-88f5-d5c5a0839e55",
          ...values,
        });
        onSuccess?.();
        onOpenChange(false);
      } catch (error) {
        console.error("Failed to create post", error);
      }
    }
  });

  const onOpenChange = (val: boolean) => {
    if (isControlled) {
      setControlledOpen?.(val);
    } else {
      setInternalOpen(val);
    }
    
    if (!val) {
      reset();
    }
  };

  return (
    <>
      {trigger && (
        <BaseModal.Trigger onClick={() => onOpenChange(true)}>
          {trigger}
        </BaseModal.Trigger>
      )}
      <BaseModal open={open} onOpenChange={onOpenChange} size="md">
        <BaseModal.Header>
          <BaseModal.Title>{title}</BaseModal.Title>
          <BaseModal.Close />
        </BaseModal.Header>

        <BaseModal.Content>
          <form id="create-post-form" onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              {...register("content")}
              label="Content"
              type="text"
              placeholder="What's on your mind?"
              helperText={getError("content")}
              state={getError("content") ? "error" : "default"}
            />
            
            <Select
              {...register("status")}
              label="Status"
              options={[
                { label: "Public", value: EStatusPost.PUBLIC },
                { label: "Private", value: EStatusPost.PRIVATE },
              ]}
              helperText={getError("status")}
              state={getError("status") ? "error" : "default"}
            />

            <FileUpload
              label="Media"
              onFileChange={(entries) => {
                const successfulEntry = entries.find(e => e.status === "success");
                setValue("mediaUrl", successfulEntry?.url || "");
              }}
              multiple={false}
            />
          </form>
        </BaseModal.Content>

        <BaseModal.Footer>
          <Button variant="secondary" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          
          <Button
            form="create-post-form"
            type="submit"
            variant="primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Posting..." : "Create Post"}
          </Button>
        </BaseModal.Footer>
      </BaseModal>
    </>
  );
};

export default ModalFileUpload;
