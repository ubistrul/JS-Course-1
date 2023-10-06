function bmiCalc() {

	for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
		e.style.setProperty('--value', e.value);
		e.style.setProperty('--min', e.min == '' ? '0' : e.min);
		e.style.setProperty('--max', e.max == '' ? '100' : e.max);
		e.addEventListener('input', () => e.style.setProperty('--value', e.value));
	}
  
	function labelInputSync (labelSelector, inputSelector) {
		const labels = document.querySelectorAll(labelSelector);
		const inputs = document.querySelectorAll(inputSelector);
  
		inputs.forEach((inputElement, index) => {
  
			labels[index].textContent = inputElement.value;
      
			inputElement.addEventListener('input', (event) => {
				console.log('CHANGE!');
				labels[index].value = event.target.value;
			});});
  
		labels.forEach((labelElement, index) => {
        
			labelElement.addEventListener('input', (event) => {
				console.log('CHANGE!');
				inputs[index].value = event.target.value;
			});});
	}
  
	labelInputSync('.bmi__label', '.bmi__input');
  
	function BMI () {
		const massValue = document.querySelector('.bmi__input[data-value="mass"]').value;
		const heightValue = document.querySelector('.bmi__input[data-value="height"]').value;
		return Math.round(massValue / (heightValue ** 2));
		// return console.log(Math.round(massValue / (heightValue ** 2)));
	}
  
	function calcBMIPerClick (triggerSelector, resultWrapperSelector) {
		const trigger = document.querySelector(triggerSelector);
		const resultTabloid = document.querySelector(resultWrapperSelector);
  
		trigger.addEventListener('click', () => {
			resultTabloid.textContent = BMI();
		});
	}
  
	calcBMIPerClick('.bmi__result-btn', '.bmi__result-text');
}

export default bmiCalc;
