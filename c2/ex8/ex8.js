// 8. Rest Parameters

function sumAll(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sumAll(1, 2, 3, 4, 5)); // 15
console.log(sumAll(10, 20)); // 30
console.log(sumAll()); // 0
