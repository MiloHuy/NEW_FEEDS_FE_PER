import { useState, useEffect, useRef, useCallback } from "react";
import type { RxAxiosCaller } from "../../services/api.svc";
import type { TApiResult } from "../../services/type";


interface UseApiCallerOptions<TVariables> {
  variables?: TVariables;
}

interface UseApiCallerReturn<TData, TVariables> {
  status: TApiResult<TData>["status"];
  data: TApiResult<TData>["data"] | null;
  error: TApiResult<TData>["message"] | null;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  execute: (
    vars?: TVariables,
    onSuccess?: (data: TData) => void,
    onError?: (err: unknown) => void
  ) => Promise<TApiResult<TData> | null>;
  abort: () => void;
  reset: () => void;
}


export function useApiCaller<TData, TVariables = undefined, TRawResponse = unknown>(
  api: RxAxiosCaller<TData, TVariables, TRawResponse> | null,
  options: UseApiCallerOptions<TVariables> = {}
): UseApiCallerReturn<TData, TVariables> {

  const [result, setResult] = useState<TApiResult<TData>>(
    () => api?.getResult() ?? { status: "idle" }
  );

  const apiRef = useRef(api);
  const variablesRef = useRef(options.variables);

  apiRef.current = api;
  variablesRef.current = options.variables;

  useEffect(() => {
    if (!api) return;
    const sub = api.result$.subscribe(setResult);
    return () => sub.unsubscribe();
  }, [api]);

  useEffect(() => {
    if (apiRef.current) {
      void apiRef.current.execute(variablesRef.current);
    }
  }, []);

  const execute = useCallback(async (
    vars?: TVariables,
    onSuccess?: (data: TData) => void,
    onError?: (err: unknown) => void
  ): Promise<TApiResult<TData> | null> => {
    if (!apiRef.current) return null;
    try {
      const res = await apiRef.current.execute(vars);
      if (res.status === "success" && res && res.data !== undefined) {
        onSuccess?.(res.data as TData);
      }
      return res;
    } catch (err) {
      onError?.(err);
      return { status: "error", message: "Call failed" };
    }
  }, []);

  const abort = useCallback(() => apiRef.current?.abort(), []);
  const reset = useCallback(() => apiRef.current?.reset(), []);

  const data = result.status === "success" ? result.data : null;
  const error = result.status === "error" ? result.message : null;
  const isLoading = result.status === "loading";
  const isSuccess = result.status === "success";
  const isError = result.status === "error";

  return { status: result.status, data, error, isLoading, isSuccess, isError, execute, abort, reset };
}
