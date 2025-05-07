// 10. Classes

class Vehicle {
    static vehicleCount = 0;

    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        Vehicle.vehicleCount++;
    }

    displayDetails() {
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    }

    static getVehicleCount() {
        return Vehicle.vehicleCount;
    }
}

class Car extends Vehicle {
    constructor(make, model, year, mileage) {
        super(make, model, year);
        this.mileage = mileage;
    }

    displayDetails() {
        return `${super.displayDetails()}, Mileage: ${this.mileage}`;
    }

    calculateAge(currentYear) {
        return currentYear - this.year;
    }
}

// Test Vehicle class
const vehicle1 = new Vehicle("Toyota", "Camry", 2020);
const vehicle2 = new Vehicle("Honda", "Civic", 2021);

console.log('Vehicle 1:', vehicle1.displayDetails());
console.log('Vehicle 2:', vehicle2.displayDetails());
console.log('Total vehicles:', Vehicle.getVehicleCount());

// Test Car class
const car1 = new Car("Ford", "Mustang", 2018, 15000);
console.log('Car details:', car1.displayDetails());
console.log('Car age:', car1.calculateAge(2023));
console.log('Car mileage:', car1.mileage);

