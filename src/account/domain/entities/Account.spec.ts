import { Account } from './Account';

describe('Account', () => {
  let account: Account;

  beforeEach(() => {
    account = new Account('123', 1000);
  });

  describe('withdraw', () => {
    it('should withdraw the specified amount from the account balance and return true', () => {
      const result = account.withdraw(200);
      expect(account.getBalance()).toBe(800);
      expect(result).toBe(true);
    });

    it('should not change the balance if the withdrawal amount exceeds the account balance and return false', () => {
      const result = account.withdraw(1200);
      expect(account.getBalance()).toBe(1000);
      expect(result).toBe(false);
    });

    it('should not change the balance if the withdrawal amount is negative and return false', () => {
      const result = account.withdraw(-100);
      expect(account.getBalance()).toBe(1000);
      expect(result).toBe(false);
    });
  });

  describe('deposit', () => {
    it('should deposit the specified amount to the account balance and return true', () => {
      const result = account.deposit(500);
      expect(account.getBalance()).toBe(1500);
      expect(result).toBe(true);
    });
  });
});
