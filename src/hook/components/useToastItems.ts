import { useEffect, useState } from "react";
import type { ToastItem } from "../../atoms/toast/type";
import { toast } from "../../atoms/toast/toast.svc";

export function useToastItems(): ToastItem[] {
  const [items, setItems] = useState<ToastItem[]>(() => toast.items$.getValue());

  useEffect(() => {
    const sub = toast.items$.subscribe(setItems);

    return () => sub.unsubscribe();
  }, []);

  return items;
}
