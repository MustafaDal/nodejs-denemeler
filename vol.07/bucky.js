var movies = require('./movies');

var buckyMovies = movies();
buckyMovies.favMovie = "Good Will Hunting";
console.log("Bucky's favorite movie is: " + buckyMovies.favMovie)