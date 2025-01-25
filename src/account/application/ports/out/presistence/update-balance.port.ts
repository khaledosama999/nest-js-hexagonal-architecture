import { Account } from 'src/account/domain/entities/Account';

export interface UpdateBalancePort {
  updateBalance(account: Account, amount: number): Promise<void>;
}

export const UpdateBalancePort = Symbol('UpdateBalancePort');
