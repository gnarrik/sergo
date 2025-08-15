'use strict';

const n = +prompt('Введите число', 5); // в общем случае мы запрашиваем число
let arr = []; // сюда будем добавлять квадраты чисел 0...n

for (let i = 1; i <= n; i++) {
	arr.push(i ** 2);
}
console.log(arr);