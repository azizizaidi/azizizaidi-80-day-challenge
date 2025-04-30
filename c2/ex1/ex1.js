// 1. Function Declaration & Expression

function areaDeclaration(length, width) {
    return length * width;
}
const areaExpression = function(length, width) {
    return length * width;
};

// Test both functions
const length = 5;
const width = 10;
console.log("Area using function declaration: " + areaDeclaration(length, width)); // 50
console.log("Area using function expression: " + areaExpression(length, width)); // 50




