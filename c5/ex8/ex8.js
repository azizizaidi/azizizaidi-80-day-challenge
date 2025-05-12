// Exercise 8: Getter and Setter
class BankAccount {
    #balance = 0;

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }

    get balance() {
        return this.#balance;
    }

    set balance(value) {
        if (value < 0) {
            throw new Error("Balance cannot be negative");
        }
        this.#balance = value;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be positive");
        }
        this.balance = this.balance + amount;
        console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be positive");
        }
        if (amount > this.balance) {
            throw new Error("Insufficient funds");
        }
        this.balance = this.balance - amount;
        console.log(`Withdrawn ${amount}. New balance: ${this.balance}`);
    }
}

// Test the implementation
const account = new BankAccount(1000);
console.log("Initial balance:", account.balance);

try {
    account.deposit(500);
    account.withdraw(200);
    account.withdraw(2000); // Should throw error
} catch (error) {
    console.error("Error:", error.message);
}

console.log("Final balance:", account.balance); 