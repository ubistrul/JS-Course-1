class NumberGuesser {
	constructor(minNum, maxNum) {
		this.minNum = minNum;
		this.maxNum = maxNum;
		this.guess = this.guessNumber();
		this.variants = [];
		this.rounds = 1;
		this.list = document.getElementById('list');
		this.buttonsBlock = document.querySelector('.quess-number__game-buttons');
		this.lowerButton = document.getElementById('lower');
		this.higherButton = document.getElementById('higher');
		this.correctButton = document.getElementById('correct');
		this.resetButton = document.getElementById('reset');
		this.guessElement = document.getElementById('guess');
		this.correctButton.disabled = false;
		this.state = 'not-started'; // 'not-started', 'in-progress', 'won', 'lost'
	}

	guessNumber() {
		return Math.floor((this.minNum + this.maxNum) / 2);
	}

	updateGuess() {
		if (this.state === 'in-progress') {
			this.guessElement.textContent = `Ваше число: ${this.guess}?`;
		}
	}

	lower() {
		this.maxNum = this.guess - 1;
		this.guess = this.guessNumber();
		this.rounds++;
		if(this.rounds > 10) {
			this.lossState();
		}
	}

	higher() {
		this.minNum = this.guess + 1;
		this.guess = this.guessNumber();
		this.rounds++;
		if(this.rounds > 10) {
			this.lossState();
		}
	}

	reset() {
		this.variants = [];
		this.minNum = 0;
		this.maxNum = 1000;
		this.guess = this.guessNumber();
		this.resetButton.disabled = true;
		this.rounds = 1;
		this.state = 'not-started';
		this.updateGuess();
	}

	startGame() {
		if (this.state === 'not-started') {
			this.state = 'in-progress';
			this.buttonsBlock.classList.add('active');
			this.updateGuess();
		}
	}

	lossState() {
		if (this.state === 'in-progress') {
			this.state = 'lost';
			this.guessElement.textContent = 'Я не угадал :( Кликни на меня и дай мне отыграться!';
			this.buttonsBlock.classList.remove('active');
		}
	}

	addVariantToPage() {
		let newLi = document.createElement('li');
		this.list.appendChild(newLi).textContent = this.variants[this.variants.length - 1];
	}

	removeVariantsFromPage() {
		this.list.innerHTML = '';
		this.variants = [];
	}
}

let numberGuesser = new NumberGuesser(0, 1000);
numberGuesser.updateGuess();
numberGuesser.guessElement.textContent = `Нажми на меня и я попробую отгадать число от ${numberGuesser.minNum} до ${numberGuesser.maxNum}!`;

numberGuesser.guessElement.addEventListener('click', () => numberGuesser.startGame());

numberGuesser.lowerButton.addEventListener('click', () => {
	if (numberGuesser.state === 'in-progress') {
		numberGuesser.variants.push(numberGuesser.guess);
		numberGuesser.addVariantToPage();
		numberGuesser.lower();
		numberGuesser.updateGuess();
	}
});

numberGuesser.higherButton.addEventListener('click', () => {
	if (numberGuesser.state === 'in-progress') {
		numberGuesser.variants.push(numberGuesser.guess);
		numberGuesser.addVariantToPage();
		numberGuesser.higher();
		numberGuesser.updateGuess();
	}
});

numberGuesser.correctButton.addEventListener('click', () => {
	if (numberGuesser.state === 'in-progress') {
		numberGuesser.guessElement.textContent = `УГАДАЛ! Ваше число: ${numberGuesser.guess}`;
		numberGuesser.resetButton.disabled = false;
		numberGuesser.correctButton.disabled = true;
	}
});

numberGuesser.resetButton.addEventListener('click', () => {
	numberGuesser.reset();
	numberGuesser.removeVariantsFromPage();
	numberGuesser.correctButton.disabled = false; 
});
