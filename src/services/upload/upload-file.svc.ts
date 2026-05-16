import { RxAxiosCaller } from "../api.svc";
import type { IUploadFileRequest, IUploadFileResponse } from "./upload-file.type";

const API_UPLOAD_ROUTERS = {
  POST: {
    UPLOAD: '/media/upload'
  }
}

class UploadFileCaller extends RxAxiosCaller<
  IUploadFileResponse['data'],
  IUploadFileRequest,
  IUploadFileResponse> {
  constructor() {
    super(API_UPLOAD_ROUTERS.POST.UPLOAD, "POST", (raw) => raw.data)
  }
}

export const uploadFileCaller = new UploadFileCaller()
