// Задача 8: Создайте объект dog, который будет содержать свойства: name (строка), age (число), breed (строка). Напишите функцию, которая принимает объект и имя свойства. Функция должна проверять, существует ли это свойство в объекте, и возвращать соответствующее сообщение.

const dog = {
	name: 'Sebek',
	age: 4,
	breed: 'chihuahua',
};

function isObjectPropertyExist(object, propertyName) {
	if (propertyName in object) {
		return 'Свойство существует';
	} else {
		return 'Свойство не существует';
	}
}

const result = isObjectPropertyExist(dog, 'name');
console.log(result);
