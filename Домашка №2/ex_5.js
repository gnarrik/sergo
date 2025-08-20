// Задача 5: Создайте объект book, который будет содержать следующие свойства: title (строка), author (строка), year (число). Создайте новый объект copyOfBook, который будет копией объекта book. Измените значение свойства year в объекте copyOfBook. Выведите оба объекта в консоль, чтобы увидеть, что они разные.

const book = {
	title: 'War and peace',
	author: 'Tolstoy',
	year: 1861,
};

const copyOfBook = Object.assign({}, book);

copyOfBook.year = 1900;

console.log(book);
console.log(copyOfBook);
