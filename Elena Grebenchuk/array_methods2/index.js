// 1.Дан случайный массив чисел. С помощью метода .filter()
// отфильтруйте массив так, чтобы в новый массив вошли
// только четные двухзначные числа из исходного.


// const arr = [12, 3, 14, 17, 6, 8, 10, 15];

// const  evenNumbers= arr.filter((item, index, arr) => {
//          return item >= 10 && item < 100 && item % 2 === 0 
         

// });
// console.log(evenNumbers)




// 2. Дан случайный массив имен. Выяснить есть ли в этом
// массиве «Семён» с помощью метода .some().

// let people = ['Ольга', 'Дмитрий', 'Семён','Олег','Александр'];

// const isSomeName = people.some((item, index, arr) => {
//     return item === 'Семён'
// }

// );
// console.log(isSomeName);



// 3. Дан массив случайных чисел. С помощью метода
// .reduce() просуммировать только четные числа из этого
// массива.

// const arr = [12, 3, 14, 17, 6, 8, 10, 15];
// const numbers = arr.filter((item, index, arr) => {
//     return  item % 2 === 0 })

// const evenNumbers = numbers.reduce(
//         (acc, item) =>  {

//            return acc + item 
//         0 
//         }
//     );
    
    
//     console.log(evenNumbers)


// 4. Дан массив случайных чисел, с помощью метода .reduce() 
// найдите наименьший элемент этого массива

// const arr = [12, 3, 14, 17, 6, 8, 10, 15];

// const numbers = arr.reduce((acc, item) => Math.min(acc, item))
//     console.log(numbers)

    
 

// 5. Пользователь вводит 10 случайных значений. Каждое
// значение необходимо записать в массив. С помощью
// метода .every() проверить были ли все введенные
// пользователем данные – числами.
 
// const arr = new Array(10).fill(1);
// const arr2 = arr.map((item) => +prompt('enter a number'))

// const newArray = arr2.every((item, index, arr) => {
   
//  return item  === !isNaN;

// })
// console.log(newArray)







// 6. Создать массив случайных чисел, с помощью .map() вернуть массив, в котором каждое число
// массива возведено в квадрат.

// const arr = [12, 3, 14, 17, 6, 8, 10, 15];
// const newArray = arr.map((item, index, arr) => {

//    return item * item;
// })
//  console.log(newArray)


// 7. создать случайный двумерный массив (разной длины) из 8 элементов. Обработать массив
// reduce() и вернуть тот массив сумма элементов которого
// наибольшая.

// const array = [
//     [2, 3, 7],
//     [4, 4, 5, 1, 1]
//     ]

// function amountNumber(num1, num2){
//     return num1 + num2
// }

// let newArr = array[0].reduce(amountNumber)  
// let newArr1 = array[1].reduce(amountNumber)  
// if( newArr > newArr1){
//     console.log(array[0])
// }else {
//     console.log(array[1])
// }

// 8. Дан массив [1,1,1,4,4,5,1,6,6,74,74,74,3]. Написать функцию,
// которая вернет массив только из тех чисел, которые
// повторялись в исходном. Массив, который возвращает
// функция [1,4,6,74].

const arr = [1,1,1,4,4,5,1,6,6,74,74,74,3];

let someNumber = arr.filter((item, index) => arr.indexOf(item) !==index)
console.log(someNumber)

let singleNumbers = someNumber.filter((item, index) => someNumber.indexOf(item) === index)
console.log(singleNumbers)