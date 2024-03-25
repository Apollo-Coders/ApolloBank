import { BaseUser } from "./BaseUser";
import { Transaction } from "./Transaction";

export interface Account {
    id: number;
    balance: number;
    accountNumber: number;
    creditLimit: number;
    transactions?: Transaction[];
    userId: string;
    user?: BaseUser;
}
