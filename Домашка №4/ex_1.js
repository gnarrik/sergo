// Задача 1: У вас есть массив объектов, представляющих заказы (с полями id, amount и status). Используя forEach, создайте новый объект, который будет содержать сумму заказов по каждому статусу.(forEach)

const orders = [
	{ id: 1, amount: 100, status: 'completed' },
	{ id: 2, amount: 200, status: 'pending' },
	{ id: 3, amount: 150, status: 'completed' },
	{ id: 4, amount: 300, status: 'canceled' },
];

let result = {};
orders.forEach(function (item) {
	if (!result[item.status]) {
		result[item.status] = 0;
	}
	result[item.status] += item.amount;
});

console.log(result);
