import { BaseUser } from "./BaseUser";

export interface CreateUser extends BaseUser {
    password: string;
  }
  