const min = 1;
const max = 10;

function randomNum(min, max) {
	return Math.round((Math.random() * ( max - min ) + min));
}

// console.log(randomNum(min, max));

const args1 = [2, 6, 9, 6, 7, 8];
const args2 = [16, 4, 9, 6, 21, 3, 35];

// function middle(...args) {
// 	args.sort((a, b) => a - b);
// 	if (args.length % 2 !== 0) {
// 		var half = Math.floor(args.length / 2);
// 		return args[half];
// 	} else {
// 		return 'Количество элементов в массиве четное';
// 	}
// }

// function middle(...args) {
// 	if (args.length === 1 && Array.isArray(args[0])) {
// 		args = args[0];
// 	}
// 	args.sort((a, b) => a - b);
// 	if (args.length % 2 !== 0) {
// 		var half = Math.floor(args.length / 2);
// 		return args[half];
// 	} else {
// 		return 'Количество элементов в массиве четное';
// 	}
// }

// function middle(args) {
// 	if (!Array.isArray(args)) {
// 		args = [...arguments];
// 	}
// 	args.sort((a, b) => a - b);
// 	if (args.length % 2 !== 0) {
// 		var half = Math.floor(args.length / 2);
// 		return args[half];
// 	} else {
// 		return 'Количество элементов в массиве четное';
// 	}
// }

function middle(...args) {
	// Если переданы массивы, объединяем их в один
	if (args.every(Array.isArray)) {
		args = [].concat(...args);
	}

	// Преобразуем все элементы в числа и отфильтровываем невалидные значения
	args = args.map(Number).filter(num => !isNaN(num));

	// Если после фильтрации массив пуст, возвращаем сообщение об ошибке
	if (args.length === 0) {
		return 'Нет валидных числовых аргументов';
	}

	// Сортируем массив
	args.sort((a, b) => a - b);

	// Если количество элементов нечетное, возвращаем средний элемент
	if (args.length % 2 !== 0) {
		const half = Math.floor(args.length / 2);
		return args[half];
	} else {
		return 'Количество элементов в массиве четное';
	}
}

console.log(middle(2, 6, 9, 6, 7, 8, 1));
console.log(middle(args1, args2));
