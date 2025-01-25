import { SendMoneyCommand } from '../../commands/send-money-command.ts/send-money.command';
export declare abstract class SendMoneyUseCase {
    abstract sendMoney(sendMoneyCommand: SendMoneyCommand): Promise<boolean>;
}
