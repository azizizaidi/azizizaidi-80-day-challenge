//3. Data Types

let mixedArray = ["Hello", 42, true, { name: "Alice" }, null];
for (var i = 0; i < mixedArray.length; i++) {
    console.log(typeof mixedArray[i]);
}
// The output will be:
// string
// number
// boolean
// object
// object
// Note: 'null' is of type 'object' in JavaScript, which is a known quirk of the language.

