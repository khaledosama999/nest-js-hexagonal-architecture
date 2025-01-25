import { Injectable } from '@nestjs/common';
import { AccountPersistenceEntity } from './account.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class AccountRepo {
  constructor(
    @InjectModel(AccountPersistenceEntity)
    private readonly accountModel: typeof AccountPersistenceEntity,
  ) {}

  async getById(id: string) {
    return this.accountModel.findOne({ where: { id } });
  }

  async updateBalance(id: string, amount: number) {
    await this.accountModel.update({ amount }, { where: { id } });
  }
}
