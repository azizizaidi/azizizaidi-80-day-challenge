// Exercise 5: Encapsulation
class BankAccount {
    #balance = 0; // Private field

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
        } else {
            console.log("Invalid deposit amount");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrawn ${amount}. New balance: ${this.#balance}`);
        } else {
            console.log("Invalid withdrawal amount or insufficient funds");
        }
    }

    getBalance() {
        return this.#balance;
    }
}

// Test the implementation
const account = new BankAccount(1000);
console.log("Initial balance:", account.getBalance());

account.deposit(500);
account.withdraw(200);
account.withdraw(2000); // Should fail
console.log("Final balance:", account.getBalance()); 