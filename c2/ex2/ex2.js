
// 2. Scope

let globalVar = "I am a global variable";
function scopeTest() {
    let localVar = "I am a local variable";
    console.log(globalVar); // Accessible
    console.log(localVar); // Accessible
}
scopeTest();

// console.log(localVar); // Uncaught ReferenceError: localVar is not defined
// This line would throw an error because localVar is not accessible outside the function
