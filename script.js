"use strict";

const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "укажите число");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

// const movieName = prompt('Один из последних просмотренных фильмов?', 'название фильма');
// const movieRate = prompt('На сколько оцените его?', 'от 0 до 10');
// const movieName1 = prompt('Один из последних просмотренных фильмов?', 'название фильма');
// const movieRate1 = prompt('На сколько оцените его?', 'от 0 до 10');

// personalMovieDB.movies[movieName] = movieRate;
// personalMovieDB.movies[movieName1] = movieRate1;

for (let i = 0; i < 2; i++) {
    const movieName = prompt('Один из последних просмотренных фильмов?', 'название фильма');
    const movieRate = prompt('На сколько оцените его?', 'от 0 до 10');

    personalMovieDB.movies[movieName] = movieRate;
}

console.log(personalMovieDB);
