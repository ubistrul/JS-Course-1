const user = {
	name: 'Вася',
	surName: 'Пупкин',
	age: 28,
	skills: ['programmer', 'dick', 'developer'],
	educationBasic: 'ЗОШ, №10',
	educationPro: 'МФАТ',
};

console.table(user);
console.table(user.skills[0]);
console.log(user);

let peoples = [
	{ name: 'Алексей', age: 30 },
	{ name: 'Мария', age: 25 },
	{ name: 'Владимир', age: 45 },
	{ name: 'Елена', age: 35 },
	{ name: 'Сергей', age: 40 }
];

function sortingPeoplesArrayByAgeAscending (array) {
	return Array.from(array).sort((a, b) => a.age - b.age);
}

function sortingPeoplesArrayByAgeDescending (array) {
	return Array.from(array).sort((a, b) => b.age - a.age);
}

const sortedPeoplesAscending = sortingPeoplesArrayByAgeAscending(peoples);
const sortedPeoplesDescending = sortingPeoplesArrayByAgeDescending(peoples);
console.log(sortedPeoplesAscending);
console.log(sortedPeoplesDescending);
console.log(peoples);

const users = [
	{
		name: 'Вася',
		surname: 'Пупкин',
		age: 30,
		skills: ['Разработка', 'DevOps']
	},
	{
		name: 'Катя',
		surname: 'Белова',
		age: 18,
		skills: ['Дизайн']
	}
];

const userData = users.map((user) => {
	return {
		fullname: `${user.name} ${user.surname}`,
		skillsNum: user.skills.length
	};
});

const userData2 = users.map((user) => {
	return {
		...user,
		fullname: `${user.name} ${user.surname}`,
		skillsNum: user.skills.length,
	};
});


console.log(userData);
console.log(userData2);

const wallet = {
	balance: 0,
	operations: [],
	changeBal: function(operationSum, operReason = 'Random operation') {
		const operation = {
			reason: operReason,
			actualBalance: this.balance,
			sum: operationSum,
			status: this.balance + operationSum > 0 ? 'access' : 'denied'
		};
		this.operations.push(operation);
		if (operation.status === 'access') {
			this.balance += operationSum;
		}
		return operation.status === 'access';
	},
	operationCount: function() {
		console.log(this.operations.length);
	}
};

// Variant by AI with Destructurize, Template literals and Arrow Functions
// const wallet = {
//   balance: 0,
//   operations: [],
//   changeBal: function(operationSum, operReason = 'Random operation') {
//     const operation = {
//       reason: operReason,
//       actualBalance: this.balance,
//       sum: operationSum,
//       status: this.balance + operationSum > 0 ? 'access' : 'denied'
//     };
//     this.operations.push(operation);
//     if (operation.status === 'access') {
//       this.balance += operationSum;
//     }
//     return operation.status === 'access';
//   },
//   operationCount: function() {
//     console.log(this.operations.length);
//   }
// };

wallet.changeBal(350, 'Операция 1');
wallet.changeBal(350, 'Операция 2');
wallet.changeBal(300, 'Операция 3');
wallet.changeBal(-1200, 'Операция 3');

console.table(wallet.operations);