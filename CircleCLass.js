class Circle {
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    toString() {
        return `Circle[radius=${this.radius}, color=${this.color}]`;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

// Example usage:
let circle = new Circle();
console.log(circle.toString()); // Circle[radius=1, color=red]
console.log(`Area: ${circle.getArea()}`);
console.log(`Circumference: ${circle.getCircumference()}`);
let singleArgCircle = new Circle(2.0); // user provided radius and default color
console.log(singleArgCircle.toString()); // Circle[radius=2, color=red]
let doubleArgCircle = new Circle(3.0, 'blue'); // user provided radius and color
console.log(doubleArgCircle.toString()); 
