// 3. Создать функцию classNameEditor(),
// которая принимает строку с названием класса и добавляет его в класс, если вторым параметром было передано true,
// если вторым параметром было передано false, то функция пытается удалить из класса переданное имя.
// Если удаление не было совершено, то просто вернуть строку с названием класса.
// Функция должна возвращать текущее название класса.
// classNameEditor() // ''
// classNameEditor('test', true) // 'test'
// classNameEditor('test', true) // 'test'
// classNameEditor('smth', true) // 'test smth'
// classNameEditor('test', false) // 'smth'
// classNameEditor('test', false) // 'smth'

let classString = [];
const classNameEditor = (className, isAdd) => {
  if (isAdd) {
    if (!classString.includes(className)) {
      classString.push(className);
    }
  } else {
    classString = classString.filter((item) => item !== className);
  }

  return classString.join();
};

console.log(classNameEditor("test", true));
console.log(classNameEditor("test", true));
console.log(classNameEditor("smth", true));
console.log(classNameEditor("test", false));
console.log(classNameEditor("test", false));
