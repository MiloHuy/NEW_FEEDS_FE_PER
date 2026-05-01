export enum EStatusPost {
  PUBLIC = "PUBLIC",
  PRIVATE = "PRIVATE"
}

export interface IPost {
  id: string
  userId: string
  username: string
  content: string
  status: EStatusPost
  mediaUrl: string
  likeCount: number
  replyCount: number
  createdAt: Date
}
