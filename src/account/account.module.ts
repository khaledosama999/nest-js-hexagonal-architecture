import { Module } from '@nestjs/common';
import { SendMoneyController } from './adapters/in/send-money/send-money.controller';
import { AccountPersistenceAdapter } from './adapters/out/persistence/account-presistence-adapter';
import { AccountRepo } from './adapters/out/persistence/account.repo';
import { SequelizeModule } from '@nestjs/sequelize';
import { AccountPersistenceEntity } from './adapters/out/persistence/account.entity';
import { SendMoneyService } from './application/services/send-money-use-case/send-money.service';
import { SendMoneyUseCase } from './application/ports/in/send-money.use-case';
import { LoadAccountPort } from './application/ports/out/presistence/load-account.port';
import { UpdateBalancePort } from './application/ports/out/presistence/update-balance.port';

@Module({
  imports: [SequelizeModule.forFeature([AccountPersistenceEntity])],
  providers: [
    {
      provide: SendMoneyUseCase,
      useClass: SendMoneyService,
    },
    AccountPersistenceAdapter,
    AccountRepo,
    {
      provide: LoadAccountPort,
      useClass: AccountPersistenceAdapter,
    },
    {
      provide: UpdateBalancePort,
      useClass: AccountPersistenceAdapter,
    },
  ],
  exports: [SendMoneyUseCase],
  controllers: [SendMoneyController],
})
export class AccountModule {}
