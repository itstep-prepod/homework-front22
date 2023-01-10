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

let userName = prompt("enter searching name");

let searchingName = people1.filter((item) => item === userName);

let resultListOfNames = people2.concat(searchingName);

console.log(resultListOfNames);

// 2. Пользователь вводит имя, если это имя есть в массиве people2, удалите это имя из массива.

let userName2 = prompt("enter searching name 2");
let indexOfSearchingName = people2.indexOf(userName2);

let secondListUserName = people2.concat();

if (indexOfSearchingName !== -1) {
  secondListUserName.splice(indexOfSearchingName, 1);
}

console.log(secondListUserName);

// 3. Создайте массив только из тех имен, которые совпадают в обоих массивах.

function searchCoincidenceSameName(nameFromList, listNamesArray) {
  for (let i = 0; i < listNamesArray.length; i++) {
    if (nameFromList === listNamesArray[i]) {
      return nameFromList;
    }
  }
}

let listCoincidenceNames = people1.filter((item) =>
  searchCoincidenceSameName(item, people2)
);

console.log(listCoincidenceNames);

// 4. Объедините массивы people1 и people2 так, чтобы в получившемся массиве не было одинаковых имен.

function searchCoincidenceSameNameForDelet(
  nameFromListForDelet,
  listNamesArray
) {
  for (let i = 0; i < listNamesArray.length; i++) {
    if (nameFromListForDelet === listNamesArray[i]) {
      return;
    }
  }
  return nameFromListForDelet;
}

let listNotMatchingNamesFirst = people1.filter((item) =>
  searchCoincidenceSameNameForDelet(item, people2)
);
let listNotMatchingNamesSecond = people2.filter((item) =>
  searchCoincidenceSameNameForDelet(item, people1)
);

let resultListNotMatchingNames = listNotMatchingNamesFirst.concat(
  listNotMatchingNamesSecond
);
console.log(resultListNotMatchingNames);

// 5. Отсортируйте получившийся массив по алфавиту

resultListNotMatchingNames.sort();
console.log(resultListNotMatchingNames);
