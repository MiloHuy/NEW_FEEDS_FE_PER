export type ModalSize = "xs" | "sm" | "md" | "lg" | "xl" | "full";

export interface ModalContextValue {
  onClose: () => void;
}

export interface BaseModalHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export interface BaseModalTitleProps {
  children: React.ReactNode;
  className?: string;
}

export interface BaseModalDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export interface BaseModalContentProps {
  children: React.ReactNode;
  className?: string;
}

export interface BaseModalFooterProps {
  children: React.ReactNode;
  className?: string;
}

export interface BaseModalCloseProps {
  children?: React.ReactNode;
  className?: string;
  asChild?: boolean;
}
