import { RxAxiosCaller } from "../../api.svc";
import { API_AUTH_ROUTERS } from "../router";
import type { IRequestRefreshToken, IResponseRefreshToken } from "./refresh-token.type";

class RefreshTokenSvcCaller extends RxAxiosCaller<
  IResponseRefreshToken,
  IRequestRefreshToken,
  IResponseRefreshToken
> {
  constructor() {
    super(API_AUTH_ROUTERS.POST.LOGIN, "POST")
  }
}

export const refreshTokenSvcCaller = new RefreshTokenSvcCaller();
