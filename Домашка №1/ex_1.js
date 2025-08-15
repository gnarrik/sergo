'use strict';

let n = +prompt('Введите число', 10) // в общем случае мы запрашиваем число

// Способ №1
for (let i = 1; i <= n; i++) {
	console.log(i);
}

//Способ №2
let i = 1;
while (i <= n) {
	console.log(i);
	i++
}

// Способ №3
i = 1
do {
	console.log(i);
	i++
} while (i <=n)