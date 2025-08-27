// Задача 5: У вас есть строка с запятыми и пробелами между значениями. Преобразуйте ее в массив чисел и найдите их среднее значение.(split)

// 5 задача
const numbersString = '1, 2, 3, 4, 5';

const numbersArr = numbersString.split(', ').map(item => +item);

const average =
	numbersArr.reduce((acc, item) => acc + item, 0) / numbersArr.length;

console.log(average);
