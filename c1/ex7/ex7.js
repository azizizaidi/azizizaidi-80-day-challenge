// 7. if-else Structure


// Declare a variable
let score = 85; // Example score
// Check the score and assign a grade
let grade;
if (score >= 90 && score <= 100) {
    grade = 'A';
}
else if (score >= 80 && score < 90) {
    grade = 'B';
}
else if (score >= 70 && score < 80) {
    grade = 'C';
}
else if (score >= 60 && score < 70) {
    grade = 'D';
}
else if (score >= 0 && score < 60) {
    grade = 'F';
}
else {
    grade = 'Invalid score'; // Handle invalid scores
}
// Print the grade
console.log(`Score: ${score}, Grade: ${grade}`);
// The output will show the score and the corresponding grade based on the defined ranges.
