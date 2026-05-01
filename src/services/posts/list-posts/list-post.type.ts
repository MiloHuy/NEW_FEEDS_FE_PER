import type { IPost } from "../type";

export interface IListPostsRequest {
  page: number;
  size: number;
  search?: string
}

export interface IListPostsResponse {
  data: DeepPartial<IPost>[]
}
