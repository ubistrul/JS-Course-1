const productList = [
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

pricePerWork = sumPricePerDoneWork(productList);

console.log(pricePerWork);