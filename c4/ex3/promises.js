// Exercise 3: Promises
function fetchUser(userId) {
    return new Promise((resolve, reject) => {
        console.log('Fetching user...');
        setTimeout(() => {
            const users = {
                1: { id: 1, name: 'John Doe', email: 'john@example.com' },
                2: { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
            };
            
            const user = users[userId];
            if (user) {
                resolve(user);
            } else {
                reject(new Error('User not found'));
            }
        }, 1000);
    });
}

function fetchUserComments(userId) {
    return new Promise((resolve, reject) => {
        console.log('Fetching user comments...');
        setTimeout(() => {
            const comments = {
                1: [
                    { id: 1, text: 'Great post!' },
                    { id: 2, text: 'Thanks for sharing!' }
                ],
                2: [
                    { id: 3, text: 'Very informative!' }
                ]
            };
            
            const userComments = comments[userId];
            if (userComments) {
                resolve(userComments);
            } else {
                reject(new Error('Comments not found'));
            }
        }, 1000);
    });
}

// Test the implementation
const userId = 1;

fetchUser(userId)
    .then(user => {
        console.log('User found:', user);
        return fetchUserComments(userId);
    })
    .then(comments => {
        console.log('User comments:', comments);
    })
    .catch(error => {
        console.error('Error:', error.message);
    }); 