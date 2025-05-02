// 8. Promises

// Fake API Call
const fakeApiCall2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5; // Simulate success or failure
            if (success) {
                resolve({ data: "User data" });
            } else {
                reject(new Error("Failed to fetch user data"));
            }
        }, 1000);
    });
}

fakeApiCall2()
    .then(response => {
        console.log("Data received:", response.data);
    })
    .catch(error => {
        console.error("Error:", error.message);
    });
