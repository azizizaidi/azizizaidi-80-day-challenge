// 8. Switch Statement


// Declare a variable
let numberOfWheels = 4; // Example number of wheels
// Declare a variable for vehicle type
let vehicleType;
// Use a switch statement to determine the vehicle type
switch (numberOfWheels) {
    case 2:
        vehicleType = 'Bike';
        break;
    case 3:
        vehicleType = 'Trike';
        break;
    case 4:
        vehicleType = 'Car';
        break;
    case 6:
        vehicleType = 'Truck';
        break;
    default:
        vehicleType = 'Unknown Vehicle Type';
}
// Print the vehicle type
console.log(`Vehicle Type: ${vehicleType}`);
// The output will show the type of vehicle based on the number of wheels.
