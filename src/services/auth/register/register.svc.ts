import { RxAxiosCaller } from "../../api.svc";
import { API_AUTH_ROUTERS } from "../router";
import type { IRequestRegister, IResponseRegister } from "./register.type";

class RegisterSvcCaller extends RxAxiosCaller<
  IResponseRegister['data'],
  IRequestRegister,
  IResponseRegister
> {
  constructor() {
    super(API_AUTH_ROUTERS.POST.REGISTER, "POST", (raw) => raw.data)
  }
}

export const registerSvcCaller = new RegisterSvcCaller();
