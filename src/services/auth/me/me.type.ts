import type { TApiResult } from "../../type";

export interface IMeResponse extends TApiResult<{
  id: string;
  username: string;
  email: string;
}> { }

export interface IMeRequest { }

