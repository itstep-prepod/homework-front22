// Дан массив объектов

const arr = [
  { a: 2, b: 1 },
  { a: 55, b: 12 },
  { a: 95, b: 7 },
];

// Используя ТОЛЬКО методы массивов (циклы запрещены):
// 1. Вывести в консоль 'its valid', если во всех объектах поле a > b, вывести 'its invalid' если хотя бы в одном объекте a<=b

// *******VARIANT I*******

function validArr(obj) {
  return obj.a > obj.b;
}
arr.every(validArr) === false
  ? console.log("It is invalid!")
  : console.log("It is valid!");

// *******VARIANT II*******

function validArr() {
  let i = 0;
  arr.forEach((obj) => {
    if (obj.a > obj.b) {
      i++;
    }
  });
  i === arr.length
    ? console.log("It is valid!")
    : console.log("It is invalid!");
}

validArr(arr);

// 2. На основе массива arr, создать массив объектов у которых поле b возведено в квадрат
// пример:
// const arr = [
//   { a: 2, b: 1 },
//   { a: 5, b: 144 },
//   { a: 95, b: 49 },
// ];

function getSecondSqr() {
  arr.forEach((obj) => {
    obj.b *= obj.b;
    console.log(obj);
  });
}

getSecondSqr();

// 3. С помощью метода/методов взять все поля a и b и последовательно поместить их в массив
// пример получившегося массива: [2,1,5,12,95,7]
// можно делать копию

function makeArrFromObj(arr) {
  let newArr = [];
  let i = 0;
  arr.forEach((obj) => {
    newArr[i] = obj.a;
    newArr[i + 1] = obj.b;
    i += 2;
  });
  return newArr;
}

console.log(makeArrFromObj(arr));

// ***********************BLOK II***************************

const arr = ["john", "valerchik", "peter", "evlampij"];

// 1.  создать массив имен с большой буквы (map)
// [???, ???, ???, ???]

function getCaitalLetter() {
  let arrCapLet = arr.map((item) => item[0].toUpperCase() + item.slice(1));
  return arrCapLet;
}

console.log(getCaitalLetter());

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

function carRegion() {
  const result = arrCars.filter((item) =>
    item.adress.region.some((item) => item === "minsk")
  );
  return result;
}

console.log(carRegion());

// 2.2 просуммировать общую стоимость авто по наивысшей цене

function getMaxCarPrice() {
  var initialValue = 0;
  const result = arrCars.reduce(
    (sum, item) => sum + item.specs.price.hight,
    initialValue
  );
  return result;
}

console.log(getMaxCarPrice());

// 2.3 найти хотя бы одно авто мощность двигателя которого больше 500

function carPowerfull() {
  const result = arrCars.filter((item) => item.specs.engine.power > 500);
  return result;
}

console.log(carPowerfull());

// 2.4 найти самое дешевое авто по наименьшей цене

function getMinPriceCar() {
  let minPriceModelCar = arrCars[0].model;

  const minPriceCar = arrCars.reduce((minPrice, item) => {
    if (item.specs.price.low < minPrice) {
      minPriceModelCar = item.model;
      return (minPrice = item.specs.price.low);
    } else {
      return minPrice;
    }
  }, arrCars[0].specs.price.low);

  console.log(
    "The cheapest car is " +
      minPriceModelCar +
      " at a price of " +
      minPriceCar +
      "$."
  );
}

getMinPriceCar();

// ***************************************************************************************************************
// ***************************************************************************************************************

// 1. Напишите функцию isEmptyObj(), которая проверяет пуст
// объект или нет. Если объект пуст, функция вернет true, если в
// объекте есть хотя бы одно поле, функция вернет false.

const person = {
  a: 2,
};

function isEmptyObj(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

console.log(isEmptyObj(person));

// 2.Создайте объект shtuchki. Добавьте в объект поля shtuchka1:
// 200, shtuchka2: 521, shtuchka3: 113, shtuchka4: 314, shtuchka5:
// 871. Напишите программу, которая выведет на экран
// наибольшую штучку (программа должна быть универсальна
// и выводить наибольшую штучку даже если поменяются
// значения)

const shtuchki = {
  shtuchka1: 200,
  shtuchka2: 521,
  shtuchka3: 113,
  shtuchka4: 314,
  shtuchka5: 871,
};

function getMaxItem(obj) {
  let arrNumber = [];
  let i = 0;
  for (let key in obj) {
    arrNumber[i] = obj[key];
    i++;
  }
  return Math.max(...arrNumber);
}

console.log(getMaxItem(shtuchki));

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

function getDublleNumber(obj) {
  for (let key in obj) {
    if (!isNaN(obj[key])) {
      obj[key] *= 2;
    }
  }
  return obj;
}

console.log(getDublleNumber(student));
