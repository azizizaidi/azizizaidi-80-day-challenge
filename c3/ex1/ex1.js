// 1. The let Keyword

// Nested Block Scope
let x = 10;
if (true) {
    let x = 20; //this x is different from the outer x
    console.log("Inside block scope x:", x); //20
}
console.log("Outside block scope x:", x); //10

// Loops and Block Scope
for (let i=0; i < 3; i++) {
    setTimeout(() => {
        console.log("Loop iteration:", i); // 0, 1, 2 )
    })
}














