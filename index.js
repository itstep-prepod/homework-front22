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

let ageMitrofan = prompt('Enter age Mitrofan');
let ageFedot = prompt('Enter age Fedot');

ageMitrofan =Number(ageMitrofan);
ageFedot = Number(ageFedot);

if(ageFedot > ageMitrofan){
   console.log('Федот старше Митрофана на 3')
} else if (ageFedot < ageMitrofan){
   console.log('Митрофан старше Федота на 5')
}else {
   console.log('Федот и Митрофан одного возраста')
}

// 2. Пользователь вводит ТРИ числа
// вывести в консоль наибольшее из них

// let aNumber = prompt('enter 1st number')
// let bNumber = prompt('enter 2nd number')
// let cNumber = prompt('enter 3rd number')

// aNumber = Number(aNumber)
// bNumber = Number(bNumber)
// cNumber = Number(cNumber)

// if (aNumber > bNumber){
//     console.log(aNumber);
// }else if(bNumber > cNumber ){
//    console.log(bNumber);
// } else {
//     console.log(cNumber);
//  } 