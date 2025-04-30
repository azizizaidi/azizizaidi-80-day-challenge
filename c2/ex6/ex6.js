
// 6. Higher-Order Functions

function repeatOperation(func, times) {
    for (let i = 0; i < times; i++) {
        func();
    }
}

function printMessage() {
    console.log("Hello, World!");
}

repeatOperation(printMessage, 3); // Prints "Hello, World!" 3 times
