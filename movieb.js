class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  }
  
  // Example usage:
  const movie1 = new Movie("The Matrix", "Warner Bros.");
  const movie2 = new Movie("Jurassic Park", "Universal Pictures", "PG-13");
  
  console.log(movie1.title);    
  console.log(movie1.rating);   
  
  console.log(movie2.title);    
  console.log(movie2.rating);   
  