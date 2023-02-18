// 1. Напишите функцию isEmptyObj(), которая проверяет пуст
// объект или нет. Если объект пуст, функция вернет true, если в
// объекте есть хотя бы одно поле, функция вернет false.

// const obj = {
//     a: '3'

// }

// function isEmptyObj(){
//     for (let key in obj) {
//         return (false);
//     } 
//       return (true);
    
// }
//  console.log(isEmptyObj(obj));




// 2.Создайте объект shtuchki. Добавьте в объект поля shtuchka1:
// 200, shtuchka2: 521, shtuchka3: 113, shtuchka4: 314, shtuchka5:
// 871. Напишите программу, которая выведет на экран
// наибольшую штучку (программа должна быть универсальна
// и выводить наибольшую штучку даже если поменяются
// значения)

// const shtuchki = {
//   shtuchka1: 200,
//   shtuchka2: 521,
//   shtuchka3: 113,
//   shtuchka4: 314,
//   shtuchka5: 871,

// }

// function maxNumber(obj){
//   let maxNum = 0;
//   for (let key in obj) {
//    if (obj[key] > maxNum ) {
//       maxNum = obj[key]
//    }  
       
//   } 
//   return maxNum
// }

  
// console.log(maxNumber(shtuchki));



// 3. Дан объект:
// student { math: 5, biology: 3, language: 2, isOboltus: ‘yes’ }.
// Напишите программу, которая умножит все ЧИСЛОВЫЕ (и
// только числовые) значения на 2 и перезапишет каждое
// свойство объекта (числового типа).

// const student = { 
//   math: 5, 
//   biology: 3, 
//   language: 2,
//   isOboltus: 'yes' }

//   function mNumber(obj){
//     for(let key in obj){
//       if(typeof obj[key] === 'number'){
//         obj[key] *= 2;
//       }
//     }
//     return obj
//   }
// console.log(mNumber(student))





// Дан массив объектов

// const arr = [
//   {a: 2, b: 1},
//   {a: 5, b: 12},
//   {a: 95, b: 7}
// ];

// Используя ТОЛЬКО методы массивов (циклы запрещены):
// 1. Вывести в консоль 'its valid', если во всех объектах поле a > b, вывести 'its invalid' если хотя бы в одном объекте a<=b

// const result = arr.filter(({a}, {b}) => {
//   if (a > b){
//     console.log ('its valid')
//   }else {
//     console.log ('its invalid')
//   }
// })
// 2. На основе массива arr, создать массив объектов у которых поле b возведено в квадрат
// пример:
// const arr2 = [
//   {a: 2, b: 1},
//   {a: 5, b: 144},
//   {a: 95, b: 49}
// ]
// const arr2 = arr.map(({a,b}) => {
//   return {a:a,  b: b * b}

// })
// console.log(arr2)


// 3. С помощью метода/методов взять все поля a и b и последовательно поместить их в массив
// пример получившегося массива: [2,1,5,12,95,7]
// можно делать копию


// const arr3 = arr.map(({a}) => a);
// const arr4 = arr.map(({b}) => b);
// const result = arr3.concat(arr4)
// console.log(result)


// const arr = [
//     'john', 'valerchik', 'peter', 'evlampij'
// ];

// 1.  создать массив имен с большой буквы (map)
// const arr2 = arr.map(item => item[0].toUpperCase() + item.slice(1));


// console.log(arr2)
// 2. 
const car = {
    model: 'tesla',
    adress: {
        country: {
            city: {
                name: 'gomel',
                street: {
                    name: 'pushkina',
                    numbre: 2
                }
            }
        },
        region: ['gomel','brest', 'minsk']
    },
    specs: {
        price: {
            low: 2000,
            mid: 3000,
            hight: 5000
        },
        engine: {
            power: 400,
            lowPower: 100
        }
    }
  };
  
  const car2 = {
    model: 'lada',
    adress: {
        country: {
            city: {
                name: 'gomel',
                street: {
                    name: 'pushkina',
                    numbre: 2
                }
            }
        },
        region: ['grodno', 'eremino', 'minsk']
    },
    specs: {
        price: {
            low: 100,
            mid: 2000,
            hight: 2500
        },
        engine: {
            power: 200,
            lowPower: 100
        }
    }
  };
  
  const car3 = {
    model: 'bmw',
    adress: {
        country: {
            city: {
                name: 'boston',
                street: {
                    name: 'pushkina',
                    numbre: 2
                }
            }
        },
        region: ['new york', 'berlin', 'bacelona']
    },
    specs: {
        price: {
            low: 100000,
            mid: 150000,
            hight: 200000
        },
        engine: {
            power: 1000,
            lowPower: 500
        }
    }
  };
  
  
   const arrCars = [car, car2, car3];
  
  // 2.1 отфильтровать авто так чтобы в результирующий массив вошли
  // только машины из региона минск
  // const arrCars = [car, car2, car3];
  // function isFromMinskRegion(car){
  //   const carRegion = (car)['adress']['region']
  //   const minskWasFound = carRegion.some((car) => {
  //         return car === 'minsk'
        
  //     })
  //     return minskWasFound
  
  // }
  // const result = arrCars.filter(isFromMinskRegion)
  // console.log(result)
  // 2.2 просуммировать общую стоимость авто по наивысшей цене
  // const arrCars = [car, car2, car3];
  
  // const result = arrCars.reduce ((sum, car ) => {
  //   return sum + car.specs.price.hight
  
  // }, 0)
  // console.log(result)
  
  // 2.3 найти хотя бы одно авто мощность двигателя которого больше 500
  
  // const result = arrCars.find((car) => {
  //   return car.specs.engine.power > 500
  // })
  // console.log(result)
  
  
  // 2.4 найти самое дешевое авто по наименьшей цене
  
  
  const result = arrCars.find(car => car.specs.price.low < 1000)
  
    console.log(result)