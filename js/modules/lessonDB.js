//* Задание на урок:

/* 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

const personalMovieDB = {
	count: '',
	movies: {},
	actors: {},
	genres: {},
	privat: false,
};

// let
// 	a = prompt('Один из последних просмотренных фильмов?'),
// 	b = prompt('На сколько оцените его?'),
// 	c = prompt('Один из последних просмотренных фильмов?'),
// 	d = prompt('На сколько оцените его?');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

//? Add movies with rate to DB object (WITH WHILE LOOP)
// let a, b, c, d;

// function promptMovies (movies, rate) {

// }

// do {
// 	a = prompt('Один из последних просмотренных фильмов?', '');
// 	console.log(a);
// 	b = Number(prompt('На сколько оцените его от 0 до 10?', ''));
// 	console.log(b);
// 	c = prompt('Один из последних просмотренных фильмов?', '');
// 	console.log(c);
// 	d = Number(prompt('На сколько оцените его от 0 до 10?', ''));
// 	console.log(d);
// }
// while (a !== '' || a !== typeof 'string' || (b < 0 || b > 10), c !== '' || c !== typeof 'string' || (d < 0 || d > 10) ); 

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

//? Add movies with rate to DB object (WITH FUNCTION)

// function getMovieTitle() {
// 	let movieTitle;
// 	do {
// 		movieTitle = prompt('Один из последних просмотренных фильмов?', '');
// 	} while (movieTitle === '' || typeof movieTitle !== 'string' || movieTitle.length > 50);
// 	return movieTitle;
// }

// function getMovieRating() {
// 	let movieRating;
// 	do {
// 		movieRating = Number(prompt('На сколько оцените его от 0 до 10?', ''));
// 	} while (isNaN(movieRating) || movieRating < 0 || movieRating > 10);
// 	return movieRating;
// }

// function addMovieToDB(getTitleFunc, getRatingFunc, db) {
//   let title = getTitleFunc();
// 	let rating = getRatingFunc();
// 	db.movies[title] = rating;
// }

// function addMovieWithRateToVar(getTitleFunc, getRatingFunc, db) {
//   let title = getTitleFunc();
//   let rating = getRatingFunc();
//   return {[title]: rating};
// }

// addMovieToDB(getMovieTitle, getMovieRating, personalMovieDB);
// addMovieToDB(getMovieTitle, getMovieRating, personalMovieDB);
// const newFilm = addMovieWithRateToVar(getMovieTitle, getMovieRating); 
// console.log(newFilm);