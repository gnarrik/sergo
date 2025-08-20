// Задача 4: Создайте объект car, который будет содержать следующие свойства: brand (строка), model (строка), year(число), owners(массив строк, представляющий имена владельцев). Выведите в консоль информацию о последнем владельце автомобиля.

const car = {
	brand: 'toyota',
	model: 'camry',
	year: '1999',
	owners: ['Ivan', 'Sergey', 'Nikita'],
};

const lasrOwner = car.owners[car.owners.length - 1];

console.log(lasrOwner);
