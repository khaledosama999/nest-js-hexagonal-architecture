export declare class Account {
    private readonly id;
    private balance;
    constructor(id: string, balance: number);
    getBalance(): number;
    getId(): string;
    canWithdraw(amount: number): boolean;
    withdraw(amount: number): boolean;
    deposit(amount: number): boolean;
}
