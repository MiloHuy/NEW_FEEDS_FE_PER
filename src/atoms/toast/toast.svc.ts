import { Subject, BehaviorSubject } from "rxjs";
import type { ToastEvent, ToastItem, ToastOptions } from "./type";

export class ToastService {
  private readonly event$$ = new Subject<ToastEvent>();
  readonly items$ = new BehaviorSubject<ToastItem[]>([]);
  readonly event$ = this.event$$.asObservable();

  constructor() {
    this.event$$.subscribe((event) => {
      switch (event.type) {
        case "add":
          this.items$.next([...this.items$.getValue(), event.payload]);
          break;
        case "dismiss":
          this.items$.next(this.items$.getValue().filter((t) => t.id !== event.payload.id));
          break;
        case "dismissAll":
          this.items$.next([]);
          break;
      }
    });
  }


  show(message: string, options?: ToastOptions): string {
    return this.emit(message, options);
  }

  success(message: string, options?: Omit<ToastOptions, "variant">): string {
    return this.emit(message, { ...options, variant: "success" });
  }

  error(message: string, options?: Omit<ToastOptions, "variant">): string {
    return this.emit(message, { ...options, variant: "error" });
  }

  warning(message: string, options?: Omit<ToastOptions, "variant">): string {
    return this.emit(message, { ...options, variant: "warning" });
  }

  info(message: string, options?: Omit<ToastOptions, "variant">): string {
    return this.emit(message, { ...options, variant: "info" });
  }

  dismiss(id: string): void {
    this.event$$.next({ type: "dismiss", payload: { id } });
  }

  dismissAll(): void {
    this.event$$.next({ type: "dismissAll" });
  }

  private emit(message: string, options: ToastOptions = {}): string {
    const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    this.event$$.next({
      type: "add",
      payload: {
        id,
        message,
        variant: options.variant ?? "default",
        duration: options.duration ?? 4000,
        description: options.description,
        action: options.action,
      },
    });
    return id;
  }
}

export const toast = new ToastService();
