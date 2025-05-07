// Exercise 2: More Callbacks
function fetchUser(userId, callback, errorCallback) {
    console.log('Fetching user...');
    setTimeout(() => {
        const users = {
            1: { id: 1, name: 'John Doe', email: 'john@example.com' },
            2: { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
        };
        
        const user = users[userId];
        if (user) {
            callback(user);
        } else {
            errorCallback(new Error('User not found'));
        }
    }, 1000);
}

function fetchUserComments(userId, callback, errorCallback) {
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
            callback(userComments);
        } else {
            errorCallback(new Error('Comments not found'));
        }
    }, 1000);
}

// Test the implementation
const userId = 1;

fetchUser(
    userId,
    (user) => {
        console.log('User found:', user);
        fetchUserComments(
            userId,
            (comments) => {
                console.log('User comments:', comments);
            },
            (error) => {
                console.error('Error fetching comments:', error.message);
            }
        );
    },
    (error) => {
        console.error('Error fetching user:', error.message);
    }
); 