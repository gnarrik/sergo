// Задача 9: Создайте два объекта: один с информацией о пользователе (имя, возраст) и другой с дополнительной информацией (город, профессия). Используйте метод Object.assign() для объединения этих объектов в один

const userInfo = {
	name: 'Nikita',
	age: 22,
};

const extraUserInfo = {
	city: 'Novosibirsk',
	job: 'Engineer',
};

mergedUserInfo = Object.assign({}, userInfo, extraUserInfo);

console.log(mergedUserInfo);
