// 1. Создать программу в которой сравнивается возраст
// двух человек (Федота и Митрофана).
// Если возраст Федота больше чем возраст Митрофана,
// то должно выводится сообщение, в котором указана
// разница в возрасте: «Федот старше Митрофана на 3 ».
// Если возраст Митрофана больше, то выводится такое
// сообщение: «Митрофан старше Федота на 5».
// Если возраст обоих человек один и тот же, то
// выводится такое сообщение: «Федот и Митрофан
// одного возраста».

let a = prompt('Введите возраст Федота');
let b = prompt('Введите возраст Митрофана');
let c = a - b;
let d = b - a;

a = Number(a);
b = Number(b);
c = Number(c);
d = Number(d);

	if (isNaN(a) || isNaN(b)) {
		alert("Введите возраст в цифровом выражении!");
	}
	if (a > b) {
		console.log(`Федот старше Митрофана на ${c}`);
	} else if (b > a) {
		console.log(`Митрофан старше Федота на ${d}`);
	} else if (a === b) {
		console.log(`Федот и Митрофан одного возраста`);
	}



// 2. Пользователь вводит ТРИ числа
// вывести в консоль наибольшее из них

let first = prompt('Enter first number');
let second = prompt('Enter second number');
let third = prompt('Enter third number');

first = Number(first);
second = Number(second);
third = Number(third);

    if (first > second && first > third){
    console.log(first)
    }
    else if (second > first && second > third){
		console.log(second)
		}
		else if (third > second && third > first){
		console.log(third)
		}

