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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendMoneyService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_transactional_decorator_1 = require("sequelize-transactional-decorator");
const send_money_use_case_1 = require("../../ports/in/send-money.use-case");
const load_account_port_1 = require("../../ports/out/presistence/load-account.port");
const update_balance_port_1 = require("../../ports/out/presistence/update-balance.port");
const send_money_command_1 = require("../../commands/send-money-command.ts/send-money.command");
let SendMoneyService = class SendMoneyService extends send_money_use_case_1.SendMoneyUseCase {
    constructor(loadAccountPort, updateBalancePort) {
        super();
        this.loadAccountPort = loadAccountPort;
        this.updateBalancePort = updateBalancePort;
    }
    async sendMoney(sendMoneyCommand) {
        const sourceAccount = await this.loadAccountPort.getById(sendMoneyCommand.getSenderAccountId());
        const targetAccount = await this.loadAccountPort.getById(sendMoneyCommand.getTargetAccountId());
        if (!sourceAccount || !targetAccount) {
            throw new common_1.NotFoundException('Account not found');
        }
        if (sourceAccount.getBalance() < sendMoneyCommand.getTransferAmount()) {
            throw new common_1.BadRequestException('Insufficient funds');
        }
        sourceAccount.withdraw(sendMoneyCommand.getTransferAmount());
        targetAccount.deposit(sendMoneyCommand.getTransferAmount());
        await this.updateBalancePort.updateBalance(sourceAccount, sourceAccount.getBalance());
        await this.updateBalancePort.updateBalance(targetAccount, targetAccount.getBalance());
        return true;
    }
};
__decorate([
    (0, sequelize_transactional_decorator_1.Transactional)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [send_money_command_1.SendMoneyCommand]),
    __metadata("design:returntype", Promise)
], SendMoneyService.prototype, "sendMoney", null);
SendMoneyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(load_account_port_1.LoadAccountPort)),
    __param(1, (0, common_1.Inject)(update_balance_port_1.UpdateBalancePort)),
    __metadata("design:paramtypes", [Object, Object])
], SendMoneyService);
exports.SendMoneyService = SendMoneyService;
//# sourceMappingURL=send-money.service.js.map