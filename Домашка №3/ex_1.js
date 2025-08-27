// Задача 1: вас есть массив чисел. Используя метод forEach, создайте новый массив, где каждое число будет возведено в квадрат, и выведите его на экран.(forEach)

const numbers = [1, 2, 3, 4, 5];
const arr = [];

numbers.forEach(item => arr.push(item ** 2));

console.log(...arr);
