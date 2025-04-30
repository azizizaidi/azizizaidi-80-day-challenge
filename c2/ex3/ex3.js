
// 3. Closures

function createCounter() {
    let count = 0;
    return {
        increment: function() {
            count++;
        },
        getValue: function() {
            return count;
        }
    };
}
const counter = createCounter();
counter.increment();
console.log(counter.getValue()); // 1
counter.increment();
console.log(counter.getValue()); // 2