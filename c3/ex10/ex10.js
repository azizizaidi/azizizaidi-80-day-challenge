// 10. Classes

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayDetails() {
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    }

    static vehicleCount = 0;

    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        Vehicle.vehicleCount++;
    }

    static getVehicleCount() {
        return Vehicle.vehicleCount;
    }
}

const vehicle1 = new Vehicle("Toyota", "Camry", 2020);
const vehicle2 = new Vehicle("Honda", "Civic", 2021);
console.log(vehicle1.displayDetails()); // Make: Toyota, Model: Camry, Year: 2020
console.log(vehicle2.displayDetails()); // Make: Honda, Model: Civic, Year: 2021
console.log(Vehicle.getVehicleCount()); // 2
class Car extends Vehicle {
    constructor(make, model, year, mileage) {
        super(make, model, year);
        this.mileage = mileage;
    }

    calculateAge(currentYear) {
        return currentYear - this.year;
    }
}

const car1 = new Car("Ford", "Mustang", 2018, 15000);
console.log(car1.displayDetails()); // Make: Ford, Model: Mustang, Year: 2018
console.log(car1.calculateAge(2023)); // 5
console.log(car1.mileage); // 15000

