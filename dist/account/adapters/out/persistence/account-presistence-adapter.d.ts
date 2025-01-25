import { AccountRepo } from './account.repo';
import { LoadAccountPort } from 'src/account/application/ports/out/presistence/load-account.port';
import { UpdateBalancePort } from 'src/account/application/ports/out/presistence/update-balance.port';
import { Account } from 'src/account/domain/entities/Account';
export declare class AccountPersistenceAdapter implements LoadAccountPort, UpdateBalancePort {
    private readonly accountRepo;
    constructor(accountRepo: AccountRepo);
    getById(id: string): Promise<Account | null>;
    updateBalance(account: Account, amount: number): Promise<void>;
    private mapToDomain;
    private mapToPersistence;
}
