"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов Вы уже посмотрели?", "");
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов Вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const movieName = prompt('Один из последних просмотренных фильмов?', '').trim();
            const movieRate = prompt('На сколько оцените его?', '');
            
            if (movieName != null && movieRate != null && movieName != '' && movieRate != '' && movieName.length < 50) {
                personalMovieDB.movies[movieName] = movieRate;
                console.log('All done!');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(priv) {
        if (!priv) console.log(personalMovieDB);
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            // let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            // if (genre == '' || genre == null) {
            //     console.log('Вы ввели некорректные данные');
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genre;
            // }  
            
            let genre = prompt(`ВВедите три Ваши любимые жанры кино через запятую`).toLowerCase();

            if (genre == '' || genre == null) {
                console.log('Вы ввели некоректные данные, либо не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres = genre.split(', ');
                personalMovieDB.genres.sort();
            }
        }

        personalMovieDB.genres.forEach((item, index) => {
            console.log(`Любимый жанр ${index + 1} - это ${item}`);
        });
    }

};



