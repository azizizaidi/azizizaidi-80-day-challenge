// Exercise 9: Abstract Classes and Methods
class Appliance {
    constructor(brand, model) {
        if (this.constructor === Appliance) {
            throw new Error("Cannot instantiate abstract class");
        }
        this.brand = brand;
        this.model = model;
    }

    functionality() {
        throw new Error("Method 'functionality()' must be implemented");
    }
}

class WashingMachine extends Appliance {
    constructor(brand, model, capacity) {
        super(brand, model);
        this.capacity = capacity;
    }

    functionality() {
        console.log(`${this.brand} ${this.model} washing machine with ${this.capacity}kg capacity`);
        console.log("Functionality: Washing clothes with different programs");
    }
}

class Refrigerator extends Appliance {
    constructor(brand, model, temperature) {
        super(brand, model);
        this.temperature = temperature;
    }

    functionality() {
        console.log(`${this.brand} ${this.model} refrigerator at ${this.temperature}°C`);
        console.log("Functionality: Cooling and preserving food");
    }
}

// Test the implementation
const washingMachine = new WashingMachine("Samsung", "WF-1000", 7);
const refrigerator = new Refrigerator("LG", "RF-2000", 4);

console.log("Washing Machine:");
washingMachine.functionality();

console.log("\nRefrigerator:");
refrigerator.functionality(); 