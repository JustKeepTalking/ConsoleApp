"use strict";

const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");

if (numberOfFilms < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (numberOfFilms >= 10 && numberOfFilms <= 30 ) {
    alert('Вы классический зритель');
} else if (numberOfFilms > 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


for (let i = 0; i < 2; i++) {
    const movieName = prompt('Один из последних просмотренных фильмов?', '');
    
    if (movieName === '' || movieName.trim() || movieName.length >= 50) {
        alert('Пустая строка, ответ отменен, либо слишком длинное название (свыше 50 символов)');
        break;
    }
    
    const movieRate = prompt('На сколько оцените его?', '');

    

    personalMovieDB.movies[movieName] = movieRate;
}

console.log(personalMovieDB);
