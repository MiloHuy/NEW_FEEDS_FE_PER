import { BehaviorSubject } from "rxjs";
import type { AxiosInstance, AxiosRequestConfig } from "axios";
import type { TApiResult, THttpMethod } from "./type";

export class RxAxiosCaller<
  TData,
  TVariables = Record<string, unknown> | undefined,
  TRawResponse = unknown
> {
  private subject = new BehaviorSubject<TApiResult<TData>>({ status: "idle" });
  private abortController: AbortController | null = null;

  constructor(
    private instance: AxiosInstance,
    private endpoint: string,
    private method: THttpMethod = "GET",
    private parser?: (raw: TRawResponse) => TData
  ) { }

  get result$() {
    return this.subject.asObservable();
  }

  getResult(): TApiResult<TData> {
    return this.subject.getValue();
  }

  reset(): void {
    this.abort()
    this.subject.next({ status: "idle" });
  }

  public abort() {
    if (this.abortController) {
      this.abortController.abort();
      this.subject.next({ status: "aborted" });
      this.abortController = null;
    }
  }

  async execute(variables?: TVariables, config?: AxiosRequestConfig) {
    this.abort()

    this.abortController = new AbortController();

    this.subject.next({ status: "loading" });

    try {
      const response = await this.instance.request<TRawResponse>({
        url: this.endpoint,
        method: this.method,
        data: this.method !== "GET" ? variables : undefined,
        params: this.method === "GET" ? variables : undefined,
        ...config,
      });

      this.abortController = null;

      const parsed = this.parser
        ? this.parser(response.data)
        : (response.data as unknown as TData);

      this.subject.next({ status: "success", data: parsed });
      return parsed;
    } catch (error) {

      this.subject.next({ status: "error", message: 'Error call api' });
      throw error;
    }
  }
}
