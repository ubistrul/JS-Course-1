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

class NumberGuesser {
	constructor(minNum, maxNum) {
		this.minNum = minNum;
		this.maxNum = maxNum;
		this.guess = this.guessNumber();
		this.variants = [];
		this.list = document.getElementById('list');
		this.buttonsBlock = document.querySelector('.quess-number__game-buttons');
		this.lowerButton = document.getElementById('lower');
		this.higherButton = document.getElementById('higher');
		this.correctButton = document.getElementById('correct');
		this.resetButton = document.getElementById('reset');
		this.guessElement = document.getElementById('guess');
		this.correctButton.disabled = false; // Разблокировать кнопку "Угадал" с самого начала
		this.isGameStarted = false;
	}

	guessNumber = () => Math.floor((this.minNum + this.maxNum) / 2);

	lower = () => {
		this.maxNum = this.guess - 1;
		this.guess = this.guessNumber();
	};

	higher = () => {
		this.minNum = this.guess + 1;
		this.guess = this.guessNumber();
	};

	reset = () => {
		this.variants = [];
		this.minNum = 0;
		this.maxNum = 1000;
		this.guess = this.guessNumber();
		this.resetButton.disabled = true;
	};

	startGame = () => {
		const buttonBlockActiveClassName = this.buttonsBlock.className + '--active';
		this.isGameStarted = true;
		this.buttonsBlock.classList.toggle(buttonBlockActiveClassName);
		this.guessElement.textContent = `Ваше число: ${numberGuesser.guess}?`;
	};
}

const addVariantToPage = () => {
	let newLi = document.createElement('li');
	numberGuesser.list.appendChild(newLi).textContent = numberGuesser.variants[numberGuesser.variants.length - 1];
};

const removeVariantFromPage = () => {
	numberGuesser.list.innerHTML = '';
};

let numberGuesser = new NumberGuesser(0, 1000);
numberGuesser.guessElement.textContent = `Нажми на меня и я попробую отгадать число от ${numberGuesser.minNum} до ${numberGuesser.maxNum}!`;

numberGuesser.guessElement.addEventListener('click', () => {
	if (!numberGuesser.isGameStarted) {
		numberGuesser.startGame();
	}
});

numberGuesser.lowerButton.addEventListener('click', () => {
	numberGuesser.variants.push(numberGuesser.guess);
	addVariantToPage();
	numberGuesser.lower();
	numberGuesser.guessElement.textContent = `Ваше число: ${numberGuesser.guess}?`;
});

numberGuesser.higherButton.addEventListener('click', () => {
	numberGuesser.variants.push(numberGuesser.guess);
	addVariantToPage();
	numberGuesser.higher();
	numberGuesser.guessElement.textContent = `Ваше число: ${numberGuesser.guess}?`;
});

numberGuesser.correctButton.addEventListener('click', () => {
	numberGuesser.guessElement.textContent = `УГАДАЛ! Ваше число: ${numberGuesser.guess}`;
	numberGuesser.resetButton.disabled = false;
	numberGuesser.correctButton.disabled = true;
});

numberGuesser.resetButton.addEventListener('click', () => {
	numberGuesser.reset();
	removeVariantFromPage();
	numberGuesser.correctButton.disabled = false; // Разблокировать кнопку "Угадал" после сброса
	numberGuesser.guessElement.textContent = `Ваше число: ${numberGuesser.guess}?`;
});
