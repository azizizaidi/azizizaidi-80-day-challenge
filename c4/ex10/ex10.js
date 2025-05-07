// Exercise 10: Mixed Patterns
function fetchDataWithCallback(userId, callback, errorCallback) {
    console.log('Fetching data with callback...');
    setTimeout(() => {
        const users = {
            1: { id: 1, name: 'John Doe' },
            2: { id: 2, name: 'Jane Smith' }
        };
        
        const user = users[userId];
        if (user) {
            callback(user);
        } else {
            errorCallback(new Error('User not found'));
        }
    }, 1000);
}

// Promise wrapper for the callback function
function fetchDataWithPromise(userId) {
    return new Promise((resolve, reject) => {
        fetchDataWithCallback(userId, resolve, reject);
    });
}

// Example usage with callbacks
console.log('Testing callback pattern:');
fetchDataWithCallback(
    1,
    (user) => console.log('Callback success:', user),
    (error) => console.error('Callback error:', error.message)
);

// Example usage with promises
console.log('\nTesting promise pattern:');
fetchDataWithPromise(1)
    .then(user => console.log('Promise success:', user))
    .catch(error => console.error('Promise error:', error.message));

// Example usage with async/await
async function fetchDataAsync() {
    try {
        const user = await fetchDataWithPromise(1);
        console.log('Async/await success:', user);
    } catch (error) {
        console.error('Async/await error:', error.message);
    }
}

console.log('\nTesting async/await pattern:');
fetchDataAsync(); 