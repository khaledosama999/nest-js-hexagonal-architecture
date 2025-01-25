import { CommandValidate } from '../command-validate';
export declare class SendMoneyCommand extends CommandValidate<{
    senderAccountId: string;
    targetAccountId: string;
    transferAmount: number;
}> {
    private readonly senderAccountId;
    private readonly targetAccountId;
    private readonly transferAmount;
    constructor(senderAccountId: string, targetAccountId: string, transferAmount: number);
    validate(): void;
    getSenderAccountId(): string;
    getTargetAccountId(): string;
    getTransferAmount(): number;
}
