// const good1= 'apple';
// const good2= 'potato';
// const good3= 'orange';
// const good4= 'pepper';
// const good5= 'cucumber';

// const cart = ["apple", "potato", "orange", "pepper", "cucumber"];
// let cart2 =['apple', 'potato', 'orange', 'pepper', 'cucumber'];

// console.log(cart[2]); //"orange"

// cart[2] = "lapot"; мутация массива
// console.log(cart);

// console.log(cart.length); //длина массива
// console.log(cart[cart.length-1]); //последний элемент массива в [любое вычисление]

// cart[cart.length] = "banana";
// cart[cart.length] = "kolbasa";
// console.log(cart);

// const cart = ["apple", "potato", "orange", "pepper", "cucumber"];

// console.log(typeof cart);

// const userCart = cart;

// userCart[0] = 'samsung'

// console.log(userCart);
// console.log(cart);

// двуумерный массив

// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(arr[1][0]);

// const cart = ["apple", "potato", "orange", "pepper", "cucumber"];

// for (let i = 0; i < cart.length; i++) {
//   console.log(`i bought ${cart[i]}`);
// }

// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

// 1. Дан массив [2,5,6,7,9]. С помощью цикла вывести эти
// числа на экран по очереди.

// const arr = [2, 5, 6, 7, 9];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// 2. Дан массив [2,5,6,7,9]. С помощью цикла вывести эти
// числа на экран в обратном порядке.

// const arr = [2, 5, 6, 7, 9];
// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }

// 3. Создать массив из 10ти элементов и вывести на
// экран сумму всех элементов массива.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sumNumber = 0;
// for (let i = 0; i < arr.length; i++) {
//   sumNumber += arr[i];
// }
// console.log(sumNumber);

// 4. Найти среднее арифметическое значение
// элементов массива, которые стоят на четных местах.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sumNumber = 0;
// let numberI = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 === 0) {
//     sumNumber += arr[i];
//     numberI++;
//   }
// }
// let arithmetic = sumNumber / numberI;
// console.log(arithmetic);

// 5. Создать массив, элементы которого равны
// элементам исходного массива, но с
// противоположными знаками. (Длина исходного
// массива должна быть не меньше 10ти элементов).

// const arr = [1, -2, -3, 4, -5, 6, -7, 8, 9, 10];
// const resultArr = [];
// for (let i = 0; i < arr.length; i++) {
//   resultArr[i] = -arr[i];
// }
// console.log(arr);
// console.log(resultArr);

// 6. Создать пустой массив. С помощью цикла заполнить массив последовательными нечетными
// числами начиная с единицы. (Количество элементов
// массива: 8)

// const resultArr = [];
// let number = 1;
// for (let i = 0; i < 8; i++) {
//   resultArr[i] = number;
//   number += 2;
// }
// console.log(resultArr);

// 7. Создать пустой массив.С помощью цикла создать массив, каждый элемент
// которого равен квадрату своего номера.

const resultArr = [];
let number = 0;
for (let i = 0; i < 11; i++) {
  resultArr[i] = i * i;
}
console.log(resultArr);

// 8. . Создать массив из 10 чисел. Вывести на экран
// количество четных чисел из этого массива

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let numberI = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     numberI++;
//   }
// }
// console.log(numberI++);

// 9. Создать массив из 10 чисел. Вывести на экран
// наибольшее число из этого массива.

// const arr = [1, 2, 3, 4, 5, 6, 57, 8, 9, 10];
// let maxNumber = Math.max.apply(null, arr);
// console.log(maxNumber);
