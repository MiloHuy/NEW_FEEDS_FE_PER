import { useState, useEffect, useRef, useCallback } from "react";
import clsx from "clsx";
import type { ToasterProps, ToastItem, ToastVariant } from "./type";
import { toast } from "./toast.svc";
import Button from "../button";
import { useToastItems } from "../../hook/components/useToastItems";

const ICONS: Record<ToastVariant, string> = {
  success: "✓",
  error:   "✕",
  warning: "!",
  info:    "i",
  default: "·",
};

function ToastCard({ item }: { item: ToastItem }) {
  const [visible,  setVisible]  = useState(false);
  const [progress, setProgress] = useState(100);

  const timerRef    = useRef<ReturnType<typeof setTimeout>>(undefined);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined);
  const startedAt   = useRef(Date.now());
  const remaining   = useRef(item.duration ?? 4000);
  const paused      = useRef(false);

  const dismiss = useCallback(() => {
    setVisible(false);
    
    setTimeout(() => toast.dismiss(item.id), 300);
  }, [item.id]);

  const startTimer = useCallback(() => {
    if (item.duration === 0) return;
    
    const dur = remaining.current;
    startedAt.current = Date.now();
    timerRef.current    = setTimeout(dismiss, dur);
    
    intervalRef.current = setInterval(() => {
      if (paused.current) return;
      
      const elapsed = Date.now() - startedAt.current;
      
      setProgress(Math.max(0, 100 - (elapsed / dur) * 100));
    }, 30);

  }, [dismiss, item.duration]);

  const pauseTimer = () => {
    if (item.duration === 0) return;
    
    paused.current = true;
    remaining.current -= Date.now() - startedAt.current;
    
    clearTimeout(timerRef.current);
    clearInterval(intervalRef.current);
  };

  const resumeTimer = () => {
    if (item.duration === 0) return;
    paused.current = false;
    startTimer();
  };

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    startTimer();
    
    return () => {
      clearTimeout(timerRef.current);
      clearInterval(intervalRef.current);
    };
  }, []);

  const variant = item.variant ?? "default";

  return (
    <div
      className={clsx("toast-card", `toast-card--${variant}`, visible && "toast-card--visible")}
      onMouseEnter={pauseTimer}
      onMouseLeave={resumeTimer}
      role="alert"
      aria-live="polite"
    >
      <span className="toast-card__icon">{ICONS[variant]}</span>

      <div className="toast-card__body">
        <p className="toast-card__message">{item.message}</p>
        {item.description && (
          <p className="toast-card__description">{item.description}</p>
        )}
        {item.action && (
          <button
            className="toast-card__action"
            onClick={() => { item.action!.onClick(); dismiss(); }}
          >
            {item.action.label}
          </button>
        )}
      </div>

      <Button className="toast-card__close" onClick={dismiss} aria-label="Dismiss">
        ✕
      </Button>

      {item.duration !== 0 && (
        <div className="toast-card__progress" style={{ width: `${progress}%` }} />
      )}
    </div>
  );
}

function Toaster({ position = "bottom-right", maxToasts = 5 }: ToasterProps) {
  const items = useToastItems();

  return (
    <div className={clsx("toaster", `toaster--${position}`)}>
      {items.slice(-maxToasts).map((item) => (
        <ToastCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Toaster
