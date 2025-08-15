'use strict';

const n = +prompt('Введите число', 20); // в общем случае мы запрашиваем число

// Способ №1 (простой перебор if...)
for (let i = 1; i <= n; i++) {
	if (i % 2 === 0) {
		console.log(i);
	}
}

// Способ №2 (простой перебор switch...case)
for (let i = 1; i <= n; i++) {
	switch(true) {
		case i % 2 === 0:
			console.log(i);
			break;
	}
}

// Способ №3 (Более хитрый перебор)
for (let i = 2; i <= n; i += 2) {
	console.log(i);
}