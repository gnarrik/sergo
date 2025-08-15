'use strict';

let n = +prompt('Введите число', 10); // в общем случае мы запрашиваем число
let j = n

// Способ 1
while (n !== 0) {
	console.log(n);
	n--;
}

// Способ 2
for (j; j !== 0; j--) {
	console.log(j);
}