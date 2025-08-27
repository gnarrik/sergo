// Задача 4: Создайте новый массив, содержащий только тех людей, чей возраст меньше 30 лет.(filter)

const people = [
	{ name: 'Alice', age: 28 },
	{ name: 'Bob', age: 35 },
	{ name: 'Charlie', age: 25 },
];

const result = people.filter(item => item.age < 30);

console.log(result);
