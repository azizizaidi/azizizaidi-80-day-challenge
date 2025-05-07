// Exercise 4: Promise Chaining
function createDelayedPromise(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, delay);
    });
}

// Create three promises with different delays
const promise1 = () => createDelayedPromise('First task completed', 2000);
const promise2 = () => createDelayedPromise('Second task completed', 4000);
const promise3 = () => createDelayedPromise('Third task completed', 6000);

// Chain the promises
console.log('Starting tasks...');
promise1()
    .then(() => promise2())
    .then(() => promise3())
    .then(() => {
        console.log('All tasks completed!');
    })
    .catch(error => {
        console.error('An error occurred:', error);
    }); 