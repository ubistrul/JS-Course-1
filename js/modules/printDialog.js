const dialog = [
	'Привет, как дела?',
	'Привет! У меня все хорошо, спасибо. А у тебя?',
	'Тоже все отлично! Как прошел твой день?',
	'Мой день был замечательным! Я посетил музей искусства. А ты?',
	'Я провел день на работе, но вечером посмотрел новый фильм.',
	'О, это здорово! Какой фильм ты смотрел?',
	'Я смотрел новый фильм Marvel. Он был действительно захватывающим!',
	'Звучит здорово! Я обязательно его посмотрю.'
];

//* Without async func this code is not working
// function printDialog (dialog) {
// 	for (let step = 0; step < dialog.length; step++) {
// 		if (step != 0) {
// 			setTimeout(console.log(dialog[step]), 1500);
// 		}
// 		console.log(dialog[step]);
// 	}
// }

//* This variant of function is right
function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function printDialog(dialog) {
	for (let i = 0; i < dialog.length; i++) {
		console.log(dialog[i]);
		if (i != dialog.length - 1) {
			await delay(1500);
		}
	}
}

// printDialog(dialog);

//* MODIFIED FUNC WITH 


function getRandomDelay(minDelayInSeconds, maxDelayInSeconds) {
	const minDelay = minDelayInSeconds * 1000;
	const maxDelay = maxDelayInSeconds * 1000;
	return Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
}

/**
 * 
 * @param {String[]} dialog - An array containing your two-person dialogue (or monologue). Each step is printed.
 * @param {Number} [defaultDelayInSeconds=1] - The default static delay in seconds between each message. This is used if the random delay parameters are not provided.
 * @param {Number} minDelayInSeconds - The minimum delay time in seconds for printing a dialogue message. Optional, but required if you want to use the random delay feature.
 * @param {Number} maxDelayInSeconds - The maximum delay time in seconds for printing a dialogue message. Optional, but required if you want to use the random delay feature.
 * 
 * Note: This function optionally uses a random delay between messages. To enable this feature, you must provide both `minDelayInSeconds` and `maxDelayInSeconds`. 
 * If these are not provided, the function will use a fixed delay of `defaultDelayInSeconds`. 
 * The random delay is generated by the `getRandomDelay` function. 
 * Also note that this function relies on the `delay` function to create the delay.
 */
async function printDialogWithRandom(dialog, defaultDelayInSeconds = 1, minDelayInSeconds, maxDelayInSeconds) {
	for (let i = 0; i < dialog.length; i++) {
		console.log(dialog[i]);
		if (i != dialog.length - 1) {
			let delayTime;
			if (minDelayInSeconds && maxDelayInSeconds) {
				delayTime = getRandomDelay(minDelayInSeconds, maxDelayInSeconds);
			} else {
				delayTime = defaultDelayInSeconds * 1000; // Задержка по умолчанию в миллисекундах
			}
			await delay(delayTime);
		}
	}
}



// printDialogWithRandom(dialog, 1); //static delay
// printDialogWithRandom(dialog, 1, 1.5, 4); //random delay

// printDialog(dialog);