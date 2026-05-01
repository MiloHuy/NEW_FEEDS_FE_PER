import { RxAxiosCaller } from "../../api.svc";
import { API_AUTH_ROUTERS } from "../router";
import type { IRequestLogin, IResponseLogin } from "./login.type";

class LoginSvcCaller extends RxAxiosCaller<
  IResponseLogin['data'],
  IRequestLogin,
  IResponseLogin
> {
  constructor() {
    super(API_AUTH_ROUTERS.POST.LOGIN, "POST", (raw) => raw.data)
  }
}

export const loginSvcCaller = new LoginSvcCaller();
