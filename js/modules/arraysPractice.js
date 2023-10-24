const tasks = ['Задача 1']

function arrayPush (array, task) {
    array.push(task)
};

arrayPush(tasks, 'Задача 2')
arrayPush(tasks, 'Задача 3')
arrayPush(tasks, 'Задача 4')
arrayPush(tasks, 'Задача 5')
arrayPush(tasks, 'Задача 2')
arrayPush(tasks, 'Задача 6')

console.log(tasks);


//* Such a function may give incorrect results due to the fact that the element is shifted “to the left”. 
//* And if the searched element is located behind the same found element, then the second one will be skipped and NOT deleted.
// function deleteTaskFromArrayByName (array, task) {
//     array.forEach((elem, index) => {
//         if (elem === task) {
//             console.log('equality')
//             array.splice(index, 1);
//         }
//     })
// };

//* This func return the new array. But great for eyes <3
// function deleteTaskFromArrayByName (array, task) {
//     array.filter((elem) => elem != task)
// };

// //* This function gives the correct result because it does not break the order of the array and can immediately delete all tasks that have the same name.
function deleteTaskFromArrayByName (array, task) {
    for (let i = array.length - 1; i >= 0; i--) {
        if(array[i] === task) {
            array.splice(i, 1)
        }
    }
}

deleteTaskFromArrayByName(tasks, 'Задача 2')

console.log(tasks);

function movingTaskToStartOfArray (array, task) {
    array.forEach((elem, index) => {
        if (elem === task) {
            array.splice(index, 1);
            array.unshift(elem)
        }
    })
};

movingTaskToStartOfArray(tasks, 'Задача 4');
movingTaskToStartOfArray(tasks, 'Задача 2');
console.log(movingTaskToStartOfArray(tasks, 'Задача 2'));
console.log(tasks);

// const url = 'http//developer.mozilla.org/ru/docs/Web'
const url = '//developer.mozilla.org/ru/docs/Web'

// const getURLProtocol = url => Array.from(url).slice(0, Array.from(url).indexOf(':')).join('');
// const getURLProtocol = url => url.slice(0, url.indexOf(':'));
// const getURLProtocol = url => url.indexOf(':') != -1 ? url.slice(0, url.indexOf(':')) : null ;
const getURLProtocol = url => {
    colonIndex = url.indexOf(':');
    return colonIndex != -1 ? url.slice(0, colonIndex) : null ;
}

const getURLParts = (url) => {
    const [protocol, _, host, ...path] = url.split('/')
    if (protocol === 'http' || protocol === 'https') {
        console.log(`Протокол: ${protocol}`);
        console.log(`Имя сайта: ${host}`);
        console.log(`Путь: ${path.join('/')}`);
        return [protocol, host, path.join('/')]
    }
    return
}

// console.log(getURLProtocol(url));
getURLParts(url);

const URLParts = getURLParts(url);
console.log(URLParts);
