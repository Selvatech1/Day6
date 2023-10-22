class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
    
    static getPG(movieArray) {
      return movieArray.filter(movie => movie.rating === "PG");
    }
  }
  
  // Example usage:
  const movie1 = new Movie("The Matrix", "Warner Bros.");
  const movie2 = new Movie("Jurassic Park", "Universal Pictures", "PG-13");
  const movie3 = new Movie("Finding Nemo", "Pixar", "G");
  const movie4 = new Movie("Toy Story", "Pixar", "PG");
  
  const movies = [movie1, movie2, movie3, movie4];
  
  const pgMovies = Movie.getPG(movies);
  
  console.log(pgMovies);
  