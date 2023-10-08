//* LOOP IN LOOP (for) 

// function makePiramideUp (countOfStroke) {
// 	let result = '';
// 	for (let i = 1; i < countOfStroke; i++) {
// 		for (let j = 0; j < i; j++) {
// 			console.log('Level2');
// 			result += '*';
// 		}
// 		console.log('Level1');
// 		result += '\n';
// 	}
// 	return result;
// }

// function makePiramideDown(countOfStroke) {
// 	let result = '';
// 	for (let i = countOfStroke; i > 0; i--) {
// 		for (let j = 0; j < i; j++) {
// 			result += '*';
// 		}
// 		result += '\n';
// 	}
// 	return result;
// }

// function makePiramideWithNumOfElUp(countOfStroke, starsPerLevel) {
// 	let result = '';
// 	for (let i = 1; i < countOfStroke; i++) {
// 		result += '*'.repeat(i * starsPerLevel);
// 		result += '\n';
// 	}
// 	return result;
// }

// function makePiramideWithNumOfElDown(countOfStroke, starsPerLevel) {
// 	let result = '';
// 	for (let i = countOfStroke; i > 0; i--) {
// 		result += '*'.repeat(i * starsPerLevel);
// 		result += '\n';
// 	}
// 	return result;
// }

// const piramideUp10 = makePiramideUp(10);
// const piramideDown10 = makePiramideDown(10);
// const concatPiramides = piramideUp10 + piramideDown10;
// console.log(concatPiramides);

// const pirUp_10_2 = makePiramideWithNumOfElUp(5, 2);
// const pirDown_10_2 = makePiramideWithNumOfElDown(5, 2);
// const cincatPirUpDown = pirUp_10_2 + pirDown_10_2;
// console.log(cincatPirUpDown);