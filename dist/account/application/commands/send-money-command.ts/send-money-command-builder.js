"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendMoneyCommandBuilder = void 0;
const send_money_command_1 = require("./send-money.command");
class SendMoneyCommandBuilder {
    setSenderAccountId(id) {
        this.senderAccountId = id;
        return this;
    }
    seTargetAccountId(id) {
        this.targetAccountId = id;
        return this;
    }
    setTransferAmount(amount) {
        this.transferAmount = amount;
        return this;
    }
    build() {
        return new send_money_command_1.SendMoneyCommand(this.senderAccountId, this.targetAccountId, this.transferAmount);
    }
}
exports.SendMoneyCommandBuilder = SendMoneyCommandBuilder;
//# sourceMappingURL=send-money-command-builder.js.map