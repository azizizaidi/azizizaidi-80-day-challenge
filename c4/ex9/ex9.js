// Exercise 9: Error Handling
function simulateApiCall() {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.5;
        setTimeout(() => {
            if (success) {
                resolve('API call successful');
            } else {
                reject(new Error('API call failed'));
            }
        }, 1000);
    });
}

async function handleApiCall(maxRetries = 3, initialDelay = 1000) {
    let retries = 0;
    
    while (retries <= maxRetries) {
        try {
            const result = await simulateApiCall();
            console.log('Success:', result);
            return result;
        } catch (error) {
            console.error(`Error caught (attempt ${retries + 1}/${maxRetries + 1}):`, error.message);
            
            if (error.message === 'API call failed' && retries < maxRetries) {
                const delay = initialDelay * Math.pow(2, retries); // Exponential backoff
                console.log(`Retrying in ${delay}ms...`);
                await new Promise(resolve => setTimeout(resolve, delay));
                retries++;
            } else {
                console.log('Max retries reached or unknown error, logging to monitoring system...');
                throw error; // Re-throw the error after max retries
            }
        }
    }
}

// Test the implementation
async function runTests() {
    console.log('Running tests...');
    try {
        await handleApiCall();
    } catch (error) {
        console.error('Final error after all retries:', error.message);
    }
}

runTests(); 