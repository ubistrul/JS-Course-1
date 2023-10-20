const creditCard = '2034 3990 0212 1100   ';

/**
 * 
 * @param {number|string} ccNum - Credit card number. Can be a number or a string.
 * @param {number} showCount - Number of card symbols to show at the end. Default is 4.
 * @param {number} hideCount - Number of symbols to add before the last digits of the card number. Default is 4.
 * @param {string} hideSymbol - Symbol used as a mask. Default is '*'.
 * @returns {string}
 */
function getHiddenCard (ccNum, showCount = 4, hideCount = 4, hideSymbol = '*') {
	return hideSymbol.repeat(hideCount) + ccNum.toString().replace(/ /g, '').trim().slice(-showCount);
}

console.log(getHiddenCard(creditCard, 4));
console.log(getHiddenCard(creditCard, 6));
console.log(getHiddenCard(creditCard, 6, 10));

const name = 'arya';
const capitalize = string => string[0].toUpperCase() + string.slice(1);

console.log(capitalize(name));

const person = {
	name: 'Angelika',
	secondName: 'Volkova', 
	age: 16,
	isChild () {
		return this.age < 12;
	},
};

// const isInfant = (person) => this.age < 1;

// function isChild (person) {
// 	return person.age < 12;
// }

console.log(person.isChild());