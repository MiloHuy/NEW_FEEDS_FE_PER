import React, { useEffect, useRef, useCallback, createContext, useContext } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
import type { BaseModalCloseProps, BaseModalContentProps, BaseModalDescriptionProps, BaseModalFooterProps, BaseModalHeaderProps, BaseModalTitleProps, ModalContextValue, ModalSize } from "./type";

const ModalContext = createContext<ModalContextValue | null>(null);

function useModalContext() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("Modal sub-components must be used inside <BaseModal>");
  return ctx;
}

function BaseModalHeader({ children, className }: BaseModalHeaderProps) {
  return (
    <div className={clsx("base-modal__header", className)}>
      {children}
    </div>
  );
}

function BaseModalTitle({ children, className }: BaseModalTitleProps) {
  return (
    <h3 id="modal-title" className={clsx("base-modal__title", className)}>
      {children}
    </h3>
  );
}

function BaseModalDescription({ children, className }: BaseModalDescriptionProps) {
  return (
    <p id="modal-desc" className={clsx("base-modal__description", className)}>
      {children}
    </p>
  );
}

function BaseModalContent({ children, className }: BaseModalContentProps) {
  return (
    <div className={clsx("base-modal__content", className)}>
      {children}
    </div>
  );
}

function BaseModalFooter({ children, className }: BaseModalFooterProps) {
  return (
    <div className={clsx("base-modal__footer", className)}>
      {children}
    </div>
  );
}

function BaseModalClose({ children, className }: BaseModalCloseProps) {
  const { onClose } = useModalContext();

  if (children) {
    return (
      <span className={className} onClick={onClose} style={{ cursor: "pointer" }}>
        {children}
      </span>
    );
  }

  return (
    <button
      type="button"
      className={clsx("base-modal__close-btn", className)}
      onClick={onClose}
      aria-label="Close"
    >
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <path d="M1 1L14 14M14 1L1 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </button>
  );
}

// DialogTrigger
export interface BaseModalTriggerProps {
  children: React.ReactNode;
  onClick?: () => void;
}
function BaseModalTrigger({ children, onClick }: BaseModalTriggerProps) {
  return (
    <span onClick={onClick} style={{ cursor: "pointer", display: "inline-flex" }}>
      {children}
    </span>
  );
}

export interface BaseModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  size?: ModalSize;
  /** Close when clicking backdrop */
  modal?: boolean;
  children: React.ReactNode;
  className?: string;
}

function BaseModalRoot({
  open,
  onOpenChange,
  size = "md",
  modal = true,
  children,
  className,
}: BaseModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  const onClose = useCallback(() => onOpenChange(false), [onOpenChange]);

  useEffect(() => {
    if (!open) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handler);

    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (open) setTimeout(() => panelRef.current?.focus(), 50);
  }, [open]);

  if (!open) return null;

  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <div
        className="base-modal__overlay"
        onClick={modal ? onClose : undefined}
        aria-hidden="true"
      />
      <div
        className="base-modal__wrapper"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
      >
        <div
          ref={panelRef}
          tabIndex={-1}
          className={clsx("base-modal__panel", `base-modal__panel--${size}`, className)}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.body
  );
}

export const BaseModal = Object.assign(BaseModalRoot, {
  Trigger:     BaseModalTrigger,
  Header:      BaseModalHeader,
  Title:       BaseModalTitle,
  Description: BaseModalDescription,
  Content:     BaseModalContent,
  Footer:      BaseModalFooter,
  Close:       BaseModalClose,
});

export default BaseModal;
