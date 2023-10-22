class UberPriceCalculator {
    constructor(baseFare, costPerKilometer, costPerMinute, surgeMultiplier) {
      this.baseFare = baseFare;
      this.costPerKilometer = costPerKilometer;
      this.costPerMinute = costPerMinute;
      this.surgeMultiplier = surgeMultiplier;
    }
  
    calculatePrice(distanceInKilometers, timeInMinutes) {
      const price = 
        this.baseFare +
        (distanceInKilometers * this.costPerKilometer) +
        (timeInMinutes * this.costPerMinute);
  
      
      if (this.surgeMultiplier > 1) {
        return price * this.surgeMultiplier;
      }
  
      return price;
    }
  }
  
  
  const calculator = new UberPriceCalculator(2.5, 1.2, 0.25, 1.5);
  const distance = 10; 
  const time = 15; 
  
  const price = calculator.calculatePrice(distance, time);
  console.log("Uber Price:", price.toFixed(2)); 
  