const isLeapYear = (year) => {
	return year % 400 === 0 || (year % 4 === 0 && year % 100 !==0);
};

console.log(isLeapYear(2018)); // false
console.log(isLeapYear(2017)); // false
console.log(isLeapYear(2016)); // true

const reverse = (s) => s.split('').reverse().join('');

// BEGIN (write your solution here)
function isPalindrome(word) { return word.toLowerCase() === reverse(word).toLowerCase(); }

function isNotPalindrome(word) { return !isPalindrome(word); }

console.log(isPalindrome('шалаш')); // true
console.log(isPalindrome('ага')); // true
console.log(isPalindrome('хекслет')); // false

// Слова в функцию могут быть переданы в любом регистре
// Поэтому сначала нужно привести слово в нижний регистр word.toLowerCase()
isPalindrome('Ага'); // true

isNotPalindrome('шалаш'); // false
isNotPalindrome('ага'); // false
isNotPalindrome('хекслет'); // true