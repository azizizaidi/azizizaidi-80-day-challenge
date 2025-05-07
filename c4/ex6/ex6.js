// Exercise 6: Handling Multiple Promises
function simulateApiCall(endpoint, delay) {
    let timeoutId;
    
    const promise = new Promise((resolve, reject) => {
        timeoutId = setTimeout(() => {
            reject(new Error(`Request to ${endpoint} timed out`));
        }, 10000); // 10 second timeout

        setTimeout(() => {
            clearTimeout(timeoutId);
            // Simulate random failures
            if (Math.random() > 0.8) {
                reject(new Error(`Failed to fetch data from ${endpoint}`));
            } else {
                resolve({
                    endpoint,
                    data: `Data from ${endpoint}`,
                    timestamp: new Date().toISOString()
                });
            }
        }, delay);
    });

    // Add cleanup method
    promise.cancel = () => {
        clearTimeout(timeoutId);
    };

    return promise;
}

async function fetchAllData() {
    const requests = [];
    try {
        console.log('Starting to fetch data from all endpoints...');
        
        const endpoints = [
            simulateApiCall('/users', 2000),
            simulateApiCall('/posts', 1500),
            simulateApiCall('/comments', 3000)
        ];

        // Store requests for potential cancellation
        endpoints.forEach(request => requests.push(request));

        // Use Promise.allSettled to handle both successful and failed promises
        const results = await Promise.allSettled(endpoints);
        
        console.log('All requests completed:');
        results.forEach((result, index) => {
            const endpoint = ['/users', '/posts', '/comments'][index];
            if (result.status === 'fulfilled') {
                console.log(`✅ ${endpoint}: ${result.value.data} (${result.value.timestamp})`);
            } else {
                console.error(`❌ ${endpoint}: ${result.reason.message}`);
            }
        });

        // Check if all requests were successful
        const allSuccessful = results.every(result => result.status === 'fulfilled');
        if (!allSuccessful) {
            console.warn('Some requests failed, but the application continues to function');
        }
    } catch (error) {
        console.error('Critical error fetching data:', error);
    } finally {
        // Cleanup any pending requests
        requests.forEach(request => {
            if (request.cancel) {
                request.cancel();
            }
        });
    }
}

// Run the async function
fetchAllData(); 