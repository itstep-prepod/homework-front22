// // 1.Дан случайный массив чисел. С помощью метода .filter()
// // отфильтруйте массив так, чтобы в новый массив вошли
// // только четные двухзначные числа из исходного.

// const arrNumbers1 = [2, 15, 22, 31, 48, 256];

// const arrEvenNumbers1 = arrNumbers1.filter((item, index, arr) => {
//   return item > 9 && item < 100 && item % 2 === 0;
// });

// console.log(
//   "Task 1. The array of two-digit even numbers include " + arrEvenNumbers1
// );

// // // 2. Дан случайный массив имен. Выяснить есть ли в этом
// // // массиве «Семён» с помощью метода .some().

// const persons = ["John", "Peter", "David", "Janet", "Semyen"];

// const isSemyenHere = persons.some((item, index, arr) => item === "Semyen");

// if (isSemyenHere === true) {
//   console.log("Task 2. Name Semyen is present in the array.");
// } else console.log("Task 2. Name Semyen is not in the array.");

// // // 3. Дан массив случайных чисел. С помощью метода
// // // .reduce() просуммировать только четные числа из этого
// // // массива.

// const arrNumbers2 = [2, 15, 22, 31, 48, 256];

// const sumEvenNumbers2 = arrNumbers2.reduce((acc, item, index, arr) => {
//   if (item % 2 === 0) {
//     return acc + item;
//   } else {
//     return acc;
//   }
// }, 0);

// console.log(
//   "Task 3. The sum of the even numbers of the array is " + sumEvenNumbers2
// );

// // // 4. Дан массив случайных чисел, с помощью метода .reduce()
// // // найдите наименьший элемент этого массива

// const arrNumbers3 = [15, 2, 15, 22, 31, 48, 1, 256];

// const minNumbers3 = arrNumbers3.reduce((min, item, index, arr) => {
//   if (min > item) {
//     return item;
//   } else {
//     return min;
//   }
// });

// console.log("Task 4. The minimum of the array numbers is " + minNumbers3);

// // 5. Пользователь вводит 10 случайных значений. Каждое
// // значение необходимо записать в массив. С помощью
// // метода .every() проверить были ли все введенные
// // пользователем данные – числами.

// const arrRandom = new Array(10).fill("Enter an array element ");
// const arrUser = arrRandom.map((item) => +prompt(item));
// console.log(arrUser);

// const isAllNumbers = arrUser.every((item, index, arr) => {
//   if (item === null) {
//     alert("you cancelled!");
//   } else {
//     return !isNaN(item);
//   }
// });

// if (isAllNumbers === true) {
//   console.log("Task 5. All the values you entered are digits.");
// } else {
//   console.log("Task 5. Not all the values you entered are digits.");
// }

// // 6. Создать массив случайных чисел, с помощью .map() вернуть массив, в котором каждое число
// // массива возведено в квадрат.

// const arrNumbers4 = [1, 2, 3, 4, 5, 6, 7];
// console.log(arrNumbers4);

// const sqNumber = arrNumbers4.map((item, index, arr) => {
//   return item * item;
// });
// console.log(sqNumber);

// // 7. создать случайный двумерный массив (разной длины) из 8 элементов. Обработать массив
// // reduce() и вернуть тот массив сумма элементов которого
// // наибольшая.

// const arrBig = [
//   [1, 3, 5],
//   [6, 5],
//   [2, 7, 9, 3],
//   [4, 8, 5],
//   [1, 7, 5, 6, 2, 3],
//   [2, 8, 4],
//   [7, 3, 5],
//   [8, 3, 1, 4],
// ];

// const maxArr = arrBig.reduce((sumArrPrev, sumArrNext) => {
//   if (
//     sumArrPrev.reduce((acc, item) => acc + item) >
//     sumArrNext.reduce((acc, item) => acc + item)
//   ) {
//     return sumArrPrev;
//   } else {
//     return sumArrNext;
//   }
// });
// console.log(maxArr);

// // 8. Дан массив [1,1,1,4,4,5,1,6,6,74,74,74,3]. Написать функцию,
// // которая вернет массив только из тех чисел, которые
// // повторялись в исходном. Массив, который возвращает
// // функция [1,4,6,74].

const arr = [1, 1, 1, 4, 4, 5, 1, 6, 6, 74, 74, 74, 3];

const sameItemArray = arr.reduce((acc, item, index) => {
  if (
    arr.filter((acc) => acc === item).length > 1 &&
    arr.indexOf(item) === index
  ) {
    return acc.concat(item);
  } else {
    return acc;
  }
}, []);

console.log(sameItemArray);
