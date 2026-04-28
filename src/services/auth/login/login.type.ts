export interface IRequestLogin {
  email: string;
  password: string;
}

export interface IResponseLogin {
  access_token: string;
  refresh_token: string;

  user: {
    id: string;
    email: string;
    name: string;
    avatar: string;
  };
}
