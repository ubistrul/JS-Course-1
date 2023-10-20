const numbers = [10, 20, 30, 40, 50];

const numbersSum = numbers.reduce((accumulator, element) => accumulator += element);

console.log(numbersSum);

const numbers2 = [5, 10, 15, 20, 25];

const numbersAverage = numbers2.reduce((accumulator, element) => accumulator += element / (numbers2.length - 1), 0);

let numbersAverage2 = 0;
for (let i = 0; i < numbers2.length; i++) {
	numbersAverage2 += numbers2[i] / (numbers2.length - 1);
}

console.log(numbersAverage);
console.log(numbersAverage2);

const fruits = ['яблоко', 'банан', 'яблоко', 'апельсин', 'банан', 'банан'];

const fruitsСount = fruits.reduce((counter, fruit) => {
	counter[fruit] = (counter[fruit] || 0) + 1;
	return counter;
}, {});

console.log(fruitsСount);

const pets = [
	{ type: 'кошка', name: 'Мурка' },
	{ type: 'собака', name: 'Бобик' },
	{ type: 'попугай', name: 'Кеша' }
];

const petsObj = pets.reduce((obj, pet) => {
	obj[pet.type] = pet.name;
	return obj;
}, {});

console.log(petsObj);

const words = ['Привет', 'мир', 'JavaScript', 'очень', 'крут'];

const wordsConcat = words.reduce((wordsConcat, word, wordIndex) => {
	return wordsConcat += wordIndex === 0 ? `${word}` : ` ${word}`; 
}, '');

// Var 2
// const wordsConcat = words.reduce((wordsConcat, word, wordIndex) => wordIndex === 0 ? `${word}` : `${wordsConcat} ${word}`, '');


// Var 1 noСheckEl
// const lettersNum = words.reduce((lettersNum, el) => lettersNum + el.length, 0);

const lettersNum = words.reduce((lettersNum, word) => lettersNum += typeof word === 'string' ? word.length : lettersNum, 0);
  
console.log(wordsConcat);
console.log(lettersNum);

const keyValuePairs = [['ключ1', 'значение1'], ['ключ2', 'значение2'], ['ключ3', 'значение3']];

const objFromArray = keyValuePairs.reduce((objFromArray, array) => {
	objFromArray[array[0]] = array[1];
	return objFromArray;
}, {});

console.log(objFromArray);

const numbers3 = [5, 12, 8, 130, 44];
const maxNum = numbers3.reduce((maxNum, num) => maxNum = num > maxNum ? num : maxNum);
console.log(maxNum);

const numbersArr = [1, 2, 3, 4];

const numbersSqrArr = numbersArr.reduce((numbersSqrArr, num, numIndex) => {
	numbersSqrArr.push(num ** 2);
	return numbersSqrArr;
} , []);

const numbersSqrArr2 = numbersArr.reduce((numbersSqrArr, num, numIndex) => {
	numbersSqrArr[numIndex] = num ** 2;
	return numbersSqrArr;}
, []);

console.log(numbersSqrArr);
console.log(numbersSqrArr2);

//* Подсчет элементов в массиве массивов: Дан массив массивов, подсчитайте общее количество элементов во всех массивах. Вы можете использовать метод reduce для преобразования массива в плоский вид, а затем получить его длину.
const arrayOfArrays = [[1, 2, 3], [4, 5], [6], [7, 8, 9, 10, 11, 12]];

const sumOfElemOfArrays = arrayOfArrays.reduce((sumOfElemOfArrays, array) => sumOfElemOfArrays + array.length, 0);
console.log(sumOfElemOfArrays);

//* Успевающие студенты: Дан массив объектов студентов с свойствами name и grade, используйте метод reduce для поиска студентов с оценками выше определенного порога.
const students = [
	{ name: 'Иван', grade: 85 },
	{ name: 'Анна', grade: 90 },
	{ name: 'Мария', grade: 84 },
	{ name: 'Сергей', grade: 92 },
	{ name: 'Алексей', grade: 88 }
];

// function studentsLevel (students, threshold) {
// 	return students.reduce((sorteredStudents, student) => student.grade >= threshold ? (sorteredStudents.push(student)): sorteredStudents, []);
// }
function studentsByLevel (students, threshold) {
	return students.reduce((sorteredStudents, student) => {
		if (student.grade >= threshold) {
			sorteredStudents.push(student);}
		return sorteredStudents;
	}, []);
}

console.log(studentsByLevel(students, 90));


//*Категории дорогих товаров: Если у вас есть массив объектов продуктов со свойствами category и price, используйте метод reduce для поиска самого дорогого продукта в каждой категории.
const products = [
	{ category: 'Электроника', price: 12000 },
	{ category: 'Электроника', price: 15000 },
	{ category: 'Мебель', price: 8000 },
	{ category: 'Мебель', price: 11000 },
	{ category: 'Одежда', price: 3000 },
	{ category: 'Одежда', price: 7000 }
];
// Ваш код здесь
const expensiveProducts = products.reduce((expensiveProducts, product) => {
	if (!expensiveProducts[product.category] || product.price > expensiveProducts[product.category].price) {
		expensiveProducts[product.category] = product;
	}
	return expensiveProducts;
}, {});

const expensiveProducts2 = products.reduce((expensiveProducts, product) => {
	if (!expensiveProducts[product.category] || product.price > expensiveProducts[product.category]) {
		expensiveProducts[product.category] = product.price;
	}
	return expensiveProducts;
}, {});

console.log(expensiveProducts);
console.log(expensiveProducts2);

//* Отдел кадров против IT-отдела: Если у вас есть массив объектов сотрудников со свойствами department и salary, используйте метод reduce для сравнения общих затрат на зарплату отдела кадров и IT-отдела.
const employees = [
	{ department: 'HR', salary: 35000 },
	{ department: 'HR', salary: 40000 },
	{ department: 'IT', salary: 45000 },
	{ department: 'IT', salary: 50000 },
	{ department: 'IT', salary: 55000 }
];
// Ваш код здесь
const employeesSalaryPerDepartment = employees.reduce((employeesSalaryPerDepartment, employees) => {
	employeesSalaryPerDepartment[employees.department] = (employeesSalaryPerDepartment[employees.department] || 0) + employees.salary;
	return employeesSalaryPerDepartment;
}, {});

console.log(employeesSalaryPerDepartment);

// Помните, это всего лишь описания задач. Попробуйте реализовать решения для этих задач с использованием метода reduce в JavaScript. Если вам нужна помощь, не стесняйтесь спрашивать!