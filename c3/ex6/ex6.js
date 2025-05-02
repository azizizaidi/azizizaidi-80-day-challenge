// 6. Template Literals

// Multiline String
const multilineString = `This is a string
that spans
multiple lines.`;
console.log(multilineString);

// Expressions in Template Literals
const name = "John";
const age = 30;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);

// Template Literals in Function
const processTemplate = (template) => {
    console.log(template);
}

processTemplate(`This is a template literal passed to a function.`);

// Escaping Backticks
const escapedBacktick = `This is how you escape a backtick: \``;
console.log(escapedBacktick);