// 3. The Spread Operator

// Combining Arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

// Copying an Array
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // [1, 2, 3]
console.log(originalArray === copiedArray); // false

// Spreading Elements in Function Arguments
const sum = (a, b, c) => a + b + c;
const numbersToAdd = [1, 2, 3];
const total = sum(...numbersToAdd);
console.log(total); // 6

// Spreading Object Properties
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObject = { ...obj1, ...obj2 };
console.log(combinedObject); // { a: 1, b: 2, c: 3, d: 4 }

// Cloning an Object with Nested Properties
const nestedObject = { a: 1, b: { c: 2 } };
const shallowClone = { ...nestedObject };
const deepClone = JSON.parse(JSON.stringify(nestedObject));
console.log(shallowClone); // { a: 1, b: { c: 2 } }
console.log(deepClone); // { a: 1, b: { c: 2 } }
console.log(nestedObject.b === shallowClone.b); // true
console.log(nestedObject.b === deepClone.b); // false