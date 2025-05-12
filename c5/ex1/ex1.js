// Exercise 1: Objects (Pre-ES6)
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    
    // Method to print book details
    printDetails: function() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Year: ${this.year}`);
    },
    
    // Method to calculate and print book's age
    printAge: function() {
        const currentYear = new Date().getFullYear();
        const age = currentYear - this.year;
        console.log(`This book is ${age} years old`);
    }
};

// Test the implementation
console.log("Book Details:");
book.printDetails();
console.log("\nBook Age:");
book.printAge(); 