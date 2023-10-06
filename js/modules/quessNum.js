function quessNumber () {
	class NumberGuesser {
		constructor(minNum, maxNum) {
			this.minNum = minNum;
			this.maxNum = maxNum;
			this.guess = this.guessNumber();
			this.lowerButton = document.getElementById('lower');
			this.higherButton = document.getElementById('higher');
			this.correctButton = document.getElementById('correct');
			this.resetButton = document.getElementById('reset');
			this.guessElement = document.getElementById('guess');
		}

		guessNumber() {
			return Math.floor((this.minNum + this.maxNum) / 2);
		}

		lower() {
			this.maxNum = this.guess - 1;
			this.guess = this.guessNumber();
		}

		higher() {
			this.minNum = this.guess + 1;
			this.guess = this.guessNumber();
		}

		reset() {
			this.minNum = 0;
			this.maxNum = 1000;
			this.guess = this.guessNumber();
		}
	}

	let numberGuesser = new NumberGuesser(0, 1000);
	numberGuesser.guessElement.textContent = `Ваше число: ${numberGuesser.guess}?`;

	numberGuesser.lowerButton.addEventListener('click', function() {
		numberGuesser.lower();
		numberGuesser.guessElement.textContent = `Ваше число: ${numberGuesser.guess}?`;
	});

	numberGuesser.higherButton.addEventListener('click', function() {
		numberGuesser.higher();
		numberGuesser.guessElement.textContent = `Ваше число: ${numberGuesser.guess}?`;
	});

	numberGuesser.correctButton.addEventListener('click', function() {
		numberGuesser.guessElement.textContent = `УГАДАЛ! Ваше число: ${numberGuesser.guess}`;
		numberGuesser.resetButton.disabled = false;
	});

	numberGuesser.resetButton.addEventListener('click', function() {
		numberGuesser.reset();
		numberGuesser.guessElement.textContent = `Ваше число: ${numberGuesser.guess}?`;
	});

}

export default quessNumber;