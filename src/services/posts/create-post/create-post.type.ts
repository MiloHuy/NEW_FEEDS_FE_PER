import type { EStatusPost } from "../type"

export interface ICreatePostRequest {
  user_id: string
  content: string
  mediaUrl: string
  status: EStatusPost
}

export interface ICreatePostResponse {
  data: {
    message: string
  }
}
