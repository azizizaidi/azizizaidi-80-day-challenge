
// 4. Callback Functions

function processArray(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = processArray(numbers, function(num) {
    return num * num;
});
console.log(squaredNumbers); // [1, 4, 9, 16, 25]