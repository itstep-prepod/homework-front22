// 1. Создать программу в которой сравнивается возраст
// двух человек (Федота и Митрофана).
// Если возраст Федота больше чем возраст Митрофана,
// то должно выводится сообщение, в котором указана
// разница в возрасте: «Федот старше Митрофана на 3».
// Если возраст Митрофана больше, то выводится такое
// сообщение: «Митрофан старше Федота на 5».
// Если возраст обоих человек один и тот же, то
// выводится такое сообщение: «Федот и Митрофан
// одного возраста».

let firstHuman = prompt("Enter your Name")
let secondHuman = prompt("Enter the Name of your opponent ");
let ageFistHuman =+prompt(`${firstHuman} enter your age`);
let ageSecondHuman =+prompt(`${secondHuman} enter your age`);
let ageDifference = ageFistHuman-ageSecondHuman;

if(ageDifference>0){
    console.log(`${firstHuman} is ${ageDifference} older than ${secondHuman}`);
} else if (ageDifference<0){
    console.log(`${secondHuman} is ${-ageDifference} older than ${firstHuman}`);
} else{
    console.log(`Age of ${firstHuman} & ${secondHuman} are equal`);
}


// 2. Пользователь вводит ТРИ числа
// вывести в консоль наибольшее из них

let firstNumber = +prompt("Enter first number");
let secondNumber =+prompt('Enter second number');
let thirdNumber = +prompt('Enter third number');

if (firstNumber>=secondNumber&&firstNumber>=thirdNumber){
    console.log(firstNumber);
} else if (secondNumber>=firstNumber&&secondNumber>=thirdNumber){
    console.log(secondNumber);
} else if(thirdNumber>=firstNumber&&thirdNumber>=secondNumber){
    console.log(thirdNumber);
}
