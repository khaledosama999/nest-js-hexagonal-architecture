import { SendMoneyCommand } from '../../commands/send-money-command.ts/send-money.command';

export abstract class SendMoneyUseCase {
  abstract sendMoney(sendMoneyCommand: SendMoneyCommand): Promise<boolean>;
}
