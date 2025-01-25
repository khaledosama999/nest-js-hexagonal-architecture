import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Transactional } from 'sequelize-transactional-decorator';
import { SendMoneyUseCase } from '../../ports/in/send-money.use-case';
import { LoadAccountPort } from '../../ports/out/presistence/load-account.port';
import { UpdateBalancePort } from '../../ports/out/presistence/update-balance.port';
import { SendMoneyCommand } from '../../commands/send-money-command.ts/send-money.command';

@Injectable()
export class SendMoneyService extends SendMoneyUseCase {
  constructor(
    @Inject(LoadAccountPort) private readonly loadAccountPort: LoadAccountPort,
    @Inject(UpdateBalancePort)
    private readonly updateBalancePort: UpdateBalancePort,
  ) {
    super();
  }

  @Transactional()
  async sendMoney(sendMoneyCommand: SendMoneyCommand): Promise<boolean> {
    const sourceAccount = await this.loadAccountPort.getById(
      sendMoneyCommand.getSenderAccountId(),
    );
    const targetAccount = await this.loadAccountPort.getById(
      sendMoneyCommand.getTargetAccountId(),
    );

    if (!sourceAccount || !targetAccount) {
      throw new NotFoundException('Account not found');
    }

    if (sourceAccount.getBalance() < sendMoneyCommand.getTransferAmount()) {
      throw new BadRequestException('Insufficient funds');
    }

    sourceAccount.withdraw(sendMoneyCommand.getTransferAmount());
    targetAccount.deposit(sendMoneyCommand.getTransferAmount());

    await this.updateBalancePort.updateBalance(
      sourceAccount,
      sourceAccount.getBalance(),
    );
    await this.updateBalancePort.updateBalance(
      targetAccount,
      targetAccount.getBalance(),
    );

    return true;
  }
}
