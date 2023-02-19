// Дан массив объектов

const arr = [
  {a: 2, b: 1},
  {a: 5, b: 12},
  {a: 95, b: 7}
]
// Используя ТОЛЬКО методы массивов (циклы запрещены):
// 1. Вывести в консоль 'its valid', если во всех объектах поле a > b,
// вывести 'its invalid' если хотя бы в одном объекте a<=b

const compareArr = arr.every((item) => item.a > item.b)
	? "its valid"
	: "its invalid";

console.log(compareArr);

// 2. На основе массива arr, создать массив объектов у которых поле b возведено в квадрат
// пример:
// const arr2 = [
//   {a: 2, b: 1},
//   {a: 5, b: 144},
//   {a: 95, b: 49}
// ]

const doubles = arr.map(({a, b}) => ({a: a, b: b * b}));

console.log(doubles);

// 3. С помощью метода/методов взять все поля a и b и последовательно поместить их в массив
// пример получившегося массива: [2,1,5,12,95,7]
// можно делать копию

const transformArr = arr.map((item) => [item.a, item.b]);

console.log(transformArr);

const successArr = transformArr.flat();

console.log(successArr);

// 1.  создать массив имен с большой буквы (map)
// [???, ???, ???, ???]

const originalArr = ['john', 'valerchik', 'peter', 'evlampij'];

const transformArr = originalArr.map(n => n[0].toUpperCase() + n.slice(1).toLowerCase());

console.log(transformArr);

// 2.
const car = {
  model: "tesla",
  adress: {
    country: {
      city: {
        name: "gomel",
        street: {
          name: "pushkina",
          number: 2,
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
          number: 2,
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
          number: 2,
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

function searchRegionCar({ adress: { region } }, regionName) {
  return region.some((item) => item === regionName);
};

const regionCar = arrCars.filter((item) => searchRegionCar(item, "minsk"));
const regionCarModel = regionCar.map((item) => item.model);

console.log(regionCarModel);

// 2.2 просуммировать общую стоимость авто по наивысшей цене

const generalCostCar = arrCars.reduce(
  (sum, item) => sum + item.specs.price.hight,
  0
);

console.log(generalCostCar);

// 2.3 найти хотя бы одно авто мощность двигателя которого больше 500

const searchPowerCar = arrCars.filter(
  (item) => item.specs.engine.power > 500
);

const desiredPowerCar = searchPowerCar.map((item) => item.model);

console.log(desiredPowerCar);

// 2.4 найти самое дешевое авто по наименьшей цене

let minPriceCar;

const searchMinPriceCar = arrCars.reduce((minPrice, item) => {
if (item.specs.price.low < minPrice || minPriceCar === undefined) {
	minPriceCar = item.model;
	return (minPrice = item.specs.price.low);
} else {
	return minPrice;
}
}, 0);

console.log(minPriceCar + " price low " + searchMinPriceCar);