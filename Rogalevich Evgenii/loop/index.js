// 1. Написать программу, которая вычисляет сумму чисел от 1 до n. Значение n вводится с клавиатуры.
// Проверить число n на корректность (чтобы это было число, чтобы оно не было меньше 1, чтобы это было не null).

let userNumber = prompt("Введите число n");

if (userNumber === null) {
  alert("Вы вышли из программы");
} else if (userNumber == 0) {
  alert("Число n должно быть больше 0");
} else if (!isNaN(userNumber)) {
  userNumber = Number(userNumber);
  console.log(`OK LET WORK! User number is ${userNumber}`);
} else {
  alert("Введите число");
}
let step = 0;
let result = 0;
while (step < userNumber) {
  step++;
  result = result + step;
}
alert(`Сумма чисел от 1 до ${userNumber} : ${result}`);

// 2. Написать программу, которая определяет количество
// положительных, отрицательных чисел и нулей. В
// начале программы, пользователь самостоятельно
// задает какое количество чисел будет вводить, затем
// вводит сами числа.
// Пример вывода:
// «Положительных: 2 шт.
// Отрицательных: 5 шт.
// Нулей: 3 шт.»

const userAmount = prompt("Какое количество чисел Вы собираетесь определить?");
let userNumbers = [];
for (let i = 0; i < userAmount; i++) {
  userNumbers[i] = Number(prompt(`Введите ${i + 1} число`));
}
let positiveNumber = 0;
let negativeNumber = 0;
let nullNumber = 0;

for (let i = 0; i < userNumbers.length; i++) {
  if (userNumbers[i] > 0) {
    positiveNumber++;
  } else if (userNumbers[i] < 0) {
    negativeNumber++;
  } else {
    nullNumber++;
  }
}
alert(`Положительных: ${positiveNumber} шт.
Отрицательных: ${negativeNumber} шт.
Нулей: ${nullNumber} шт.`);

// 3. Написать программу, которая выводит на экран
// двузначные числа, которые делятся на 4, но не
// делятся на 6.

let userResult = [];
let i = 0;
for (n = 10; n <= 99; n++) {
  if (n % 4 === 0 && n % 6 !== 0) {
    i++;
    userResult[i] = n;
  }
}
alert(userResult);

// 4. Написать программу, которая выводит среднее
// арифметическое n чисел введенных пользователем.
// Ввод чисел прекращается
// тогда, когда нажали «отмена», после чего выводится
// среднее арифметическое.

let someNumber = [];
let averageResult = 0;

for (i = 0; ; i++) {
  someNumber[i] = prompt(`Введите число ${i + 1}`);
  if (someNumber[i] === null) {
    break;
  } else {
    someNumber[i] = Number(someNumber[i]);
    averageResult = averageResult + someNumber[i];
  }
}
alert(
  `Среднее арифметическое введенных чисел: ${
    averageResult / (someNumber.length - 1)
  }`
);
