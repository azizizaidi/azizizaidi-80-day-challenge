//10. While Loop


// Declare the number of rows
let rows = 5;
// Initialize the current row
let currentRow = rows;
// Loop until the current row is greater than 0
while (currentRow > 0) {
    // Print the stars for the current row
    let stars = '';
    for (let j = 1; j <= currentRow; j++) {
        stars += '*';
    }
    console.log(stars);
    // Decrease the current row
    currentRow--;
}

// The program will print a triangle of stars, starting with 5 stars in the first row and decreasing by one star in each subsequent row.
// The while loop continues until the current row is greater than 0, at which point it stops.
// The final output will be:
// *****
// ****
// ***
// **
// *

