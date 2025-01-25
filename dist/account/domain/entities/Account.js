"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(id, balance) {
        this.id = id;
        this.balance = balance;
    }
    getBalance() {
        return this.balance;
    }
    getId() {
        return this.id;
    }
    canWithdraw(amount) {
        return this.balance - amount >= 0;
    }
    withdraw(amount) {
        if (this.canWithdraw(amount)) {
            this.balance -= amount;
            return false;
        }
        return true;
    }
    deposit(amount) {
        this.balance += amount;
        return true;
    }
}
exports.Account = Account;
//# sourceMappingURL=Account.js.map