import { Account } from 'src/account/domain/entities/Account';
export interface LoadAccountPort {
    getById(id: string): Promise<Account | null>;
}
export declare const LoadAccountPort: unique symbol;
