import { RxAxiosCaller } from "../../api.svc";
import { API_POST_ROUTERS } from "../router";
import type { ILikePostRequest, ILikePostResponse } from "./like-post.type";

class LikePostSvcCaller extends RxAxiosCaller<
  ILikePostResponse['data'],
  ILikePostRequest,
  ILikePostResponse
> {
  constructor() {
    super(API_POST_ROUTERS.POST.LIKE.replace("{id}", "id"), "POST", (raw) => raw.data)
  }
}

export const likePostSvcCaller = new LikePostSvcCaller();
