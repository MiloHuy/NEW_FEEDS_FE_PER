export interface IRequestLogin {
  username: string;
  password: string;
}

export interface IResponseLogin {
  accessToken: string;
  refreshToken: string;
}
