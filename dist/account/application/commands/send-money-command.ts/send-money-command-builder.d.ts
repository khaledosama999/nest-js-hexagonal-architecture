import { SendMoneyCommand } from './send-money.command';
import { CommandBuilder } from '../command-builder.interface';
export declare class SendMoneyCommandBuilder implements CommandBuilder<SendMoneyCommand> {
    private senderAccountId;
    private targetAccountId;
    private transferAmount;
    setSenderAccountId(id: string): this;
    seTargetAccountId(id: string): this;
    setTransferAmount(amount: number): this;
    build(): SendMoneyCommand;
}
