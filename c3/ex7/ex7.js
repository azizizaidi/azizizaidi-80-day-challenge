// 7. De-structuring Assignment

// Array Destructuring
const array = [1, 2, 3];
const [first, second, third] = array;
console.log(first, second, third); // 1 2 3

// Default Values
const [a1 = 1, b = 2, c1 = 3] = [undefined, 5];
console.log(a, b, c); // 1 5 3

// Nested Object De-structuring
const nestedObject2 = { a: 1, b: { c: 2 } };
const { a, b: { c } } = nestedObject2;
console.log(a, c); // 1 2

// Swapping Variables
let x1 = 1;
let y1 = 2;
[x1, y1] = [y1, x1];
console.log(x1, y1); // 2 1