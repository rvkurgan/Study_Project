"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = prompt("Сколько фильмов вы посмотрели?");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = prompt("Сколько фильмов вы посмотрели?");
  }
}
start();

function detectPersonalLevel() {
  if (numberOfFilms < 10) {
    console.log("Malo");
  } else if (numberOfFilms < 30 && numberOfFilms >= 10) {
    console.log("Klassik");
  } else if (numberOfFilms >= 30) {
    console.log("kinoman");
  } else {
    console.log("Oshibka");
  }
}

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// // const a = prompt("One of the last films?"),
// //   b = prompt("Your rating"),
// //   c = prompt("One of the last films?"),
// //   d = prompt("Your rating");
function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("One of the last films?"),
      b = prompt("Your rating");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("Done");
    } else {
      console.log("error");
      i--;
    }
  }
}


function showMyDB() {
  if (personalMovieDB.privat === false) {
    console.log(personalMovieDB);
  }
}


function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    const a = prompt(`Ваш любимый жанр номер ${i + 1}?`);
    personalMovieDB.genres[i] = a;
  }
}



writeYourGenres();
showMyDB();