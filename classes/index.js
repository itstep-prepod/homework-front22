// # Grishenkova Svetlana
// ### homework

// 1. Создать класс Programmer, инстанс которого обладает полями name, stack (массив строк, типа
//     [«Python», «PHP», «Java»]), и методом code (который перебирает массив stack и выводит
//     сообщения вида «Oleg is coding on Python», «Oleg is coding on PHP», «Oleg is coding on Java»).
//     Метод code должен храниться в прототипе класса.
//     Переопределить метод toString у инстансов Programmer, чтобы они выводили сообщение вида
//     «Hello my name is Oleg»
  
class Programmer {
  constructor(name) {
    this.name = name;

  }
  code(...stack) {
    for (let i = 0; i < stack.length; i++) {
      this.stack = stack[i];
      console.log(`${this.name} is coding on ${this.stack}`)
    }
  }
}

let programmer = new Programmer('Oleg');
programmer.code('PHP', 'Python', 'Java', 'JavaScript')


Programmer.prototype.toString = function () {
  return console.log(`Hello my name is ${this.name}`);
}

let programmer2 = new Programmer('Oleg');
programmer2.toString()


 //     2.   Создать массив из 10 случайных инстансов Programmer, и отфильтровать его с помощью метода
//     filter так, чтобы в результирующий массив попали только те Programmer, у которы длина массива
//     stack больше 4.

class Person extends Programmer {
  constructor(name) {
    super(name);
  }
  code(...stack) {
    stack.filter(item => {
      if (item.length > 4) {
        console.log(`${this.name} is coding on ${item}`)
      }
    })
  }
}
const person = new Person('Lola');
const person2 = new Person('Lol')
const person3 = new Person('Zola')
const person4 = new Person('John')
const person5 = new Person('Krot')
person.code('Python')
person2.code('PHP')
person3.code('JavaScript')
person4.code('Java')
person5.code('Python')
  
 // 3. Напишите функцию, которая вычисляет длину линий в
 // стандартной двухмерной системе координат. Координаты
 // начала и конца линий должны храниться в объектах.
 //  Создайте три линии.
 //  Вычислите их длины с помощью функции
 //  Проверьте, могут ли три линии сформировать
 // треугольник
 // Помните:
 // Длину линии можно найти по теореме Пифагора.
 // Стороны могут сформировать треугольник если длина
 // каждой стороны треугольника должны быть меньше суммы
 // длин остальных сторон.
  
 // 4. Создать конструктор Car, который принимает параметры
 // model, color, price. Конструктор должен возвращать объект в
 // котором присутствуют вышеназванные поля со значениями.
 // Каждый представитель класса Car должен обладать методом
 // run() который выводит сообщение вида : MODEL + “ ” +
 // COLOR + ” is running”.
  
//     5. Создать конструктор Book, с помощью этого конструктора
//     создать массив из 8 книг (объектов). Каждая книга должна
//     представлять из себя объект, в котором есть три поля:
//     author, bookName, pageAmount.
//     Создать функцию getBiggerBook(), которая принимает
//     массив книг и возвращает ОДНУ книгу с наибольшим
//     количеством страниц
  
class Book {
  constructor(bookName, author, pageAmount) {
    this.bookName = bookName;
    this.author = author;
    this.pageAmount = pageAmount
  }
  static getBiggerBook(...args) {
    return console.log(args.reduce((acc, item) => {
      if (acc.pageAmount > item.pageAmount) {
        return acc;
      }
      return item;
    }, 0))
  }
}
let book1 = new Book('Martin Eden', 'Jack London', 305)
let book2 = new Book('Animal Farm', 'George Orwell', 65)
let book3 = new Book('Sapiens', 'Harari Yuval Noah', 512)
let book4 = new Book('JavaScript', 'David Flanagan', 712)
Book.getBiggerBook(book1, book2, book3, book4)

  //6. Создать класс Timer, инстанс которого запускает таймер и выводит в консоль
  //прошедшее время в секундах (1 2 3 4 5 и тд)
  //инстанс должен обладать методами .start() .stop() которые запускают и останавливают таймер
  //а также методом .reset() который сбрасывает таймер на 0.
 // С помощью Timer вы должны создать несколько таймеров и убедится в том, что они 
  //работают независимо друг от друга.
 // останавливайте таймер через некоторое время после запуска с помощью setTimeout()
  
  7.// Создать класс Shop, инстанс которого обладает полем
  // shopItems - массив объектов типа shopItem
  // У инстанса класса Shop должен быть метод setSales(discountPercent),
  // который устанавливает всем shopItem'ам isOnSale = true,
  // а также снижает цену на discountPercent процентов.
  // У инстанса также должен быть метод purchaseItem(itemName)
  // которое находит в массиве shopItems, необходимый shopItem и уменьшает его
  // количество на 1.
  // Если количество shopItem равно нулю, то нужно выбросить ошибку о том, что
  // айтемов больше нет в наличии. Обработайте эту ошибку и выведите в консоль
  // сообщение что айтем нельзя заказать тк он закончился.
  // У инстанса Shop также должно быть поле totalProfit - число (общее
  // количество заработанных денег), в которое складывается
  // цена каждого проданного айтема.
  
  class Shop {
    totalProfit = 0
    constructor(...shopItems) {
      this.shopItems = shopItems;
    }
    setSales(discountPercent) {
      this.discountPercent = discountPercent;
      this.onSale = true;
      this.shopItems.map(item => {
        item._price -= (item._price / 100) * this.discountPercent;
        return this.shopItems
      })
      return this.shopItems
    }   
    purchaseItem() {  
      "use strict";  
      try{
        this.shopItems.map((item) => {
        this.totalProfit += item._price;            
          item._amount--;            
          if(item._amount === 0) {
                throw new Error('This product is currently out of stock ');
                }     
        return this.shopItems
      })    
    }   catch (err) {    
        console.log(err)
        console.log('This product is unavailable and cannot be ordered at this time')
      }    
    }  
  }

  // Создать класс ShopItem, инстанс которого должен обладать полями
  // itemName - название товара
  // price - цена товара (не может быть меньше нуля, используйте сеттер)
  // amount - количество товара (не может быть меньше нуля, используйте сеттер)
  // isOnSale - булево значение
  
  class ShopItem {
    isOnSale = true;
    constructor(itemName, price, amount) {
      this.itemName = itemName;
      this._price = price;
      this._amount = amount;
    }
    set price(val) {
      if (val >= 0) {
        this._price = val;
      }
      return this._price = 0;
    }
    set amount(val) {
      if (val >= 0) {
        this._amount = val;
      }
    }
  }


  // Создать класс Clothes - который наследует от ShopItem
  // инстанс должен обладать дополнительными полями
  // size - строка характеризующая размер (может принимать значения только 'S', 'M', 'L', 'XL', обрабатывать
  // сеттером, иначе выбрасывать ошибку)
  // material - строка характеризующая материал
  // color - строка цвета
  // Класс Clothes, должен обладать статическим методом .changeColor(cloth, color)
  // который принимает инстанс этого класса и цвет, метод меняет инстансу цвет на color;
  
  class Clothes extends ShopItem {
    constructor(itemName, price, amount, size, material, color, ) {
      super(itemName, price, amount);
      this._size = size;
      this.material = material;
      this.color = color;
    }
    set size(val) {
      if (val === 'S' || val === 'M' || val === 'L' || val === 'XL') {
        this._size = val;
      } else {
        console.log('specified size does not exist');
      }
    }
    static changeColor(cloth, color) {
      cloth.color = color;
      return cloth;
    }
  }

  // Создать класс TV который наследует от ShopItem
  // инстанс должен обладать дополнительными полями
  // diagonal - число
  // withSmartTV - булево значение
  // Оба поля должны быть недоступны для изменения, но доступны для чтения
  // т.е. значения этих полей устанавливаются только в конструкторе, дальше сеттерами
  // запрещаем их изменять
  

  class TV extends ShopItem {
    _diagonal = 14;
    _withSmartTV = true;
    constructor(itemName, price, amount) {
      super(itemName, price, amount);
    }
    get diagonal() {
      return this._diagonal;
    }
    get withSmartTV() {
      return this._withSmartTV;
    }
  }

  // Создать инстанс Shop и прокинуть в него несколько инстансов TV и Clothes
  // проверить все методы на работоспособность

  const clothes = new Clothes('coat', 100, 10, 'XL', 'wool', 'green')
  const tv2 = new TV('lg', 75, 15)
  const tv3 = new TV('samsung', 144, 5)

  const shop = new Shop(clothes, tv2, tv3)

  const shopItem = new ShopItem(shop)
  shop.setSales(10)

  shop.purchaseItem()

  console.log(shop)

  console.log(Clothes.changeColor(clothes, 'black'))