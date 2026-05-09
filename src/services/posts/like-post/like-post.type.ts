import type { TApiResult } from "../../type";

export interface ILikePostResponse extends TApiResult<{
  success: boolean;
  message?: string;
}> { }

export interface ILikePostRequest {
  id: string;
}
