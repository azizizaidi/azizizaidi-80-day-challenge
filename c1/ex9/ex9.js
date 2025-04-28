//9. For Loop


// Declare the number of rows
let rows = 5;
// Loop through each row
for (let i = 1; i <= rows; i++) {
    // Print the number 'i' for 'i' times
    let line = '';
    for (let j = 1; j <= i; j++) {
        line += i;
    }
    console.log(line);
}
// The output will show a triangle of numbers based on the number of rows specified.
// The triangle will have 5 rows, with each row containing the row number repeated as many times as the row number itself.
// For example, the first row will have '1', the second row will have '22', and so on.
// The final output will be:
// 1
// 22
// 333
// 4444
// 55555

