class Circle {
    constructor(radius = 1.0, color = "red") {
      this.radius = radius;
      this.color = color;
    }
  
    getColour() {
      return this.color;
    }
  }
  
  // Example usage:
  const myCircle = new Circle(2.5, "blue");
  
  console.log("Radius:", myCircle.radius);       // Output: Radius: 2.5
  console.log("Color:", myCircle.getColour());     // Output: Color: blue
  