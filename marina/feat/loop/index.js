// 1. Написать программу, которая вычисляет сумму чисел от 1 до n. Значение n вводится с клавиатуры.
// Проверить число n на корректность (чтобы это было число, чтобы оно не было меньше 1, чтобы это было не null).

// let checkingNumber = prompt("Enter a number > 0");

// if (!isNaN(checkingNumber)&&
//     checkingNumber!==null&&
//     +checkingNumber>=1){
//         let sum = 0;
//         checkingNumber=+checkingNumber;
//         for(let i=1;i<=checkingNumber;i++){
//             sum = sum + i;            
//         }
//         console.log(`The Sum from 1 to ${checkingNumber} is ${sum}`);
//     } else {
//         console.log('enter a number > 0');
//     }

// 2. Написать программу, которая определяет количество
// положительных, отрицательных чисел и нулей. В
// начале программы, пользователь самостоятельно
// задает какое количество чисел будет вводить, затем
// вводит сами числа.
// Пример вывода:
// «Положительных: 2 шт.
// Отрицательных: 5 шт.
// Нулей: 3 шт.»

// let numberQuantity = +prompt('Enter ammount of entering numbers');
// let evenNumberCounter = 0;
// let oddNumberCounter = 0;
// let zeroNumberCounter = 0;
// for(let i = 1; i <= numberQuantity; i++){
//     let verifyingNumber=+prompt(`Enter the ${i} number`);
//     if (verifyingNumber===0){
//         zeroNumberCounter++;
//     } else if(verifyingNumber % 2 === 0){
//         evenNumberCounter++;
//     }else{
//         oddNumberCounter++;
//     }
// }
// console.log(`the ammount of even numbers is ${evenNumberCounter}`);
// console.log(`the ammount of odd numbers is ${oddNumberCounter}`);
// console.log(`the ammount of zero numbers is ${zeroNumberCounter}`);

// 3. Написать программу, которая выводит на экран
// двузначные числа, которые делятся на 4, но не
// делятся на 6.

// for (let i = 20;;i++){
//     if (i % 4 == 0 &&
//         i % 6 != 0){
//             console.log(i);
//     }
// }

// 4. Написать программу, которая выводит среднее
// арифметическое n чисел введенных пользователем.
// Ввод чисел прекращается
// тогда, когда нажали «отмена», после чего выводится
// среднее арифметическое.

let numberCounter = 0;
let sum = 0;
for(let i = 0;;){
    let enteringNumber = prompt('enter a number');
    if (enteringNumber === null){
        break;
    }
    enteringNumber=+enteringNumber;
    sum +=enteringNumber;
    numberCounter++;
}
console.log ('the average is '+ sum/numberCounter);