export enum ROLE_ENUM {
  SUPER_ADMIN = "SUPER_ADMIN",
  ADMIN = "ADMIN",
  BRAND_ADMIN = "BRAND_ADMIN",
  UNAUTH = "UNAUTH",
}

export interface IAdmin {
  id: string;
  phoneNumber: string;
  email: string;
  firstName: string;
  lastName: string;
  role: ROLE_ENUM;
  createdAt: Date;
  companyId: string;
  verified: boolean;
}
