import { useState, useEffect, useMemo } from "react";
import type { RxAxiosCaller } from "../../services/api.svc";
import type { TApiResult } from "../../services/type";

export function useApiResult<TData, TVariables = undefined, TRawResponse = unknown>(
  api: RxAxiosCaller<TData, TVariables, TRawResponse>
) {
  const [result, setResult] = useState<TApiResult<TData>>(() => api.getResult());

  useEffect(() => {
    const sub = api.result$.subscribe(setResult);
    return () => sub.unsubscribe();
  }, [api]);

  return useMemo(() => ({
    status: result.status,
    data: result.status === "success" ? result.data : null,
    error: result.status === "error" ? result.message : null,
    isLoading: result.status === "loading",
    isSuccess: result.status === "success",
    isError: result.status === "error",
    isIdle: result.status === "idle",
  }), [result]);
}
