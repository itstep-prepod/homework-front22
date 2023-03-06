// Даны 2 массива:
// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];

// 1. Пользователь вводит имя, если это имя есть в массиве people1, добавьте это имя в конец people2.
// 2. Пользователь вводит имя, если это имя есть в массиве people2, удалите это имя из массива.
// 3. Создайте массив только из тех имен, которые совпадают в обоих массивах.
// 4. Объедините массивы people1 и people2 так, чтобы в получившемся массиве не было одинаковых имен.
// 5. Отсортируйте получившийся массив по алфавиту

// 1. Пользователь вводит имя, если это имя есть в массиве people1, добавьте это имя в конец people2.

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

peopleName = prompt("enter the name... ");

function sortName(people1, people2, peopleName) {
  if (people1.includes(peopleName) === true) {
    people2.push(peopleName);
  } else {
    alert("This name is not in the array people1");
  }
  return people2;
}

console.log(sortName(people1, people2, peopleName));

// 2. Пользователь вводит имя, если это имя есть в массиве people2, удалите это имя из массива.

peopleName = prompt("enter the name... ");

function deleteName(people2, peopleName) {
  if (people2.includes(peopleName) === true) {
    people2.splice(people2.indexOf(peopleName), 1);
  } else {
    alert("This name is not in the array people2");
  }
  return people2;
}

console.log(deleteName(people2, peopleName));

// 3. Создайте массив только из тех имен, которые совпадают в обоих массивах.

function commonName(people1, people2) {
  const commonNameArray = [];
  for (let i = 0; i < people1.length; i++) {
    if (people2.includes(people1[i]) === true) {
      commonNameArray.push(people1[i]);
    }
  }
  return commonNameArray;
}

console.log(commonName(people1, people2));

// 4. Объедините массивы people1 и people2 так, чтобы в получившемся массиве не было одинаковых имен.

function differentName(people1, people2) {
  let differentNameArray = [];
  for (let i = 0; i < people1.length; i++) {
    if (people2.includes(people1[i]) === true) {
      people2.splice(people2.indexOf(people1[i]), 1);
    }
    differentNameArray = people1.concat(people2);
  }
  return differentNameArray;
}

console.log(differentName(people1, people2));

// 5. Отсортируйте получившийся массив по алфавиту

function alphabeticalSorting(Array) {
  const alphabeticalSortingArray = Array.sort();
  return alphabeticalSortingArray;
}

console.log(alphabeticalSorting(differentName(people1, people2)));
