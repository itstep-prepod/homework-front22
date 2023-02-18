// 3. Дан объект:
// student { math: 5, biology: 3, language: 2, isOboltus: ‘yes’ }.
// Напишите программу, которая умножит все ЧИСЛОВЫЕ (и
// только числовые) значения на 2 и перезапишет каждое
// свойство объекта (числового типа).
const student = {
  math: 5,
  biology: 3,
  language: 2,
  isOboltus: "yes",
};

const numbersMultiplicationFunction = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
  return obj;
};

console.log(numbersMultiplicationFunction(student));

// Дан массив объектов

// const arr = [
//   {a: 2, b: 1},
//   {a: 5, b: 12},
//   {a: 95, b: 7}
// ]
// Используя ТОЛЬКО методы массивов (циклы запрещены):

// 1. Вывести в консоль 'its valid', если во всех объектах поле a > b, вывести 'its invalid' если хотя бы в одном объекте a<=b
const arrObj = [
  { a: 2, b: 1 },
  { a: 5, b: 12 },
  { a: 95, b: 7 },
];

const objectValidityFunction = (arr) => {
  let count = 0;
  arr.forEach((item) => {
    if (item.a <= item.b) {
      count++;
    }
  });

  return count >= 1 ? console.log("its invalid") : console.log("its valid");
};

objectValidityFunction(arrObj);

// 2. На основе массива arr, создать массив объектов у которых поле b возведено в квадрат
// пример:
// const arr2 = [
//   {a: 2, b: 1},
//   {a: 5, b: 144},
//   {a: 95, b: 49}
// ]

const arr = [
  { a: 2, b: 1 },
  { a: 5, b: 12 },
  { a: 95, b: 7 },
];

const resultOfExponentiation = arr.map(({ a, b }) => {
  return { a: a, b: b ** 2 };
});
console.log(resultOfExponentiation);

// 3. С помощью метода/методов взять все поля a и b и последовательно поместить их в массив
// пример получившегося массива: [2,1,5,12,95,7]
// можно делать копию
const arr2 = [
  { a: 2, b: 1 },
  { a: 5, b: 12 },
  { a: 95, b: 7 },
];

const arrNumbers = [];

arr2.forEach((item) => {
  arrNumbers.push(item.a);
  arrNumbers.push(item.b);
});

console.log(arrNumbers);

// 1.  создать массив имен с большой буквы (map)
// [???, ???, ???, ???]

// const arr = [
//     'john', 'valerchik', 'peter', 'evlampij'
// ];

const arrString = ["john", "valerchik", "peter", "evlampij"];

const res = arrString.map((item) => item[0].toUpperCase() + item.substring(1));
console.log(res);

// 2.
const car = {
  model: "tesla",
  adress: {
    country: {
      city: {
        name: "gomel",
        street: {
          name: "pushkina",
          numbre: 2,
        },
      },
    },
    region: ["gomel", "brest", "minsk"],
  },
  specs: {
    price: {
      low: 2000,
      mid: 3000,
      hight: 5000,
    },
    engine: {
      power: 400,
      lowPower: 100,
    },
  },
};

const car2 = {
  model: "lada",
  adress: {
    country: {
      city: {
        name: "gomel",
        street: {
          name: "pushkina",
          numbre: 2,
        },
      },
    },
    region: ["minsk", "grodno", "eremino"],
  },
  specs: {
    price: {
      low: 100,
      mid: 2000,
      hight: 2500,
    },
    engine: {
      power: 200,
      lowPower: 100,
    },
  },
};

const car3 = {
  model: "bmw",
  adress: {
    country: {
      city: {
        name: "boston",
        street: {
          name: "pushkina",
          numbre: 2,
        },
      },
    },
    region: ["new york", "berlin", "bacelona"],
  },
  specs: {
    price: {
      low: 100000,
      mid: 150000,
      hight: 200000,
    },
    engine: {
      power: 1000,
      lowPower: 500,
    },
  },
};

const arrCars = [car, car2, car3];

// 2.1 отфильтровать авто так чтобы в результирующий массив вошли
// только машины из региона минск

const carsFromMinsk = (arr) => {
  function carSearchFromMinsk(arr) {
    return arr.adress.region.some((el) => el === "minsk");
  }
  return arr
    .filter(carSearchFromMinsk)
    .map((el) => el.model)
    .join(" и ");
};

console.log(carsFromMinsk(arrCars));

// 2.2 просуммировать общую стоимость авто по наивысшей цене

const theSumOfTheMaximumValueOfTheCar = arrCars.reduce(
  (sum, item) => sum + item.specs.price.hight,
  0
);

const result = theSumOfTheMaximumValueOfTheCar;

console.log(result);

// 2.3 найти хотя бы одно авто мощность двигателя которого больше 500
const carWithMaximumEnginePower = arrCars.filter((item) => {
  if (item.specs.engine.power > 500) {
    console.log(item.model);
  }
});

// 2.4 найти самое дешевое авто по наименьшей цене
let arrLowCarPrice = [];

const cycle = arrCars.forEach((item) =>
  arrLowCarPrice.push(item.specs.price.low)
);

const lowCarPrice = (arrLowCarPrice = Math.min(...arrLowCarPrice));

const minimumPriceModelCar = arrCars.filter((item) => {
  if (item.specs.price.low === lowCarPrice) {
    console.log(item.model);
  }
});
