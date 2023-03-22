// 1. Создать класс Programmer, инстанс которого обладает полями name, stack (массив строк, типа
// 	[«Python», «PHP», «Java»]), и методом code (который перебирает массив stack и выводит
// 	сообщения вида «Oleg is coding on Python», «Oleg is coding on PHP», «Oleg is coding on Java»).
// 	Метод code должен храниться в прототипе класса.
// 	Переопределить метод toString у инстансов Programmer, чтобы они выводили сообщение вида
// 	«Hello my name is Oleg»
class Programmer {
  constructor(name, stack) {
    this.name = name;
    this.stack = stack;
  }

  code() {
    this.stack.forEach((el) => console.log(`${this.name} is coding on ${el}`));
  }

  toString() {
    console.log(`Hello my name is ${this.name}`);
  }
}

const programmerOleg = new Programmer("Oleg", ["Python", "PHP", "Java"]);

programmerOleg.code();
programmerOleg.toString();

// 2. Создать массив из 10 случайных инстансов Programmer, и отфильтровать его с помощью метода
// filter так, чтобы в результирующий массив попали только те Programmer, у которы длина массива
// stack больше 4.

class Programmer {
  constructor(name, stack) {
    this.name = name;
    this.stack = stack;
  }
}

const arrProgrammer = [
  new Programmer("Vladislav", [
    "Objective-C",
    "TypeScript",
    "Rust",
    "Java",
    "Dart",
  ]),
  new Programmer("Alex", [
    "Assembly language",
    "SQL",
    "JavaScript",
    " Visual Basic",
  ]),
  new Programmer("Petya", ["Ruby", "Swift", "C#", "C++", "PHP"]),
  new Programmer("Valerchik", ["Python", "Java", "C#", "Visual Basic", "Ruby"]),
  new Programmer("Vovchik", ["1C", "PHP", "C++", "Objective-C", "Python"]),
  new Programmer("Oleg", ["Python", "PHP", "Java"]),
  new Programmer("Artem", ["JavaScript"]),
  new Programmer("Ivan", ["Scal", "Kotlin", "Elixir"]),
  new Programmer("Timofey", ["Scala", "Haskell"]),
  new Programmer("Andrey", ["Java", "Golang", "Scal"]),
];

function filter(arr) {
  return arr.filter((programmer) => programmer.stack.length > 4);
}

console.log(filter(arrProgrammer));

// 4. Создать конструктор Car, который принимает параметры
// model, color, price. Конструктор должен возвращать объект в
// котором присутствуют вышеназванные поля со значениями.
// Каждый представитель класса Car должен обладать методом
// run() который выводит сообщение вида : MODEL + “ ” +
// COLOR + ” is running”.

class Car {
  constructor(model, color, price) {
    this.model = model;
    this.color = color;
    this.price = price;
  }

  run() {
    console.log(`${this.model} ${this.color} for ${this.price} is running`);
  }
}

const car1 = new Car("mercedes", "black", "20.000$");

car1.run();
console.log(car1);

// 5. Создать конструктор Book, с помощью этого конструктора
// создать массив из 8 книг (объектов). Каждая книга должна
// представлять из себя объект, в котором есть три поля:
// author, bookName, pageAmount.
// Создать функцию getBiggerBook(), которая принимает
// массив книг и возвращает ОДНУ книгу с наибольшим
// количеством страниц

class Book {
  constructor(author, bookName, padgeAmount) {
    this.author = author;
    this.bookName = bookName;
    this.padgeAmount = padgeAmount;
  }

  static getBiggerBook(arr) {
    return arr.reduce((it1, it2) =>
      it1.padgeAmount > it2.padgeAmount ? it1 : it2
    );
  }
}

const arrBook = [
  new Book("Михаил Булгаков", "Мастер и Маргарита", 448),
  new Book("Николай Гоголь", "Мёртвые души", 248),
  new Book("Лев Толстой", "Война и мир", 1225),
  new Book("Александр Пушкин", "Евгений Онегин", 272),
  new Book("Николай Гоголь", "Ревизор", 160),
  new Book("Фёдор Достоевский", "Братья Карамазовы", 840),
  new Book("Антон Чехов", "Палата №6", 320),
  new Book("Александр Пушкин", "Дубровский", 224),
];

console.log(Book.getBiggerBook(arrBook));

// 7. Создать класс Shop, инстанс которого обладает полем
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

class ShopItem {
  constructor(itemName, price, amount, isOnSale = false) {
    this.itemName = itemName;
    this._price = price;
    this._amount = amount;
    this.isOnSale = isOnSale;
  }

  set price(price) {
    if (price < 0) {
      throw new Error("Цена товара не может быть меньше нуля");
    }
    this._price = price;
  }

  get price() {
    return this._price;
  }

  set amount(amount) {
    if (amount < 0) {
      throw new Error("Количество не может быть меньше нуля");
    }
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }
}

class Clothes extends ShopItem {
  constructor(
    itemName,
    price,
    amount,
    size,
    material,
    color,
    isOnSale = false
  ) {
    super(itemName, price, amount, isOnSale);
    this._size = size;
    this.material = material;
    this.color = color;
  }

  set size(size) {
    const Sizes = ["S", "M", "L", "XL"];
    if (!Sizes.includes(size)) {
      throw new Error(
        `Такого размера нет ${size}. Доступные размеры ${Sizes.join(", ")}`
      );
    }
    this._size = size;
  }

  get size() {
    return this._size;
  }

  static changeColor(cloth, color) {
    cloth.color = color;
  }
}

class TV extends ShopItem {
  constructor(
    itemName,
    price,
    amount,
    diagonal,
    withSmartTV,
    isOnSale = false
  ) {
    super(itemName, price, amount, isOnSale);
    this._diagonal = diagonal;
    this._withSmartTV = withSmartTV;
  }

  get diagonal() {
    return this._diagonal;
  }

  get withSmartTV() {
    return this._withSmartTV;
  }
}

class Shop {
  constructor(shopItems = []) {
    this.shopItems = shopItems;
    this.totalProfit = 0;
  }

  setSales(discountPercent) {
    this.shopItems.forEach((item) => {
      item.isOnSale = true;
      item.price = item.price - (item.price * discountPercent) / 100;
    });
  }

  purchaseItem(itemName) {
    const item = this.shopItems.find((item) => item.itemName === itemName);
    if (item) {
      if (item.amount === 0) {
        console.log(`Товар ${itemName} закончился`);
      } else {
        item.amount--;
        this.totalProfit += item.price;
      }
    } else {
      console.log(`Такого товара нет: ${itemName}`);
    }
  }
}

const tv1 = new TV("Samsung", 1000, 5, 55, true);
const tv2 = new TV("LG", 800, 3, 50, false);
const cloth1 = new Clothes("Футболка", 30, 10, "M", "хлопок", "чёрный");
const cloth2 = new Clothes("Шорты", 50, 7, "L", "хлопок", "серый");

const shop = new Shop([tv1, tv2, cloth1, cloth2]);

// cloth1.size = 'XL';
// console.log(cloth1);

// Clothes.changeColor(cloth1, 'красный');
// console.log(cloth1);
// console.log(cloth1.amount);

// shop.purchaseItem('Футболка');
// shop.purchaseItem('Футболка');
// shop.purchaseItem('Samsung');
// shop.setSales(10);
// shop.purchaseItem('кепка');
// shop.purchaseItem('Футболка');
// shop.purchaseItem('Samsung');
// console.log(shop.totalProfit);
// console.log(tv1);
// console.log(tv2);
// console.log(cloth1);
// console.log(shop.totalProfit);
