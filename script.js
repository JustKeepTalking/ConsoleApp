"use strict";

const numberOfFilms = prompt("Сколько фильмов Вы уже посмотрели?", "");

// if (numberOfFilms < 10) {
//     alert('Просмотрено довольно мало фильмов');
// } else if (numberOfFilms >= 10 && numberOfFilms <= 30 ) {
//     alert('Вы классический зритель');
// } else if (numberOfFilms > 30) {
//     alert('Вы киноман');
// } else {
//     alert('Произошла ошибка');
// }

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


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

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);
