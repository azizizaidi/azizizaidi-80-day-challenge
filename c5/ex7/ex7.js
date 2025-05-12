// Exercise 7: 'this' Keyword in OOP
class Store {
    constructor(name, inventory = []) {
        this.name = name;
        this.inventory = inventory;
    }

    addItem(item) {
        this.inventory.push(item);
        console.log(`Added ${item} to ${this.name}'s inventory`);
    }

    // Method using call to change 'this' context
    transferItem(item, targetStore) {
        const index = this.inventory.indexOf(item);
        if (index > -1) {
            this.inventory.splice(index, 1);
            // Using call to set 'this' to targetStore
            Store.prototype.addItem.call(targetStore, item);
            console.log(`Transferred ${item} from ${this.name} to ${targetStore.name}`);
        }
    }

    // Method using bind to create a new function with fixed 'this'
    getInventoryReport() {
        const report = function() {
            console.log(`${this.name}'s inventory:`, this.inventory);
        }.bind(this);
        return report;
    }
}

// Test the implementation
const store1 = new Store("Store A", ["item1", "item2"]);
const store2 = new Store("Store B", ["item3"]);

console.log("Initial state:");
console.log("Store A inventory:", store1.inventory);
console.log("Store B inventory:", store2.inventory);

store1.transferItem("item1", store2);

const report = store1.getInventoryReport();
report(); 