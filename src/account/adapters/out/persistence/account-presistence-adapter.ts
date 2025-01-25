import { Injectable } from '@nestjs/common';
import { AccountRepo } from './account.repo';
import { LoadAccountPort } from 'src/account/application/ports/out/presistence/load-account.port';
import { UpdateBalancePort } from 'src/account/application/ports/out/presistence/update-balance.port';
import { Account } from 'src/account/domain/entities/Account';
import { AccountPersistenceEntity } from './account.entity';

@Injectable()
export class AccountPersistenceAdapter
  implements LoadAccountPort, UpdateBalancePort
{
  constructor(private readonly accountRepo: AccountRepo) {}

  async getById(id: string): Promise<Account | null> {
    const account = await this.accountRepo.getById(id);
    return account ? this.mapToDomain(account) : null;
  }

  async updateBalance(account: Account, amount: number): Promise<void> {
    await this.accountRepo.updateBalance(account.getId(), amount);
  }

  private mapToDomain(entity: AccountPersistenceEntity) {
    return new Account(entity.id, entity.amount);
  }

  private mapToPersistence(domain: Account) {
    return {
      id: domain.getId(),
      amount: domain.getBalance(),
    };
  }
}
