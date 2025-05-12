// Exercise 2: Classes (ES6) - Basics
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

// Test the implementation
const car = new Vehicle("Toyota");
console.log("Initial state:", car);

car.accelerate();
car.accelerate(20);
car.brake();
car.brake(15); 