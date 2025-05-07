// Exercise 7: Event Loop Understanding
console.log('Start');

setTimeout(() => {
    console.log('Timeout 1');
}, 0);

Promise.resolve().then(() => {
    console.log('Promise 1');
});

setTimeout(() => {
    console.log('Timeout 2');
}, 0);

console.log('Middle');

Promise.resolve().then(() => {
    console.log('Promise 2');
});

console.log('End');

// Expected output order:
// Start
// Middle
// End
// Promise 1
// Promise 2
// Timeout 1
// Timeout 2 