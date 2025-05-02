// 2. Arrow Functions

// Arrow Function with No Arguments
const greet = () => {
    console.log("Hello, World!");
}

greet(); // Hello, World!

// Arrow Function with a Single Argument
const double = x => x * 2;
console.log(double(5)); // 10

// Arrow Function as a Callback
const numbers = [1,2,3];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // [2, 4, 6]

// Arrow Function in a Higher-Order Function
const higherOrderFunction = (callback) => {
    return callback(5);
}
const result = higherOrderFunction(x => x * 3);
console.log(result); // 15