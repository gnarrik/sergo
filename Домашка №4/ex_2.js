// Задача 2: У вас есть массив строк. Отфильтруйте строки, которые являются палиндромами (читаются одинаково слева направо и справа налево).(filter)

const strings = ['level', 'world', 'radar', 'example', 'madam'];

const result = strings.filter(
	item => item === item.split('').reverse().join('')
);

console.log(result);
