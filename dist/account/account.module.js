"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountModule = void 0;
const common_1 = require("@nestjs/common");
const send_money_controller_1 = require("./adapters/in/send-money/send-money.controller");
const account_presistence_adapter_1 = require("./adapters/out/persistence/account-presistence-adapter");
const account_repo_1 = require("./adapters/out/persistence/account.repo");
const sequelize_1 = require("@nestjs/sequelize");
const account_entity_1 = require("./adapters/out/persistence/account.entity");
const send_money_service_1 = require("./application/services/send-money-use-case/send-money.service");
const send_money_use_case_1 = require("./application/ports/in/send-money.use-case");
const load_account_port_1 = require("./application/ports/out/presistence/load-account.port");
const update_balance_port_1 = require("./application/ports/out/presistence/update-balance.port");
let AccountModule = class AccountModule {
};
AccountModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([account_entity_1.AccountPersistenceEntity])],
        providers: [
            {
                provide: send_money_use_case_1.SendMoneyUseCase,
                useClass: send_money_service_1.SendMoneyService,
            },
            account_presistence_adapter_1.AccountPersistenceAdapter,
            account_repo_1.AccountRepo,
            {
                provide: load_account_port_1.LoadAccountPort,
                useClass: account_presistence_adapter_1.AccountPersistenceAdapter,
            },
            {
                provide: update_balance_port_1.UpdateBalancePort,
                useClass: account_presistence_adapter_1.AccountPersistenceAdapter,
            },
        ],
        exports: [send_money_use_case_1.SendMoneyUseCase],
        controllers: [send_money_controller_1.SendMoneyController],
    })
], AccountModule);
exports.AccountModule = AccountModule;
//# sourceMappingURL=account.module.js.map