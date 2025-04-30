// 10. Recursion
function findFibonacci(n) {
    if (n === 0) return 0; // Base case 1
    if (n === 1) return 1; // Base case 2
    return findFibonacci(n - 1) + findFibonacci(n - 2); // Recursive case
  }
  
  // Contoh penggunaan:
  console.log(findFibonacci(0)); // Output: 0
  console.log(findFibonacci(1)); // Output: 1
  console.log(findFibonacci(6)); // Output: 8
  console.log(findFibonacci(10)); // Output: 55
  