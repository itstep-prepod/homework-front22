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

// let fedot = prompt("enter  you age");
// let mitrofan = prompt("enter  you age");
// let ageDiferenceFedot = fedot - mitrofan;
// let ageDiferenceMitrofan = mitrofan - fedot;

// if (fedot === null || mitrofan === null) {
//   alert("you cancelled!");
//   fedot = Number(fedot);
//   mitrofan = Number(mitrofan);
// } else {
//   if (isNaN(fedot) || isNaN(mitrofan)) {
//     alert("enter numbers!");
//   } else if (fedot > mitrofan) {
//     console.log(`Федот старше Митрофана на ${ageDiferenceFedot}`);
//   } else if (mitrofan > fedot) {
//     console.log(`Митрофан старше Федота на  ${ageDiferenceMitrofan}`);
//   } else if (mitrofan === fedot) {
//     console.log("«Федот и Митрофан одного возраста");
//   }
// }

// // 2. Пользователь вводит ТРИ числа
// // вывести в консоль наибольшее из них

// let numberX = prompt("enter number");
// let numberY = prompt("enter number");
// let numberZ = prompt("enter number");
// if (numberX > numberY && numberX > numberZ) {
//   console.log(NumberX);
// }
// if (numberY > numberZ && numberY > numberX) {
//   console.log(NumberY);
// }
// if (numberZ > numberX && numberZ > numberY) {
//   console.log(numberZ);
// }
// 1. Написать программу, которая вычисляет сумму чисел от 1 до n. Значение n вводится с клавиатуры.
// Проверить число n на корректность (чтобы это было число, чтобы оно не было меньше 1, чтобы это было не null).

// let number_n = prompt("Enter a number > 0");
// number_n = Number(number_n);
// let summa = 0;
// if (number_n === NaN || number_n < 0 || number_n === null) {
//   console.log("Enter a number > 0");
// }
// for (i = number_n; 0 < i; i--) {
//   i = Number(i);
//   summa = summa + i;
//   console.log(`сумма от 1 до number_n ${summa}`);
// }

// 2. Написать программу, которая определяет количество
// положительных, отрицательных чисел и нулей. В
// начале программы, пользователь самостоятельно
// задает какое количество чисел будет вводить, затем
// вводит сами числа.
// Пример вывода:
// «Положительных: 2 шт.
// Отрицательных: 5 шт.
// Нулей: 3 шт.»

// let numberTimesInput = prompt("Enter you numbers");
// numbersPlus = 0;
// numbersMinus = 0;
// numbersZero = 0;

// for (let x = 1; x <= numberTimesInput; x++) {
//   let = you_Numbers = prompt("Enter you numbers");
//   if (you_Numbers > 0) {
//     numbersPlus++;
//   }
//   if (you_Numbers < 0) {
//     numbersMinus++;
//   }
//   if (you_Numbers === 0) {
//     numbersZero++;
//   }
// }
// console.log("положительных:" + numbersPlus);
// console.log("отрицательных:" + numbersMinus);
// console.log("нулей:" + numbersZero);

// 3. Написать программу, которая выводит на экран
// двузначные числа, которые делятся на 4, но не
// делятся на 6.

// for (let x = 1; x < 30; x++) {
//   if (x % 4 === 0 && x % 6 !== 0) {
//     console.log(x);
//   }
// }

// 4. Написать программу, которая выводит среднее
// арифметическое n чисел введенных пользователем.
// Ввод чисел прекращается
// тогда, когда нажали «отмена», после чего выводится
// среднее арифметическое.

// let sum = 0;
// let numbers_Times = 0;

// for (let i = 0; ; ) {
//   let number_user = prompt("enter  you numbers");
//   if (number_user === null) {
//     break;
//   }
//   number_user = +number_user;
//   sum += number_user;
//   numbers_Times++;
// }
// console.log("average" + sum / numbers_Times);
//
