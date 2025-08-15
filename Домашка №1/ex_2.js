'use strict';

const n = +prompt('Введите число', 100); // в общем случае мы запрашиваем число

// Способ №1
let sum = 0;
for (let i = 1; i <= n; i++) {
	sum += i
}
console.log(sum);

//Способ №2 (более быстрый, формула арифметической прогрессии)
sum = n * (n + 1) / 2;
console.log(sum);
 