// 7. Default Parameters

function greetUser(name, greeting = "Hello") {
    console.log(greeting + ", " + name + "!");
}

greetUser("Alice"); // Hello, Alice!
greetUser("Bob", "Good morning"); // Good morning, Bob!