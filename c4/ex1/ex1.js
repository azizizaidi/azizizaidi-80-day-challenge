// Exercise 1: Callbacks
function processData(numbers, callback) {
    // Double each number in the array
    const doubledNumbers = numbers.map(num => num * 2);
    // Pass the new array to the callback
    return callback(doubledNumbers);
}

function sum(numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Test the implementation
const numbers = [1, 2, 3, 4, 5];
const result = processData(numbers, sum);
console.log('Original numbers:', numbers);
console.log('Sum of doubled numbers:', result); 