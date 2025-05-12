// Exercise 3: Classes (ES6) - Inheritance
class Vehicle {
    constructor(brand, speed = 0) {
        this.brand = brand;
        this.speed = speed;
    }

    accelerate(increment = 10) {
        this.speed += increment;
        console.log(`${this.brand} accelerated to ${this.speed} km/h`);
    }

    brake(decrement = 10) {
        this.speed = Math.max(0, this.speed - decrement);
        console.log(`${this.brand} slowed down to ${this.speed} km/h`);
    }
}

class Car extends Vehicle {
    constructor(brand, speed, numDoors) {
        super(brand, speed);
        this.numDoors = numDoors;
    }

    honk() {
        console.log(`${this.brand} car is honking!`);
    }

    displayInfo() {
        console.log(`${this.brand} car with ${this.numDoors} doors`);
    }
}

class Bike extends Vehicle {
    constructor(brand, speed, hasBasket) {
        super(brand, speed);
        this.hasBasket = hasBasket;
    }

    ringBell() {
        console.log(`${this.brand} bike is ringing its bell!`);
    }

    displayInfo() {
        console.log(`${this.brand} bike ${this.hasBasket ? 'with' : 'without'} basket`);
    }
}

// Test the implementation
const car = new Car("Toyota", 0, 4);
const bike = new Bike("Trek", 0, true);

console.log("Car operations:");
car.displayInfo();
car.accelerate();
car.honk();

console.log("\nBike operations:");
bike.displayInfo();
bike.accelerate();
bike.ringBell(); 