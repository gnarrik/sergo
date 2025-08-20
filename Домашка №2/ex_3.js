// Задача 3: Добавьте в объект person метод greet, который будет выводить в консоль сообщение вида: "Привет, меня зовут [name]". Вызовите этот метод.

const person = {
	name: 'Nikita',
	age: 22,
	city: 'Novosibirsk',
};

person.greet = function () {
	console.log(`Привет, меня зовут ${this.name}`);
};

person.greet();
