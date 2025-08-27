// Задача 6: Отсортируйте массив объектов по возрасту в порядке возрастания.(sort)

const people = [
	{ name: 'Alice', age: 28 },
	{ name: 'Charlie', age: 25 },
	{ name: 'Bob', age: 35 },
];

people.sort((a, b) => {
	if (a.age > b.age) {
		return 1;
	} else if (a.age < b.age) {
		return -1;
	} else {
		return 0;
	}
});

console.log(people);
