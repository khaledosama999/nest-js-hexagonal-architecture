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
exports.AccountPersistenceAdapter = void 0;
const common_1 = require("@nestjs/common");
const account_repo_1 = require("./account.repo");
const Account_1 = require("../../../domain/entities/Account");
let AccountPersistenceAdapter = class AccountPersistenceAdapter {
    constructor(accountRepo) {
        this.accountRepo = accountRepo;
    }
    async getById(id) {
        const account = await this.accountRepo.getById(id);
        return account ? this.mapToDomain(account) : null;
    }
    async updateBalance(account, amount) {
        await this.accountRepo.updateBalance(account.getId(), amount);
    }
    mapToDomain(entity) {
        return new Account_1.Account(entity.id, entity.amount);
    }
    mapToPersistence(domain) {
        return {
            id: domain.getId(),
            amount: domain.getBalance(),
        };
    }
};
AccountPersistenceAdapter = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [account_repo_1.AccountRepo])
], AccountPersistenceAdapter);
exports.AccountPersistenceAdapter = AccountPersistenceAdapter;
//# sourceMappingURL=account-presistence-adapter.js.map