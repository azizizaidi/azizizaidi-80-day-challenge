// Exercise 5: Async/Await
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

// Async function to handle the promises
async function runTasks() {
    try {
        console.log('Starting tasks...');
        await promise1();
        await promise2();
        await promise3();
        console.log('All tasks completed!');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

// Run the async function
runTasks(); 