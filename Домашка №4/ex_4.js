// Задача 4: У вас есть массив объектов с полями name и age. Отсортируйте их сначала по возрасту по возрастанию, а затем по имени в алфавитном порядке.(sort)

const people = [
	{ name: 'Charlie', age: 25 },
	{ name: 'Alice', age: 28 },
	{ name: 'Bob', age: 28 },
	{ name: 'David', age: 20 },
];

people.sort((a, b) => a.age - b.age);

people.sort((a, b) => a.name - b.name);

console.log(people);
