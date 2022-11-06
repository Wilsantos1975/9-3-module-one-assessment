/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const movies = require("./movies");
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(arr) {
  let output = [];
  if (!arr.length) {
    return output;
  }

  arr.forEach((el) => {
    if (el.title !== movies.title) {
      output.push(el.title);
    }
  });
  return output;
}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(arr) {
  let output = 0;

  if (!arr.length) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].metascore > output) {
      output = arr[i].metascore;
    }
  }
  return ++output - 1; // i dont know why i had to substract one. ask
}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(arr) {
  let output = 0;
  let finalOutput = 0;

  if (!arr.length) {
    return 0;
  }
  for (const movie of arr) {
    let stringToNumber = ++movie.imdbRating;
    output += stringToNumber;
  }
  finalOutput = output / arr.length;

  return finalOutput - 1;
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(arr) {
  let output = {};

  if (!arr.length) {
    return output;
  }
  arr.forEach((movie) => {
    if (!output.hasOwnProperty(movie.rated)) {
      output[movie.rated] = 1;
    } else if (output.hasOwnProperty(movie.rated)) {
      output[movie.rated] += 1;
    }
  });
  return output;
}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(arr, id) {
  if (!arr.length) {
    return null;
  }
  for (const movie of arr) {
    if (movie.imdbID !== id) {
      return null;
    } else if (movie.imdbID === id) {
      return movie;
    }
  }
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(arr, title) {
  let output = [];
  let genreOutput;
  let lowerCaseTitle = title.toLowerCase();

  if (!arr.length) {
    return output;
  }

  arr.forEach((movie) => {
    genreOutput = movie.genre.toLowerCase().split(",").join("").split(" ");
    // console.log(genreOutput)

    if (genreOutput.includes(lowerCaseTitle)) {
      output.push(movie);
    }
  });
  return output;
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(arr, year) {
  let output = [];

  if (!arr.length) {
    return output;
  }

  for (const movie of arr) {
    let releaseYear = movie.released.slice(7);
    ++releaseYear

    if(releaseYear <= year) {
      output.push(movie)
    } 

  }
return output
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie(arr) {
  let output = '';
  let amount = 0;

  if (!arr.length) {
    return null;
  }

  arr.forEach((movie) => {
    let boxInNumber = movie.boxOffice.slice(1).split(",").join('');
    ++boxInNumber
    if (boxInNumber > amount) {
      amount = boxInNumber;
      output = movie.title

    }
  })
  return output
}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
