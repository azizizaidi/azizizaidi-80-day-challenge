// Exercise 10: Composition vs Inheritance
class Engine {
    constructor(type, horsepower) {
        this.type = type;
        this.horsepower = horsepower;
    }

    start() {
        console.log(`${this.type} engine started with ${this.horsepower} horsepower`);
    }
}

class Wheels {
    constructor(count, type) {
        this.count = count;
        this.type = type;
    }

    rotate() {
        console.log(`${this.count} ${this.type} wheels rotating`);
    }
}

class Seats {
    constructor(count, material) {
        this.count = count;
        this.material = material;
    }

    adjust() {
        console.log(`Adjusting ${this.count} ${this.material} seats`);
    }
}

class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
        this.engine = new Engine("V6", 300);
        this.wheels = new Wheels(4, "alloy");
        this.seats = new Seats(5, "leather");
    }

    start() {
        console.log(`Starting ${this.brand} ${this.model}`);
        this.engine.start();
        this.wheels.rotate();
        this.seats.adjust();
    }
}

// Test the implementation
const car = new Car("Toyota", "Camry");
car.start(); 