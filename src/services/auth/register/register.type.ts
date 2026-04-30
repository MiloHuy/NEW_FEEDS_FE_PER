export interface IRequestRegister {
  username: string;
  email: string;
  password: string;
}

export interface IResponseRegister {
  data: {
    refreshToken: string;
    accessToken: string;
  }
}
