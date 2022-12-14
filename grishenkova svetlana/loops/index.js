# Grishenkova Svetlana




// 1. Написать программу, которая вычисляет сумму чисел от 1 до n. Значение n вводится с клавиатуры.
// Проверить число n на корректность (чтобы это было число, чтобы оно не было меньше 1, чтобы это было не null).


// let sum = 0;
// let n = prompt('enter number');
// for( let i = 0; i <= n; i++) {
//   sum += i;  
// if (i === 'number' && i !== null){} 
// }  
// console.log(sum);


// 2. Написать программу, которая определяет количество
// положительных, отрицательных чисел и нулей. В
// начале программы, пользователь самостоятельно
// задает какое количество чисел будет вводить, затем
// вводит сами числа.
// Пример вывода:
// «Положительных: 2 шт.
// Отрицательных: 5 шт.
// Нулей: 3 шт.»

// let positiveNumber = 0;
// let negativeNumber = 0;
// let zeroNumber = 0;
// let loop = 1;   
// let n = prompt('Количество чисел');    
// for (let num = 0; loop <= n; loop++){
//       num = prompt('Введите число');
//     if (num > 0){
//     positiveNumber++;    
//     } else if (num < 0){
//     negativeNumber++;    
//     } else if (num == 0){
//     zeroNumber++;     
//     } else if (loop === n){
//     break;
//     }
// }
// console.log('положительных:' + ' ' + positiveNumber + ' ' + 'шт.');
// console.log('отрицательных:' + ' ' + negativeNumber + ' ' + 'шт.');
// console.log('нулей:' + ' ' + zeroNumber + ' ' + 'шт.');


// 3. Написать программу, которая выводит на экран
// двузначные числа, которые делятся на 4, но не
// делятся на 6.

// for( let i = 10; i < 100; i++) {  
//   if (i % 4 == 0 && (i % 6 != 0 )){     
//     i = i++;
//     console.log(i);    
//     continue;    
//   }  
// }



// 4. Написать программу, которая выводит среднее
// арифметическое n чисел введенных пользователем.
// Ввод чисел прекращается
// тогда, когда нажали «отмена», после чего выводится
// среднее арифметическое.



         // Не работает! 


let sumNumber = 0;     //сумма чисел
let numbers = 0;     //кол-во чисел
let sum = 0;      
let n = 0;
for (; n <= 0 || n > 0;) {
  n = prompt('enter number');
  if (n != null && n === 'number'){  
    sumNumber = sumNumber + n;
    numbers = numbers++;
    sum = sumNumber / numbers;
  } if (n == null) {
      break;
    }
}
console.log(sum); 