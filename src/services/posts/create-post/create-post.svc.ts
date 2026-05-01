import { RxAxiosCaller } from "../../api.svc";
import { API_POST_ROUTERS } from "../router";
import type { ICreatePostRequest, ICreatePostResponse } from "./create-post.type";

class CreatePostCaller extends RxAxiosCaller<
  ICreatePostResponse['data'],
  ICreatePostRequest,
  ICreatePostResponse
> {
  constructor() {
    super(API_POST_ROUTERS.POST.CREATE, 'POST', (raw) => raw.data)
  }
}

export const createPostCaller = new CreatePostCaller()
