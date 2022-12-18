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

const userNameFedot = +prompt("Федот введите свой возраст");
const userNameMitrofan = +prompt("Митрофан введите свой возраст");
const result = Math.abs(userNameFedot - userNameMitrofan);

if (userNameFedot > userNameMitrofan) {
  alert("Федот старше Митрофана на " + result);
} else if (userNameFedot < userNameMitrofan) {
  alert("Митрофан старше федота на " + result);
} else {
  alert("Федот и митрофан одного возраста");
}

// 2. Пользователь вводит ТРИ числа
// вывести в консоль наибольшее из них

const numberOne = +prompt("Введите первое число");
const numberTwo = +prompt("Введите втрое число");
const numberThree = +prompt("Введите третие число");

if (isNaN(numberOne) || isNaN(numberThree) || isNaN(numberThree)) {
  alert("введите числа");
} else if (numberOne > numberTwo && numberOne > numberThree) {
  console.log(numberOne);
} else if (numberTwo > numberOne && numberTwo > numberThree) {
  console.log(numberTwo);
} else if (numberThree > numberTwo && numberThree > numberOne) {
  console.log(numberThree);
} else {
  console.log("Числа равны");
}
