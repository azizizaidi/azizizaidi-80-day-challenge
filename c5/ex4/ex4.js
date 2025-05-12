// Exercise 4: Classes (ES6) - Static Methods
class Vehicle {
    static count = 0;

    constructor(brand, speed = 0) {
        this.brand = brand;
        this.speed = speed;
        Vehicle.count++;
    }

    accelerate(increment = 10) {
        this.speed += increment;
        console.log(`${this.brand} accelerated to ${this.speed} km/h`);
    }

    brake(decrement = 10) {
        this.speed = Math.max(0, this.speed - decrement);
        console.log(`${this.brand} slowed down to ${this.speed} km/h`);
    }

    static getTotalVehicles() {
        console.log(`Total vehicles created: ${Vehicle.count}`);
    }
}

// Test the implementation
const car1 = new Vehicle("Toyota");
const car2 = new Vehicle("Honda");
const car3 = new Vehicle("Ford");

Vehicle.getTotalVehicles(); // Should output: Total vehicles created: 3 