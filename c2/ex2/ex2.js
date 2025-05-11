// 2. Scope

// Global scope
let globalVar = "I am a global variable";
const globalConstant = "I am a global constant";

// Function scope
function scopeTest() {
    let localVar = "I am a local variable";
    const localConstant = "I am a local constant";
    
    console.log("Inside function:");
    console.log("- Global variable:", globalVar); // Accessible
    console.log("- Global constant:", globalConstant); // Accessible
    console.log("- Local variable:", localVar); // Accessible
    console.log("- Local constant:", localConstant); // Accessible
}

// Block scope
{
    let blockVar = "I am a block-scoped variable";
    const blockConstant = "I am a block-scoped constant";
    var functionScopedVar = "I am a function-scoped variable";
    
    console.log("\nInside block:");
    console.log("- Block variable:", blockVar); // Accessible
    console.log("- Block constant:", blockConstant); // Accessible
    console.log("- Function-scoped variable:", functionScopedVar); // Accessible
}

// Test different scopes
console.log("\nOutside block:");
console.log("- Global variable:", globalVar); // Accessible
console.log("- Global constant:", globalConstant); // Accessible
// console.log("- Block variable:", blockVar); // ReferenceError: blockVar is not defined
// console.log("- Block constant:", blockConstant); // ReferenceError: blockConstant is not defined
console.log("- Function-scoped variable:", functionScopedVar); // Accessible (var is function-scoped)

// Call the function
scopeTest();

// console.log("- Local variable:", localVar); // ReferenceError: localVar is not defined
// console.log("- Local constant:", localConstant); // ReferenceError: localConstant is not defined

// Note: The commented lines would throw errors because they try to access
// variables that are not in scope. This demonstrates the concept of scope
// in JavaScript.
