"use strict";

let numberOfFilms = prompt("Сколько фильмов Вы уже посмотрели?", "укажите число");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let movieName = prompt('Один из последних просмотренных фильмов?', 'название фильма');
let movieRate = prompt('На сколько оцените его?', 'от 0 до 10');

personalMovieDB.movies[movieName] = movieRate;

console.log(personalMovieDB);
