import type { Meta, StoryObj } from "@storybook/react";
import FileUpload from "./FileUpload";

const meta: Meta<typeof FileUpload> = {
  title: "Atoms/FileUpload",
  component: FileUpload,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "File upload input built on top of the `Input` atom. Validates file size client-side and exposes `onFileChange` / `onError` callbacks.",
      },
    },
  },
  argTypes: {
    maxSizeMB: {
      control: { type: "number", min: 0.1, max: 100, step: 0.5 },
      description: "Maximum allowed file size in MB",
    },
    accept: {
      control: "text",
      description: 'MIME types or extensions e.g. "image/*" or ".pdf,.docx"',
    },
    disabled: {
      control: "boolean",
    },
    label: {
      control: "text",
    },
    helperText: {
      control: "text",
    },
    onFileChange: { action: "onFileChange" },
    onError: { action: "onError" },
  },
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const Default: Story = {
  args: {
    label: "Upload file",
    maxSizeMB: 2,
  },
};

/** Accept images only */
export const ImagesOnly: Story = {
  args: {
    label: "Profile photo",
    accept: "image/*",
    maxSizeMB: 2,
    helperText: "PNG, JPG, WEBP — max 2 MB",
  },
};

/** Accept PDF only */
export const PdfOnly: Story = {
  args: {
    label: "Contract document",
    accept: ".pdf",
    maxSizeMB: 2,
    helperText: "PDF only — max 2 MB",
  },
};

export const StrictLimit: Story = {
  args: {
    label: "Thumbnail",
    accept: "image/*",
    maxSizeMB: 0.5,
    helperText: "Max 500 KB — try uploading a large image to see the error",
  },
};

export const Disabled: Story = {
  args: {
    label: "Attachment",
    disabled: true,
    helperText: "Upload is currently disabled",
  },
};

export const WithSecondaryLabel: Story = {
  args: {
    label: "Resume",
    secondaryLabel: "Optional",
    accept: ".pdf,.doc,.docx",
    maxSizeMB: 2,
    helperText: "PDF or Word — max 2 MB",
  },
}

export const AllFileTypes: Story = {
  args: {
    label: "Any file",
    accept: undefined,
    maxSizeMB: 2,
    helperText: "Any file type accepted — max 2 MB",
  },
};