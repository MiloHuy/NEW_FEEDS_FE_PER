import type { TApiResult } from "../type";

export type TUploadFileType = "IMAGE" | "VIDEO" | "OTHER"

export type IUploadFileRequest = FormData | {
  files: File[]
}

export interface IUploadFileResponse extends TApiResult<{
  url: string
  type: TUploadFileType
}> { }
