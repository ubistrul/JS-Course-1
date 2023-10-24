function repeat(text, count) {
    for (let i = 1; i < count; i++) {
    text += text;
    }
    return text
}

console.log(repeat('wow', 3));

const numbers = [1, 3, 8, 9, 100, 23, 55, 34];

// BEGIN (write your solution here)
const getEvenNumbers = numbers.filter((number) => number % 2 === 0)
console.log(getEvenNumbers);