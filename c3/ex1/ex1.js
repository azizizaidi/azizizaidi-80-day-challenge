// 1. The let Keyword

// Nested Block Scope
let x = 10;
if (true) {
    let x = 20; // this x is different from the outer x
    console.log("Inside block scope x:", x); // 20
}
console.log("Outside block scope x:", x); // 10

// Loops and Block Scope
console.log("Starting loop iterations...");
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log("Loop iteration:", i); // Will print 0, 1, 2
    }, 100 * (i + 1)); // Add delay to see the sequence clearly
}

// Note: The setTimeout callbacks will execute after the loop is complete
// due to the asynchronous nature of setTimeout














