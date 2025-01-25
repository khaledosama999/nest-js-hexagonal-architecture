"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendMoneyCommand = void 0;
const Joi = require("joi");
const command_validate_1 = require("../command-validate");
class SendMoneyCommand extends command_validate_1.CommandValidate {
    constructor(senderAccountId, targetAccountId, transferAmount) {
        super(Joi.object({
            senderAccountId: Joi.string().required(),
            targetAccountId: Joi.string().required(),
            transferAmount: Joi.number().positive().required(),
        }));
        this.senderAccountId = senderAccountId;
        this.targetAccountId = targetAccountId;
        this.transferAmount = transferAmount;
        this.validate();
    }
    validate() {
        super.validate({
            senderAccountId: this.senderAccountId,
            targetAccountId: this.targetAccountId,
            transferAmount: this.transferAmount,
        });
    }
    getSenderAccountId() {
        return this.senderAccountId;
    }
    getTargetAccountId() {
        return this.targetAccountId;
    }
    getTransferAmount() {
        return this.transferAmount;
    }
}
exports.SendMoneyCommand = SendMoneyCommand;
//# sourceMappingURL=send-money.command.js.map