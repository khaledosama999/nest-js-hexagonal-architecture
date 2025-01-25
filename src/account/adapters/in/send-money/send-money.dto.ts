import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';
import { SendMoneyCommandBuilder } from 'src/account/application/commands/send-money-command.ts/send-money-command-builder';

export class SendMoneyDTO {
  @IsString({ always: true })
  @IsNotEmpty()
  senderAccountId: string;

  @IsString({ always: true })
  @IsNotEmpty()
  targetAccountId: string;

  @IsNumber()
  @Min(1)
  amount: number;

  toSendMonyCommand() {
    return new SendMoneyCommandBuilder()
      .setSenderAccountId(this.senderAccountId)
      .seTargetAccountId(this.targetAccountId)
      .setTransferAmount(this.amount)
      .build();
  }
}
