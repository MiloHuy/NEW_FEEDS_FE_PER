import type { IPost } from "../type";

export interface IPostDetailRequest {
  id: string
}

export interface IPostDetailResponse {
  data: DeepPartial<IPost>
}
