'use strict';

class NumberGuesser {
	constructor(minNum, maxNum) {
		this.minNum = minNum;
		this.maxNum = maxNum;
		this.minNumInit = 0;
		this.maxNumInit = 1000;
		this.guess = this.guessNumber();
		this.variants = [];
		this.rounds = 1;
		this.roundsLimit = 10;
		this.roundsInit = 1;
		this.list = document.getElementById('list');
		this.buttonsBlock = document.querySelector('.quess-number__game-buttons');
		this.lowerButton = document.getElementById('lower');
		this.higherButton = document.getElementById('higher');
		this.correctButton = document.getElementById('correct');
		this.resetButton = document.getElementById('reset');
		this.guessElement = document.getElementById('guess');
		this.correctButton.disabled = false; // Разблокировать кнопку "Угадал" с самого начала
		this.isGameStarted = false;
		this.isGameLoss = false;
		this.classForActivate = '--active';
		this.buttonsBlockActiveClass = 'quess-number__game-buttons' + this.classForActivate;
	}

	guessNumber = () => Math.floor((this.minNum + this.maxNum) / 2);

	lower = () => {
		this.maxNum = this.guess - 1;
		this.guess = this.guessNumber();
		this.rounds++;
		if(this.rounds > this.roundsLimit) {
			this.lossState();
		}
	};

	higher = () => {
		this.minNum = this.guess + 1;
		this.guess = this.guessNumber();
		this.rounds++;
		if(this.rounds > this.roundsLimit) {
			this.lossState();
		}
	};

	reset = () => {
		this.variants = [];
		this.minNum = this.minNumInit;
		this.maxNum = this.maxNumInit;
		this.guess = this.guessNumber();
		this.resetButton.disabled = true;
		this.higherButton.disabled = false;
		this.lowerButton.disabled = false;
		this.rounds = 1;
	};

	startGame = () => {
		this.isGameStarted = true;
		this.isGameLoss = false;
		this.buttonsBlock.classList.toggle(this.buttonsBlockActiveClass);
		this.guessElement.textContent = `Ваше число: ${numberGuesser.guess}?`;
	};

	lossState = () => {
		this.isGameStarted = false;
		this.guessElement.textContent = 'Я не угадал 😔 Кликни на меня и дай мне отыграться!';
		this.isGameLoss = true;
		this.buttonsBlock.classList.toggle(this.buttonsBlockActiveClass);
		this.rounds = this.roundsInit;

	};

}
//* FUNCTION -- ADD VARIANT TO PAGE 
const addVariantToPage = () => {
	numberGuesser.variants.push(numberGuesser.guess);
	let newLi = document.createElement('li');
	numberGuesser.list.appendChild(newLi).textContent = numberGuesser.variants[numberGuesser.variants.length - 1];
};

//* FUNCTION -- REMOVE VARIANTS FROM PAGE 
const removeVariantsFromPage = () => {
	numberGuesser.list.innerHTML = '';
	numberGuesser.variants = [];
};

//** INITIAL STATE OF PROGRAMM
let numberGuesser = new NumberGuesser(0, 1000);
numberGuesser.guessElement.textContent = `Нажми на меня и я попробую отгадать число от ${numberGuesser.minNum} до ${numberGuesser.maxNum}!`;

//** Listener GUESS TEXT
numberGuesser.guessElement.addEventListener('click', () => {
	if (!numberGuesser.isGameStarted) {
		if (numberGuesser.isGameLoss) {
			removeVariantsFromPage();
			numberGuesser.reset();
		}
		numberGuesser.startGame();
	}
});

//** Listener LOWER BUTTON
numberGuesser.lowerButton.addEventListener('click', () => {
	if (!numberGuesser.isGameLoss) {
		addVariantToPage();
		numberGuesser.lower();
		if (numberGuesser.isGameStarted) {
			numberGuesser.guessElement.textContent = `Ваше число: ${numberGuesser.guess}?`;
		}
	}
});

//** Listener HIGHER BUTTON
numberGuesser.higherButton.addEventListener('click', () => {
	if (!numberGuesser.isGameLoss)  {
		addVariantToPage();
		numberGuesser.higher();
		if (numberGuesser.isGameStarted) {
			numberGuesser.guessElement.textContent = `Ваше число: ${numberGuesser.guess}?`;
		}
	}
});

//** Listener CORRECT BUTTON
numberGuesser.correctButton.addEventListener('click', () => {
	addVariantToPage();
	numberGuesser.guessElement.textContent = `УГАДАЛ! 🫡 Ваше число: ${numberGuesser.guess}. Количество попыток: ${numberGuesser.rounds}`;
	numberGuesser.resetButton.disabled = false;
	numberGuesser.correctButton.disabled = true;
	numberGuesser.higherButton.disabled = true;
	numberGuesser.lowerButton.disabled = true;
});

//** Listener RESET BUTTON
numberGuesser.resetButton.addEventListener('click', () => {
	numberGuesser.reset();
	removeVariantsFromPage();
	numberGuesser.correctButton.disabled = false; // Разблокировать кнопку "Угадал" после сброса
	numberGuesser.guessElement.textContent = `Ваше число: ${numberGuesser.guess}?`;
});