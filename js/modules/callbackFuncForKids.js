function greet(name, callback) {
	console.log('Привет, ' + name);
	callback();
}

greet('Боб', function() {
	console.log('Callback был вызван!');
});

function sumTwoNum (numOne, numTwo, callback) {
	console.log(numOne);
	console.log(numTwo);
	let sum = numOne + numTwo;
	callback(sum);
}

sumTwoNum(4, 4, function(sum) {
	console.log(sum);
	console.log('Это конечная функции колбек');
});

function multNumBy10 (num, callback) {
	setTimeout(() => {
		const multBy10Num = num * 10;
		callback(multBy10Num);
	}, 1000);
}

multNumBy10(10, (result) => {
	console.log(result);
});

const reverseText = (text, callback) => {
	const reversedText = text.split('').reverse().join('');
	callback(reversedText);
};

reverseText('splited text', (reversed) => console.log(reversed));



const changeColor = () => {
	this.style.backgroundColor('red');
};