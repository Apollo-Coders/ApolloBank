import { BaseUser } from "./BaseUser";

export interface UserResponse extends BaseUser{
    id: string;
    accountNumber: number;
}