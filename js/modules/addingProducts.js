const products = [
	{
		name: 'Арбидол Максимум капс. 200мг №10',
		productPrice: '500',
		status: '🟩',
		pricePerProduct: 'Новый товар без ФШ - 50'
	},
	{
		name: 'Афобазол таблетки 10 мг, 60 шт',
		productPrice: '800',
		status: '🟩',
		pricePerProduct: 'Существовал - 25'
	},
	{
		name: 'Галавит 5 флаконов 100 мг',
		productPrice: '1900',
		status: '🟩',
		pricePerProduct: 'Существовал - 25'
	},
	{
		name: 'Галавит, суппозитории ректальные 100 мг 10 шт',
		productPrice: '1900',
		status: '🟩',
		pricePerProduct: 'Новый товар с ФШ - 100'
	},
	{
		name: 'Гемаза 5 ампул',
		productPrice: '2400',
		status: '🟩',
		pricePerProduct: 0
	},
	{
		name: 'Генферон 1млн.ме 10 шт. суппозитории',
		productPrice: '1300',
		status: '🟩',
		pricePerProduct: 'Новый товар с ФШ - 100'
	},
	{
		name: 'Гипоксен 30 капсул 250 мг',
		productPrice: '600',
		status: '🟩',
		pricePerProduct: 'Новый товар без ФШ - 50'
	},
	{
		name: 'Имудон таблетки для рассасывания 40 шт.',
		productPrice: '900',
		status: '🟩',
		pricePerProduct: 'Существовал - 25'
	},
	{
		name: 'Имунофан 45 мкг/мл 1 мл 5 ампул',
		productPrice: '1200',
		status: '🟩',
		pricePerProduct: 'Новый товар с ФШ - 100'
	},
	{
		name: 'ИРС 19 Спрей 20мл',
		productPrice: '800',
		status: '🟩',
		pricePerProduct: 'Существовал - 25'
	},
	{
		name: 'Кортексин 10 флаконов по 10мг',
		productPrice: '1500',
		status: '🟩',
		pricePerProduct: 0
	},
	{
		name: 'Кортексин для детей',
		productPrice: '1100',
		status: '🟩',
		pricePerProduct: 'Новый товар с ФШ - 100'
	},
	{
		name: 'Ликопид таблетки 10 шт 1 мг',
		productPrice: '400',
		status: '🟩',
		pricePerProduct: 'Новый товар без ФШ - 50'
	},
	{
		name: 'Лонгидаза (свечи)',
		productPrice: '3900',
		status: '🟩',
		pricePerProduct: 'Новый товар без ФШ - 50'
	},
	{
		name: 'Лонгидаза лиофилизат',
		productPrice: '3900',
		status: '🟩',
		pricePerProduct: 'Существовал - 25'
	},
	{
		name: 'Мексидол раствор для инъекций 50 мг/мл 2 мл амп 10 шт',
		productPrice: '900',
		status: '🟩',
		pricePerProduct: 'Существовал - 25'
	},
	{
		name: 'Мексидол таблетки 50 шт 125 мг',
		productPrice: '900',
		status: '🟩',
		pricePerProduct: 'Существовал - 25'
	},
	{
		name: 'Пантогам сироп 100мгмл',
		productPrice: '1100',
		status: '🟩',
		pricePerProduct: 'Существовал - 25'
	},
	{
		name: 'Пантогам таблетки 250 мг, 50 шт',
		productPrice: '1150',
		status: '🟩',
		pricePerProduct: 'Существовал - 25'
	},
	{
		name: 'Пантогам таблетки 500 мг, 50 шт',
		productPrice: '1500',
		status: '🟩',
		pricePerProduct: 'Новый товар без ФШ - 50'
	},
	{
		name: 'Пикамилон таблетки 30 шт 50 мг',
		productPrice: '450',
		status: '🟩',
		pricePerProduct: 'Существовал - 25'
	},
	{
		name: 'Полиоксидоний 12мг 10 суппозиториев (свечи)',
		productPrice: '2100',
		status: '🟩',
		pricePerProduct: 'Новый товар с ФШ - 100'
	},
	{
		name: 'Полиоксидоний лиофилизат 6 мг 5 флаконов',
		productPrice: '2100',
		status: '🟩',
		pricePerProduct: 'Существовал - 25'
	},
	{
		name: 'Полиоксидоний таблетки 12 мг 10 шт.',
		productPrice: '1400',
		status: '🟩',
		pricePerProduct: 'Существовал - 25'
	},
	{
		name: 'РЕМДЕСИВИР',
		productPrice: '1400',
		status: '🟩',
		pricePerProduct: 'Существовал - 25'
	},
	{
		name: 'Ретиналамин 5мг 10 шт',
		productPrice: '4700',
		status: '🟩',
		pricePerProduct: 'Существовал - 25'
	},
	{
		name: 'Семакс 0,1% 3 мл капли',
		productPrice: '800',
		status: '🟩',
		pricePerProduct: 'Существовал - 25'
	},
	{
		name: 'Семакс 1% капли',
		productPrice: '1900',
		status: '🟩',
		pricePerProduct: 'Новый товар без ФШ - 50'
	},
	{
		name: 'Фосфоглив',
		productPrice: '900',
		status: '🟩',
		pricePerProduct: 'Существовал - 25'
	},
	{
		name: 'Циклоферон 5 ампул по 2мл',
		productPrice: '600',
		status: '🟩',
		pricePerProduct: 'Существовал - 25'
	},
	{
		name: 'Циклоферон таблетки 150 мг 50 шт',
		productPrice: '1200',
		status: '🟩',
		pricePerProduct: 'Новый товар без ФШ - 50'
	},
	{
		name: 'ЦИТОФЛАВИН 10мл. АМП №10',
		productPrice: '1900',
		status: '🟩',
		pricePerProduct: 'Существовал - 25'
	},
	{
		name: 'Цитофлавин таблетки 50 шт',
		productPrice: '900',
		status: '🟩',
		pricePerProduct: 'Существовал - 25'
	},
	{
		name: 'Цитохром-С',
		productPrice: '1800',
		status: '🟩',
		pricePerProduct: 'Новый товар с ФШ - 100'
	},
	{
		name: 'Энцефабол 50 таблеток 100мг',
		productPrice: '2700',
		status: '🟩',
		pricePerProduct: 'Новый товар без ФШ - 50'
	}
];

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

function createProductList() {
	const productList = document.createElement('ul');
	productList.className = 'product-list';
	products.forEach((product, index) => {
		const productItem = document.createElement('li');
		productItem.className = 'product-list__item';

		const title = document.createElement('h2');
		title.textContent = product.name;
		title.className = 'product-list__title';
		productItem.appendChild(title);

		const price = document.createElement('span');
		price.textContent = `Цена: ${product.productPrice}`;
		price.className = 'product-list__price';
		productItem.appendChild(price);

		const selectsDiv = document.createElement('div');
		selectsDiv.className = 'product-list__selects';

		const statusSelect = document.createElement('select');
		statusSelect.className = 'product-list__status-select';
		Object.keys(statuses).forEach(key => {
			const option = document.createElement('option');
			option.value = key;
			option.textContent = statuses[key];
			if (statuses[key] == product.status) {
				option.selected = true;
			}
			statusSelect.appendChild(option);
		});
		statusSelect.addEventListener('change', (event) => {
			product.status = statuses[event.target.value];
			saveProductsToCache();
		});
		selectsDiv.appendChild(statusSelect);

		const priceSelect = document.createElement('select');
		priceSelect.className = 'product-list__price-select';
		Object.keys(prices).forEach(key => {
			const option = document.createElement('option');
			option.value = key;
			option.textContent = prices[key];
			if (prices[key] == product.pricePerProduct) {
				option.selected = true;
			}
			priceSelect.appendChild(option);
		});
		priceSelect.addEventListener('change', (event) => {
			product.pricePerProduct = prices[event.target.value];
			saveProductsToCache();
		});
		selectsDiv.appendChild(priceSelect);

		productItem.appendChild(selectsDiv);
		productList.appendChild(productItem);
	});

	return productList;
}

function saveProductsToCache() {
	localStorage.setItem('products', JSON.stringify(products));
}

function loadProductsFromCache() {
	const cachedProducts = localStorage.getItem('products');
	if (cachedProducts) {
		products.length=0; // очистка массива products
		let loadedProducts=JSON.parse(cachedProducts); // загрузка продуктов из кэша
		loadedProducts.forEach(product=>products.push(product)); // добавление загруженных продуктов в массив products
	}
}

loadProductsFromCache();

const header = document.createElement('h1');
header.textContent = 'ТЗ - добавление продуктов на сайт';
document.body.appendChild(header);

document.body.appendChild(createProductList());

let parsedProducts = [];
function parsingDoc(array) {
	document.querySelectorAll('li').forEach((li) => {
		let name = li.querySelector('h2').textContent;
		let productPrice = li.querySelector('span').textContent.split(': ')[1];
		let statusSelectValue = li.querySelectorAll('select')[0].value;
		let priceSelectValue = li.querySelectorAll('select')[1].value;
	
		let productObject = {
			name,
			productPrice,
			status: statuses[statusSelectValue],
			pricePerProduct: prices[priceSelectValue]
		};
	
		array.push(productObject);
	});
}

parsingDoc(parsedProducts);

// console.log(parsedProducts);

let pricePerWork;

function sumPricePerDoneWork(array = parsedProducts, field = 'pricePerProduct') {
	return array.reduce((sum, item) => {
		if (item[field] !== 0 && typeof item[field] === 'string') {
			let number = item[field].match(/\d+/g);
			if (number) {
				return sum + Number(number[0]); // Преобразование строки в число
			}
		}
		return sum;
	}, 0);
}

function addRecalculateButtonAndTotalPriceDiv() {
	// Создаем div-контейнер
	const containerDiv = document.createElement('div');
	containerDiv.className = 'recalculate-container';

	// Создаем кнопку для пересчета
	const recalculateButton = document.createElement('button');
	recalculateButton.textContent = 'Пересчитать';
	recalculateButton.className = 'recalculate-button';

	// Создаем div для отображения общей стоимости
	const totalPriceDiv = document.createElement('div');
	totalPriceDiv.className = 'total-price';

	// Добавляем обработчик событий для кнопки
	recalculateButton.addEventListener('click', () => {
		// Создаем массив для хранения информации, полученной с элементов
		let parsedProducts = [];
		parsingDoc(parsedProducts);

		// Вызываем функцию sumPricePerDoneWork и отображаем результат в div
		let totalPrice = sumPricePerDoneWork(parsedProducts);
		totalPriceDiv.textContent = `Общая стоимость: ${totalPrice}`;
	});

	// Добавляем кнопку и div в контейнер
	containerDiv.appendChild(recalculateButton);
	containerDiv.appendChild(totalPriceDiv);

	// Добавляем контейнер в документ
	document.body.appendChild(containerDiv);
}

// Вызываем функцию
addRecalculateButtonAndTotalPriceDiv();
