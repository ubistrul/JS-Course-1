let data = `Арбидол Максимум капс. 200мг №10
600

Афобазол таблетки 10 мг, 60 шт
900

Бактериофаг клебсиелл поливалентный очищенный 4 флакона по 20 мл
2200

Бактериофаг колипротейный 100мл
1500

Бактериофаг псевдомонас аеругиноза 100мл
1000

Бактериофаг сальмонеллезный групп A,B,C,D,E 100мл
1000

Бактериофаг стафилококковый 100мл
2200

Бактериофаг стафилококковый 4 флакона по 20мл
2200

Бактериофаг стрептококковый 4 флакона по 20 мл
1800

Галавит 5 флаконов 100 мг
2000

Галавит, суппозитории ректальные 100 мг 10 шт
2000

Гемаза 5 ампул
2500

Генферон 1млн.ме 10 шт. суппозитории
1400

Гипоксен 30 капсул 250 мг
700

Имудон таблетки для рассасывания 40 шт.
1000

Имунофан 45 мкг/мл 1 мл 5 ампул
1300

Интести-бактериофаг 100мл
1600

Интести-Бактериофаг 4 флакона по 20 мл
1800

ИРС 19 Спрей 20мл
900

Кортексин 10 флаконов по 10мг
1600 1750

Кортексин для детей
1200

Ликопид таблетки 10 шт 1 мг
500

Лонгидаза (свечи)
4000

Лонгидаза лиофилизат
4000

Мексидол раствор для инъекций 50 мг/мл 2 мл амп 10 шт
1000

Мексидол таблетки 50 шт 125 мг
1000

Отофаг гель с бактериофагами 50мл
1000

Пантогам сироп 100мгмл
1200

Пантогам таблетки 250 мг, 50 шт
1250

Пантогам таблетки 500 мг, 50 шт
1600

Пикамилон таблетки 30 шт 50 мг
550

Пиобактериофаг комплексный жидкий 100 мл
1000

Пиобактериофаг поливалентный очищенный 4 флакона по 20 мл
1800

Полиоксидоний 12мг 10 суппозиториев (свечи)
2200

Полиоксидоний лиофилизат 6 мг 5 флаконов
2200

Полиоксидоний таблетки 12 мг 10 шт.
1500

РЕМДЕСИВИР
1500

Ретиналамин 5мг 10 шт
4800

Секстафаг 4 флакона по 20 мл
1800

Семакс 0,1% 3 мл капли
900

Семакс 1% капли
2000

Фагогин гель 50мл
650

Фагодерм гель с бактериофагами 50 мл
1000

Фосфоглив
1000

Циклоферон 5 ампул по 2мл
700

Циклоферон таблетки 150 мг 50 шт
1300

ЦИТОФЛАВИН 10мл. АМП №10
2000

Цитофлавин таблетки 50 шт
1000

Цитохром-С
1900

Энцефабол 50 таблеток 100мг
2800`; // Ваш список товаров и цен здесь.

let lines = data.split('\n');
let products = [];
for (let i = 0; i < lines.length; i += 3) {
	let name = lines[i];
	let firstWord = name.split(' ')[0].toLowerCase(); // Получаем первое слово в названии продукта
	if (!firstWord.endsWith('фаг') && firstWord !== 'бактериофаг') { // Если первое слово не заканчивается на "фаг" и не равно "бактериофаг"
		let product = {
			name: name,
			price: parseInt(lines[i + 1]) - 100,
			status: null,
			pricePerProduct: null,
		};
		products.push(product);
	}
}
console.log(products); // Выводим массив продуктов.

// const statuses = ['Существовал - 25', 'Новый товар без ФШ - 50', 'Новый товар с ФШ - 100']

const prices = {
	0: 0,
	1: 'Существовал - 25',
	2: 'Новый товар без ФШ - 50',
	3: 'Новый товар с ФШ - 100',
};

const statuses = {
	1: '🟥',
	2: '🟨',
	3: '🟩',
};

function statusChange (products, productToChange, price, status) {
	products.map((product) => {
		if (product.name === productToChange) {
			product.price = price;
			product.status = status;
		}
	});
}

