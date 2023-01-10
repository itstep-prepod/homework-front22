// 6. Дана строка
// const str = ‘Мама мыла раму’;


// Написать функцию toWash(str, thing);
// Где str - это строка в которой надо поменять последнее
// слово, а thing - это, то самое слово которое надо вставить
// в конец строки.
// Функция должна возвращать строку.
// Например:
// document.write( toWash(str, ’машину’) );
// // ‘Мама мыла машину’
// document.write( toWash(str, ’рябину’) );
// // ‘Мама мыла рябину’
// document.write( toWash(str, ‘картину’) );
// // ‘Мама мыла картину’

// const str = 'мама мыла раму';

// function toWash(str, thing){
//     const resultArr = str.split(' ');
//     resultArr.pop();
//     resultArr.push(thing);
//     return resultArr.join(' ');

// }
// console.log(toWash(str, 'машину'))
// console.log(toWash(str, 'картину'))

// Даны 2 массива:
// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];

// 1. Пользователь вводит имя, если это имя есть в массиве people1, добавьте это имя в конец people2.
// 2. Пользователь вводит имя, если это имя есть в массиве people2, удалите это имя из массива.
// 3. Создайте массив только из тех имен, которые совпадают в обоих массивах.
// 4. Объедините массивы people1 и people2 так, чтобы в получившемся массиве не было одинаковых имен.
// 5. Отсортируйте получившийся массив по алфавиту

// 1.  Пользователь вводит имя, если это имя есть в массиве people1, добавьте это имя в конец people2.

// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];

    
// let arr = prompt('enter a name');

// for (i = 0; i <=people1.length; i++){
   
//     if(arr === people1[i]){
//         people2.push(arr)
//     }

// }
// console.log(people2)
// 2. Пользователь вводит имя, если это имя есть в массиве people2, удалите это имя из массива.

// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];

    
// let arr = prompt('enter a name');

// for (i = 0; i <=people2.length; i++){
   
//     if(arr === people2[i]){
//        const result = people2.indexOf(arr);
//        people2.splice(result,1);
//     }
    

// }console.log(people2)


// 3. Создайте массив только из тех имен, которые совпадают в обоих массивах.
// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];
// let people3 = []

// for (let i = 0; i < people1.length; i++){
//     for (let j = 0; j < people2.length; j++){
//         if (people2[j] === people1[i]) {
           
//             people3.push(people1[i])

//         }
   
//     }
// }console.log(people3)


// 4.Объедините массивы people1 и people2 так, чтобы в получившемся массиве не было одинаковых имен.
// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];
// let people3 = []
// for (let i = 0; i < people1.length; i++){
//     if (people2.indexOf(people1[i]) === -1){
//         people3.push(people1[i])
//     }
//     if (people1.indexOf(people2[i]) === -1){
//         people3.push(people2[i])
//     }
    
  
// }console.log(people3)

// 5.Отсортируйте получившийся массив по алфавиту
let people3 =  ['Samuel', 'Jack', 'Stanley', 'Henry', 'Albert', 'Owen', 'Oliver', 'David', 'Ethan', 'Ryan'];


people3.sort();


console.log(people3)

