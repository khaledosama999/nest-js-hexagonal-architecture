import { SendMoneyCommand } from './send-money.command';
import { CommandBuilder } from '../command-builder.interface';

export class SendMoneyCommandBuilder
  implements CommandBuilder<SendMoneyCommand>
{
  private senderAccountId: string;
  private targetAccountId: string;
  private transferAmount: number;

  setSenderAccountId(id: string) {
    this.senderAccountId = id;
    return this;
  }

  seTargetAccountId(id: string) {
    this.targetAccountId = id;
    return this;
  }

  setTransferAmount(amount: number) {
    this.transferAmount = amount;
    return this;
  }

  build() {
    return new SendMoneyCommand(
      this.senderAccountId,
      this.targetAccountId,
      this.transferAmount,
    );
  }
}
