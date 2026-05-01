import { RxAxiosCaller } from "../../api.svc";
import { API_POST_ROUTERS } from "../router";
import type { IPostDetailRequest, IPostDetailResponse } from "./post-detail.type";

class PostDetailCaller extends RxAxiosCaller<
  IPostDetailResponse['data'],
  IPostDetailRequest,
  IPostDetailResponse
> {
  constructor() {
    super(API_POST_ROUTERS.GET.DETAIL, "GET", (raw) => raw.data)
  }
}

export const postDetailCaller = new PostDetailCaller()
