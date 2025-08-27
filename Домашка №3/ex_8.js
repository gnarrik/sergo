// Задача 8:  Найдите сумму всех возрастов людей в массиве.(reduce)
const people = [
	{ name: 'Alice', age: 28 },
	{ name: 'Charlie', age: 25 },
	{ name: 'Bob', age: 35 },
];

let sum = people.reduce((acc, item) => acc + item.age, 0);

console.log(sum);
