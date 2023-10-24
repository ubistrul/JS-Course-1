console.log('Hello');

const counterDiv = document.querySelector('.counter__result');
const decreaseBtn = document.querySelector('.btn[data-control="decrease"]');
const decreaseSelect = document.querySelector('.counter__control-select[data-control="decrease-interval"]')
console.log(decreaseSelect);
const increaseBtn = document.querySelector('.btn[data-control="increase"]');
const increaseSelect = document.querySelector('.counter__control-select[data-control="increase-interval"]')
console.log(increaseSelect);
const selects = document.querySelectorAll('.counter__control-select')
const globalCounterSpan = document.querySelector('.global-counter__num');
const resetBtn = document.querySelector('.btn[data-control="reset"]');
const intervalMenu = document.querySelector('.counter__interval-menu-btn')
const selectionHeight = increaseSelect.clientHeight;
// const selectsValues = selects.op

console.log(selectionHeight);

console.log(globalCounterSpan);

intervalMenu.style.height = selectionHeight + 'px';

let counter = 0;
let globalCounter = 0;
counterDiv.innerText = counter;

decreaseBtn.addEventListener('click', (event) => {
    if (!isNaN(+decreaseSelect.value)) 
    {
        counter -= +decreaseSelect.value;
        counterDiv.innerText = counter;
        counterDiv.classList.add('counter__result--active');
        counterDiv.addEventListener('animationend', () => {
        counterDiv.classList.remove('counter__result--active');
        }, {once: true});
        globalCounterIncrement();
        console.log(counter);
    }
});

increaseBtn.addEventListener('click', (event) => {
    if (!isNaN(+increaseSelect.value)) 
    {
        counter += +increaseSelect.value;
        counterDiv.innerText = counter;
        counterDiv.classList.add('counter__result--active');
        counterDiv.addEventListener('animationend', () => {
        counterDiv.classList.remove('counter__result--active');
        }, {once: true});
        globalCounterIncrement();
        console.log(counter);
    }
});

function globalCounterIncrement () {
    globalCounter++;
    globalCounterSpan.innerText = globalCounter;
}

resetBtn.addEventListener('click', () => {
    counter = 0;
    counterDiv.innerText = counter;
    globalCounter = 0;
    globalCounterSpan.innerText = globalCounter;
    increaseSelect.value = increaseSelect[0].value;
    decreaseSelect.value = decreaseSelect[0].value;
});

// intervalMenu.addEventListener('click', function(event) {
//     if (event.target === this) {
//         // console.log('intervalMenu');
//         hideIntervalMenu();
//     }
// });

// let hideTimeout;

// function hideIntervalMenu() {
//     intervalMenu.classList.add('counter__interval-menu-btn--hidden');
//     hideTimeout = setTimeout(() => intervalMenu.classList.remove('counter__interval-menu-btn--hidden'), (1000 * 10));
// }

// intervalMenu.addEventListener('click', function(event) {
//     if (event.target === this) {
//         hideIntervalMenu();
//     }
// });

// selects.forEach(select => {
//     select.addEventListener('focus', () => clearTimeout(hideTimeout));
//     select.addEventListener('focus', () => console.log('focused'));
//     select.addEventListener('blur', () => {
//         // Добавляем задержку перед скрытием меню
//         setTimeout(hideIntervalMenu, 200);
//     });
// });


console.log('Bye');