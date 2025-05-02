// 5. Promises

const fakeApiCall = () => {
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

fakeApiCall()
    .then(response => {
        console.log("Data received:", response.data);
    })
    .catch(error => {
        console.error("Error:", error.message);
    });

// Chaining Promises
const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Fetched data");
        }, 1000);
    });
}

const processData = (data) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data + " processed");
        }, 1000);
    });
}

fetchData()
    .then(data => {
        console.log(data);
        return processData(data);
    })
    .then(processedData => {
        console.log(processedData);
    })
    .catch(error => {
        console.error("Error:", error);
    });