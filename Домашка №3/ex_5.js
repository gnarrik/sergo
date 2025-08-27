// Задача 5: Создайте новый массив, содержащий только имена людей из исходного массива.(map)

const people = [
	{ name: 'Alice', age: 28 },
	{ name: 'Bob', age: 35 },
	{ name: 'Charlie', age: 25 },
];
const names = people.map(item => item.name);

console.log(names);
