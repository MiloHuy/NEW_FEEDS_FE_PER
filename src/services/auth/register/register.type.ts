export interface IRequestRegister {
  username: string;
  email: string;
  password: string;
}

export interface IResponseRegister {
  refreshToken: string;
  accessToken: string;
}
