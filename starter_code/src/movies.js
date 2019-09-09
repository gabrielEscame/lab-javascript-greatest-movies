/* eslint no-restricted-globals: 'off' */
// const movies = require('./data')
// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
// let ratesAverage = (movies) => mov/ies.reduce((sumTotalRate, movie) => sumTotalRate += movie.rate);
function ratesAverage (arr){
 let sumRate =  arr.reduce((acc, item)=> {
   return acc += parseInt(item.rate);
 }, 0)
 return sumRate / arr.length;
}
// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr){
  let newDramaArr = arr.filter(movie => movie.genre.includes('Drama'));
  if (newDramaArr.length === 0){
    return 0;
  }
  let sumRate = newDramaArr.reduce((acc, item)=> {
    if (item.rate === "") {
      return acc;
    }
    return acc += parseFloat(item.rate);
  }, 0)
  return parseFloat((sumRate / newDramaArr.length).toFixed(2));

} 


// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration(arr) {
  let newSortedArray = arr.sort(arr.item.duration)
}


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
