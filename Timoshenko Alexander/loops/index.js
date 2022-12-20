// 1. Написать программу, которая вычисляет сумму чисел от 1 до n. Значение n вводится с клавиатуры.
// Проверить число n на корректность (чтобы это было число, чтобы оно не было меньше 1, чтобы это было не null).

// let numberEntry = +prompt("введите число");
// let sum = 0;

// if (isNaN(numberEntry) || numberEntry <= 0) {
//   alert("введите корректное число");
// }
// for (let startNumber = 1; startNumber <= numberEntry; startNumber++) {
//   sum = sum + startNumber;
// }
// console.log(sum);
// ------------------------------------------------------------------------------
// 2. Написать программу, которая определяет количество
// положительных, отрицательных чисел и нулей. В
// начале программы, пользователь самостоятельно
// задает какое количество чисел будет вводить, затем
// вводит сами числа.
// Пример вывода:
// «Положительных: 2 шт.
// Отрицательных: 5 шт.
// Нулей: 3 шт.»

// let input = +prompt("введите количество чисел");
// let numberPos = 0;
// let numberNeg = 0;
// let numberZero = 0;

// for (let i = 0; i < input; i++) {
//   let number = +prompt("введите число");
//   console.log(number);
//   if (number > 0) {
//     numberPos++;
//   } else if (number < 0) {
//     numberNeg++;
//   } else {
//     numberZero++;
//   }
// }
// console.log(numberPos);
// console.log(numberNeg);
// console.log(numberZero);
// ------------------------------------------------------------------------------
// 3. Написать программу, которая выводит на экран
// двузначные числа, которые делятся на 4, но не
// делятся на 6.

// for (let doubleFigures = 10; doubleFigures <= 99; doubleFigures++) {
//   if (doubleFigures % 4 === 0 && doubleFigures % 6 !== 0) {
//     console.log(doubleFigures);
//   }
// }
// ------------------------------------------------------------------------------

// 4. Написать программу, которая выводит среднее
// арифметическое n чисел введенных пользователем.
// Ввод чисел прекращается
// тогда, когда нажали «отмена», после чего выводится
// среднее арифметическое.

// let sum = 0;
// let amountOfNumbers = 0;
// let total = 0;

// while (true) {
//   let numberInput = prompt("введите число");
//   if (!numberInput && numberInput !== 0) break;
//   amountOfNumbers++;
//   sum = sum + numberInput;
//   total = sum / amountOfNumbers;
// }
// console.log(total);
