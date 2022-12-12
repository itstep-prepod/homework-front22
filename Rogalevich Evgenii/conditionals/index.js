// Задача 1. Создать программу в которой сравнивается возраст
// двух человек (Федота и Митрофана).
// Если возраст Федота больше чем возраст Митрофана,
// то должно выводится сообщение, в котором указана
// разница в возрасте: «Федот старше Митрофана на 3 ».
// Если возраст Митрофана больше, то выводится такое
// сообщение: «Митрофан старше Федота на 5».
// Если возраст обоих человек один и тот же, то
// выводится такое сообщение: «Федот и Митрофан
// одного возраста».

let ageFeador = Number(prompt("Введите возраст Федора"));
let ageMitrofan = Number(prompt("Введите возраст Митрофана"));
if (ageFeador > ageMitrofan) {
  alert(`Федот старше Митрофана на ${ageFeador - ageMitrofan}`);
} else if (ageFeador < ageMitrofan) {
  alert(`Митрофан старше Федота на ${ageMitrofan - ageFeador}`);
} else {
  alert("Федот и Митрофан одного возраста");
}

// Задача 2. Пользователь вводит ТРИ числа
// вывести в консоль наибольшее из них

let numberOne = Number(prompt("Введите первое число"));
let numberTwo = Number(prompt("Введите второе число"));
let numberThree = Number(prompt("Введите третье число"));
if (numberOne > numberTwo && numberOne > numberThree) {
  console.log(numberOne);
} else if (numberTwo > numberOne && numberTwo > numberThree) {
  console.log(numberTwo);
} else if (numberThree > numberOne && numberThree > numberTwo) {
  console.log(numberThree);
} else {
  console.log(numberOne);
}
