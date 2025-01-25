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
exports.SendMoneyController = void 0;
const common_1 = require("@nestjs/common");
const send_money_dto_1 = require("./send-money.dto");
const send_money_use_case_1 = require("../../../application/ports/in/send-money.use-case");
let SendMoneyController = class SendMoneyController {
    constructor(sendMoneyUseCase) {
        this.sendMoneyUseCase = sendMoneyUseCase;
    }
    async sendMoney(body, res) {
        await this.sendMoneyUseCase.sendMoney(body.toSendMonyCommand());
        res.status(200).json({ message: 'Money sent' });
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe({ transform: true }))),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [send_money_dto_1.SendMoneyDTO, Object]),
    __metadata("design:returntype", Promise)
], SendMoneyController.prototype, "sendMoney", null);
SendMoneyController = __decorate([
    (0, common_1.Controller)('account:send-money'),
    __metadata("design:paramtypes", [send_money_use_case_1.SendMoneyUseCase])
], SendMoneyController);
exports.SendMoneyController = SendMoneyController;
//# sourceMappingURL=send-money.controller.js.map