// console.log(1);

// import bmiCalc from './modules/bmiCalc';
// bmiCalc();

// import quessNumber from './modules/quessNum';
// quessNumber();

// const chelik = {
// 	name: 'NAME',
// 	bro: false,
// 	gretting() {return this.bro ? `Hello ${chelik.name}!` : `Fuck you ${chelik.name}`;}
// };

// const chelik2 = {
// 	name: 'NAME',
// 	bro: true,
// 	gretting() {return this.bro ? `Hello ${chelik.name}!` : `Fuck you ${chelik.name}`;}
// };

// function gretting () {
// 	return (chelik.bro ? `Hello ${chelik.name}!` : `Fuck you ${chelik.name}`);
// }

// const array = [];


// array.push(prompt('Введите свое имя'));
// array.push(prompt('Введите свое имя 2'));
// array.push(prompt('Введите свое имя 3'));
// *
// array[1] = prompt('Введите свое имя 2');
// prompt('Введите свое имя 3');

// console.log(array.join(', '));
// console.log(array);

// let
// 	incr = 10,
// 	decr = 10,
// 	postIncr = incr++,
// 	preDecr = --decr;

// console.log(decr, preDecr);
// console.log(incr, postIncr);

// button.addEventListener('click', changeColor(button));

const h1 = document.querySelector('h1');
h1.style.display = 'inline-block';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let i = 0;

function changeColor() {
	h1.style.backgroundColor = colors[i];
	i = (i + 1) % colors.length; // Переходим к следующему цвету или возвращаемся к началу
}

// h1.addEventListener('mouseout', function() {
// 	clearInterval(intervalId); // Останавливаем изменение цвета
// 	h1.style.removeProperty('background-color'); // Убираем стиль
// });

let intervalIds = [];

h1.addEventListener('mouseover', function() {
	changeColor(); // Вызываем функцию немедленно
	let intervalId = setInterval(changeColor, 150); // Затем начинаем вызывать функцию с задержкой
	intervalIds.push(intervalId); // Добавляем идентификатор интервала в массив
	h1.setAttribute('title', 'Нажми, чтоб прервать анимацию');
});

h1.addEventListener('click', () => {
	intervalIds.forEach(clearInterval); // Останавливаем все интервалы
	intervalIds = []; // Очищаем массив
	h1.style.removeProperty('background-color'); // Убираем стиль
	h1.removeAttribute('title');
});