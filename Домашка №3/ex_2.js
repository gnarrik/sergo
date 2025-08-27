// Задача 2: У вас есть массив объектов, представляющих людей (с полями name и age).  Используя метод find, найдите первого человека, которому больше 30 лет.(find)

const people = [
	{ name: 'Alice', age: 28 },
	{ name: 'Bob', age: 35 },
	{ name: 'Charlie', age: 25 },
];

console.log(people.find(item => item.age > 30));
