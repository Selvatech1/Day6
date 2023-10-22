function calculateCircleArea(radius) {
    if (radius >= 0) {
      // Calculate the area using the formula: A = πr^2
      const area = Math.PI * Math.pow(radius, 2);
      return area;
    } else {
      return "Invalid input: Radius must be non-negative.";
    }
  }
  
  // Example usage:
  const radius = 5;
  const area = calculateCircleArea(radius);
  console.log(`The area of a circle with radius ${radius} is ${area}.`);
  