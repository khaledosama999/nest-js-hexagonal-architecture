export class Account {
  constructor(private readonly id: string, private balance: number) {}

  getBalance() {
    return this.balance;
  }

  getId() {
    return this.id;
  }

  canWithdraw(amount: number) {
    return this.balance - amount >= 0;
  }

  withdraw(amount: number) {
    if (this.canWithdraw(amount)) {
      this.balance -= amount;
      return false;
    }

    return true;
  }

  deposit(amount: number) {
    this.balance += amount;

    return true;
  }
}
