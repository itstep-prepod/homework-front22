// 3. напишите функцию которая возвращает среднее
// арифметическое ЛЮБОМУ количеству переданных ей чисел
// (не должно быть массивом)

function calculateAverage() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  let average = sum / arguments.length;
  return average;
}

console.log(calculateAverage(1, 2, 3, 4, 5));
