// Задача 3: У вас есть массив чисел. Создайте новый массив, где каждое число будет представлено в виде объекта с полями original и square.(map)
const numbers = [1, 2, 3, 4, 5];

const result = numbers.map(function (item) {
	return { original: item, square: item ** 2 };
});

console.log(result);
