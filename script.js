"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели');

const personalMovieDB = {
    const: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false 
};

const a = prompt('Один из просмотренных последних фильмов'),
      b = prompt('Оцените его?', ''),
      c = prompt('Один из просмотренных последних фильмов'),
      d = prompt('Оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = b;

console.log(personalMovieDB);
