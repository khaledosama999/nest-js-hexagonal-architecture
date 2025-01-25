import * as Joi from 'joi';
import { CommandValidate } from '../command-validate';

export class SendMoneyCommand extends CommandValidate<{
  senderAccountId: string;
  targetAccountId: string;
  transferAmount: number;
}> {
  constructor(
    private readonly senderAccountId: string,
    private readonly targetAccountId: string,
    private readonly transferAmount: number,
  ) {
    super(
      Joi.object({
        senderAccountId: Joi.string().required(),
        targetAccountId: Joi.string().required(),
        transferAmount: Joi.number().positive().required(),
      }),
    );

    this.validate();
  }

  validate(): void {
    super.validate({
      senderAccountId: this.senderAccountId,
      targetAccountId: this.targetAccountId,
      transferAmount: this.transferAmount,
    });
  }

  getSenderAccountId(): string {
    return this.senderAccountId;
  }

  getTargetAccountId(): string {
    return this.targetAccountId;
  }

  getTransferAmount(): number {
    return this.transferAmount;
  }
}
