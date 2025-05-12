// Exercise 6: Polymorphism
class Shape {
    area() {
        throw new Error("Method 'area()' must be implemented");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

class Triangle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    area() {
        return (this.base * this.height) / 2;
    }
}

// Test the implementation
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
const triangle = new Triangle(3, 8);

console.log("Circle area:", circle.area().toFixed(2));
console.log("Rectangle area:", rectangle.area());
console.log("Triangle area:", triangle.area()); 