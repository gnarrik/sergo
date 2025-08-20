// Задача 6: Создайте объект student, который будет содержать следующие свойства: name (строка), age (число), grades (объект с предметами и оценками, например: { math: 5, english: 4 }). Выведите в консоль среднюю оценку студента.

const student = {
	name: 'Nikita',
	age: 22,
	grades: {
		math: 5,
		english: 4,
	},
};

let sumOfMarks = 0;
let marksQuantity = 0;

for (i in student.grades) {
	marksQuantity++;
	sumOfMarks += student.grades[i];
}

const averageMark = sumOfMarks / marksQuantity;

console.log(averageMark);
