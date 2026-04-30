export interface IRequestLogin {
  username: string;
  password: string;
}

export interface IResponseLogin {
  data: {
    accessToken: string;
    refreshToken: string;
  }
}
