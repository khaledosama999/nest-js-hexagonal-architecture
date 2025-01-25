import { Account } from 'src/account/domain/entities/Account';
export interface UpdateBalancePort {
    updateBalance(account: Account, amount: number): Promise<void>;
}
export declare const UpdateBalancePort: unique symbol;
