// Даны 2 массива:
let people1 = [
  "Samuel",
  "Jack",
  "Thomas",
  "Henry",
  "Leo",
  "Connor",
  "David",
  "Ryan",
];
let people2 = [
  "Connor",
  "Stanley",
  "Leo",
  "Albert",
  "Owen",
  "Oliver",
  "Ethan",
  "Thomas",
];

// 1. Пользователь вводит имя, если это имя есть в массиве people1, добавьте это имя в конец people2.
// let userEnteredName = prompt("enter the name you are interested in");
// for (i = 0; i <= people1.length; i++) {
//   if (userEnteredName === people1[i]) {
//     people2.push(userEnteredName);
//   }
// }
// console.log(people2);

// 2. Пользователь вводит имя, если это имя есть в массиве people2, удалите это имя из массива.
// let userEnteredName = prompt("enter the name you are interested in");
// for (i = 0; i <= people2.length; i++) {
//   if (userEnteredName === people2[i]) {
//     const deletedName = people2.indexOf(userEnteredName);
//     people2.splice(deletedName, 1);
//   }
// }
// console.log(people2);

// 3. Создайте массив только из тех имен, которые совпадают в обоих массивах.
// let combinedArrayNames = people1.concat(people2);
// let matchingArrayNames = combinedArrayNames.filter(
//   (item, index) => combinedArrayNames.indexOf(item) !== index
// );
// console.log(matchingArrayNames);

// 4. Объедините массивы people1 и people2 так, чтобы в получившемся массиве не было одинаковых имен.
// let combinedArrayNames = people1.concat(people2);
// let filterArrayNames = combinedArrayNames.filter(
//   (item, index) => combinedArrayNames.indexOf(item) === index
// );
// console.log(filterArrayNames);

// 5. Отсортируйте получившийся массив по алфавиту
// filterArrayNames.sort();
// console.log(filterArrayNames);
