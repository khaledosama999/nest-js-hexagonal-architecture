"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendMoneyDTO = void 0;
const class_validator_1 = require("class-validator");
const send_money_command_builder_1 = require("../../../application/commands/send-money-command.ts/send-money-command-builder");
class SendMoneyDTO {
    toSendMonyCommand() {
        return new send_money_command_builder_1.SendMoneyCommandBuilder()
            .setSenderAccountId(this.senderAccountId)
            .seTargetAccountId(this.targetAccountId)
            .setTransferAmount(this.amount)
            .build();
    }
}
__decorate([
    (0, class_validator_1.IsString)({ always: true }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SendMoneyDTO.prototype, "senderAccountId", void 0);
__decorate([
    (0, class_validator_1.IsString)({ always: true }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SendMoneyDTO.prototype, "targetAccountId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], SendMoneyDTO.prototype, "amount", void 0);
exports.SendMoneyDTO = SendMoneyDTO;
//# sourceMappingURL=send-money.dto.js.map