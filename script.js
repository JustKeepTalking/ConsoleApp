"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const movieName = prompt('Один из последних просмотренных фильмов?', '');
        const movieRate = prompt('На сколько оцените его?', '');
        
        if (movieName != null && movieRate != null && movieName != '' && movieRate != '' && movieName.length < 50) {
            personalMovieDB.movies[movieName] = movieRate;
            console.log('All done!');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB (private) {
    if (!private) {console.log(personalMovieDB);}
}

function writeYourGenres() {
    
    let movieGenre;

    for (let i = 0; i < 3; i++) {
        movieGenre = prompt("Ваш любимый жанр под номером", '');
        if (movieGenre != null && movieGenre.trim() != '' && isNaN(parseInt(movieGenre))) {
            personalMovieDB.genres.push(movieGenre);
        } else {
            alert ('Введите свой жанр!');
            i--;
        }
    }
}

writeYourGenres();





