export declare class SendMoneyDTO {
    senderAccountId: string;
    targetAccountId: string;
    amount: number;
    toSendMonyCommand(): import("../../../application/commands/send-money-command.ts/send-money.command").SendMoneyCommand;
}
