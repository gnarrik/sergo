// Задача 3: В том же массиве объектов найдите индекс первого человека с именем 'Charlie'.(findIndex)

const people = [
	{ name: 'Alice', age: 28 },
	{ name: 'Bob', age: 35 },
	{ name: 'Charlie', age: 25 },
];

const result = people.findIndex(item => item.name === 'Charlie');

console.log(result);
