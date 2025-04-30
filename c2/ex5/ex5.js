
// 5. IIFE (Immediately Invoked Function Expression)
(function() {
    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }
    console.log("Factorial of 5: " + factorial(5)); // 120
})();

