// function foo (a, b) { // a = 2, b = 3
//     return a - b;
// }

// function shmoo (a, b) {
//     return a * b;
// }

// function bar (cb) { // callback
//     const result = cb(2, 3);
//     return result + a;
// }

// console.log( bar(foo) );
// console.log( bar(shmoo) );
// console.log( bar((a,b) => a + b) );

// test(arr);
// test([2,3,5]);
// test(arr.slice());

// function myCallback (arr) {
//     console.log(arr.slice(2,5));
// //     // if (item !== 'Peter' && item !== 'David') {
// //     //     console.log(item);
// //     // }
// // }

// const persons = ["John", "Peter", "David", "Janet"];

// persons.forEach((item, index, arrays) => console.log(arrays));
// persons.forEach(myCallback);

// .map()
// const persons = ["John", "Peter", "David", "Janet"];

// const mrPersons = persons.map((item, index, arr) => {
//   return "Mr. " + item;
// });

// console.log(mrPersons);

// .find()
// const persons = ["John", "Peter", "David", "Janet"];

// const item = persons.find((item, index, arr) => item === "Peter");

// console.log(item);

// .some()
// const persons = ["John", "Peter", "David", "Janet", "David"];

// const isSomeLengthFour = persons.some((item, index, arr) => item.length === 5);

// console.log(isSomeLengthFour);

// .every()
// const persons = ["John", "Peter", "David", "Janet"];

// const isAllLengthOverThree = persons.every((item, index, arr) => {
//   return item.length === 5;
// });

// console.log(isAllLengthOverThree);

// .filter()
// const persons = ["John", "Peter", "David", "Janet"];

// const longPersonNames = persons.filter((item, index, arr) => item.length === 6);

// console.log(longPersonNames);

// const persons = ['John', 'Peter', 'David', 'Janet'];

// const index = persons.findIndex(
//     (item, index, arr) => item === 'David'
// );

// console.log(index);

// .reduce()
// const persons = ["John", "Peter", "David", "Janet"];

// const lettersAmount = persons.reduce((sum, item) => sum + item.length, 0);

// console.log(lettersAmount);

// const compose = [
//     (a) => a + ' smth',
//     (a) => 'Hello ' + a,
//     (a) => a + ' !!!'
// ];

// const result = compose.reduceRight((str, f) => f(str), 'John');

// console.log(result);

// const x = (a) => a + ' smth';
// const y = (a) => 'Hello ' + a;
// const z = (a) => a + ' !!!';

// x(y(z('John')))

// const str = persons.reduce(
//     (acc, item, index, arr) => {
//         return acc + ' and ' + item;
//     }
// );

// console.log(str);
