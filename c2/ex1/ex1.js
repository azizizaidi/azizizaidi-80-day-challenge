// 1. Function Declaration & Expression

/**
 * Calculate the area of a rectangle using function declaration
 * @param {number} length - The length of the rectangle
 * @param {number} width - The width of the rectangle
 * @returns {number} The area of the rectangle
 * @throws {Error} If length or width is not a positive number
 */
function areaDeclaration(length, width) {
    // Input validation
    if (typeof length !== 'number' || typeof width !== 'number') {
        throw new Error('Length and width must be numbers');
    }
    if (length <= 0 || width <= 0) {
        throw new Error('Length and width must be positive numbers');
    }
    return length * width;
}

/**
 * Calculate the area of a rectangle using function expression
 * @param {number} length - The length of the rectangle
 * @param {number} width - The width of the rectangle
 * @returns {number} The area of the rectangle
 * @throws {Error} If length or width is not a positive number
 */
const areaExpression = function(length, width) {
    // Input validation
    if (typeof length !== 'number' || typeof width !== 'number') {
        throw new Error('Length and width must be numbers');
    }
    if (length <= 0 || width <= 0) {
        throw new Error('Length and width must be positive numbers');
    }
    return length * width;
};

// Test both functions
function runTests() {
    const testCases = [
        { length: 5, width: 10, expected: 50 },
        { length: 2.5, width: 4, expected: 10 },
        { length: 0, width: 10, expected: 'Error' },
        { length: -5, width: 10, expected: 'Error' },
        { length: '5', width: 10, expected: 'Error' }
    ];

    console.log('Testing function declaration:');
    testCases.forEach((test, index) => {
        try {
            const result = areaDeclaration(test.length, test.width);
            console.log(`Test ${index + 1}: ${result === test.expected ? 'PASS' : 'FAIL'}`);
        } catch (error) {
            console.log(`Test ${index + 1}: ${test.expected === 'Error' ? 'PASS' : 'FAIL'} - ${error.message}`);
        }
    });

    console.log('\nTesting function expression:');
    testCases.forEach((test, index) => {
        try {
            const result = areaExpression(test.length, test.width);
            console.log(`Test ${index + 1}: ${result === test.expected ? 'PASS' : 'FAIL'}`);
        } catch (error) {
            console.log(`Test ${index + 1}: ${test.expected === 'Error' ? 'PASS' : 'FAIL'} - ${error.message}`);
        }
    });
}

runTests();




