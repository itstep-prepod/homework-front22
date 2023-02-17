// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];

// 1. Пользователь вводит имя, если это имя есть в массиве people1, добавьте это имя в конец people2.
// 2. Пользователь вводит имя, если это имя есть в массиве people2, удалите это имя из массива.
// 3. Создайте массив только из тех имен, которые совпадают в обоих массивах.
// 4. Объедините массивы people1 и people2 так, чтобы в получившемся массиве не было одинаковых имен.
// 5. Отсортируйте получившийся массив по алфавиту

// 1. Пользователь вводит имя, если это имя есть в массиве people1, добавьте это имя в конец people2.

// prompt('enter name');

// let meaning = [];
// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];

// let name = 'Samuel';
// let result = people1.lastIndexOf(name);
// while (result != -1) {
//     meaning.push(result);
//     result = (result > 0 ? people1.lastIndexOf(name, result - 1) : -1);
// }
//     console.log(meaning);

// people2.push(name);

// console.log(people2);


// 2. Пользователь вводит имя, если это имя есть в массиве people2, удалите это имя из массива.

// prompt('enter name');

// let meaning = [];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];

// let name = 'Connor';
// let result = people2.lastIndexOf(name);
// while (result != -1) {
//     meaning.push(result);
//     result = (result > 0 ? people2.lastIndexOf(name, result - 1) : -1);
// }
//     console.log(meaning);

// people2.splice(0, 1);

// console.log(people2);


// 3. Создайте массив только из тех имен, которые совпадают в обоих массивах.

// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];

// let repeatingName = people1.slice(2, 5, 6);

// console.log(repeatingName);

// 4. Объедините массивы people1 и people2 так, чтобы в получившемся массиве не было одинаковых имен.

// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];

// let people3 = people1.concat('Stanley', 'Albert', 'Owen', 'Oliver','Ethan');

// console.log(people3);

// 5. Отсортируйте получившийся массив по алфавиту

// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];

// let result = people1.concat(people2);

// console.log(result);

// result.sort();










