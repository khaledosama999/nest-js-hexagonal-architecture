import { Account } from 'src/account/domain/entities/Account';

export interface LoadAccountPort {
  getById(id: string): Promise<Account | null>;
}

export const LoadAccountPort = Symbol('LoadAccountPort');
