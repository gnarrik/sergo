// Задача 6:  У вас есть массив объектов с полями category и sales. Используя метод reduce, создайте объект с общими продажами по каждой категории.(reduce)
const salesData = [
	{ category: 'Electronics', sales: 200 },
	{ category: 'Clothing', sales: 150 },
	{ category: 'Electronics', sales: 300 },
	{ category: 'Groceries', sales: 100 },
	{ category: 'Clothing', sales: 200 },
];

// const newArr = {};

// salesData.forEach(item => {
// 	if (!newArr[item.category]) {
// 		newArr[item.category] = 0;
// 	}
// 	newArr[item.category] += item.sales;
// });

const newArr = salesData.reduce((acc, item) => {
	if (acc[item.category]) {
		acc[item.category] += item.sales;
	} else {
		acc[item.category] = item.sales;
	}
	return acc;
}, {});

console.log(newArr);
