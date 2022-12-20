//  Написать программу, которая вычисляет сумму чисел от 1 до n. Значение n вводится с клавиатуры.
// Проверить число n на корректность (чтобы это было число, чтобы оно не было меньше 1, чтобы это было не null).


let nNumber = prompt('Enter a number');
let sum = 0;

if (nNumber === null) {
    alert('you are cancelled')
}else {
    nNumber = Number(nNumber);

if (isNaN(nNumber) || nNumber < 1) {
    alert('enter a number');
   
}else {
    for(let i = 1; i <= nNumber; i++){
        sum += i;             
    }
    alert(`${sum}`);
}
}

//  Написать программу, которая выводит среднее
// арифметическое n чисел введенных пользователем.
// Ввод чисел прекращается
// тогда, когда нажали «отмена», после чего выводится
// среднее арифметическое.

// let numberCount = 0;
// let sum = 0; 
// for(let i = 0; ;) {
//     let nNumber = prompt ('enter a number');
//     if( nNumber === null) {
//         break;
//     }
//     nNumber++;
//     nNumber--;
//     sum += nNumber;
//     numberCount++;
     
// }
// console.log(sum/numberCount);
    

// Написать программу, которая выводит на экран
// двузначные числа, которые делятся на 4, но не
// делятся на 6.


//  for(let i = 20; i < 100 ; i++){
//             if( i % 4 === 0 && i % 6 != 0 ){

//                 console.log(i);
//             }

//  }


//   Написать программу, которая определяет количество
// положительных, отрицательных чисел и нулей. В
// начале программы, пользователь самостоятельно
// задает какое количество чисел будет вводить, затем
// вводит сами числа.
// Пример вывода:
// «Положительных: 2 шт.
// Отрицательных: 5 шт.
// Нулей: 3 шт.»

// let numberCount = +prompt('enter the number of numbers');
// let positiveNumber = 0;
// let negativeNumber = 0;
// let zeroNumber = 0;

// for ( let i = 0; i < numberCount; i++) {
//     let nNumber = +prompt('Enter'+' ' + numberCount + ' ' + 'different numbers');
//     if( nNumber > 0) {
//         positiveNumber++;
//     }else if( nNumber < 0) {
//         negativeNumber++
//     }else {
//         zeroNumber++
//     }
// }
// console.log(`positiveNumber = ${positiveNumber}`)
// console.log(`negativeNumber = ${negativeNumber}`)
// console.log(`zeroNumber = ${zeroNumber}`)
