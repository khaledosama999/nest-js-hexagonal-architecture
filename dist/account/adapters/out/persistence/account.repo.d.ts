import { AccountPersistenceEntity } from './account.entity';
export declare class AccountRepo {
    private readonly accountModel;
    constructor(accountModel: typeof AccountPersistenceEntity);
    getById(id: string): Promise<AccountPersistenceEntity>;
    updateBalance(id: string, amount: number): Promise<void>;
}
