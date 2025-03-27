import type { IBaseResponse } from ".";
import type { IAdmin } from "../modules";

export interface IAuthResponse extends IBaseResponse {
  admin?: IAdmin | null;
  token?: string | null;
}
