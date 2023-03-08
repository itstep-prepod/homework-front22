// 3. Создать функцию classNameEditor(), которая
// принимает строку с названием класса и добавляет
// его в класс, если вторым параметром было
// передано true, если вторым параметром было
// передано false, то функция пытается удалить из
// класса переданное имя. Если удаление не было
// совершено, то просто вернуть строку с названием
// класса. Функция должна возвращать текущее
// название класса.

// classNameEditor() // ''
// classNameEditor('test', true) // 'test'
// classNameEditor('test', true) // 'test'
// classNameEditor('smth', true) // 'test smth'
// classNameEditor('test', false) // 'smth'
// classNameEditor('test', false) // 'smth'

function makeClassNameEditor() {
  let className = [];
  return function (element, mean) {
    if (element !== undefined && mean === true) {
      if (className.includes(element) === false) {
        className.push(element);
      }
    }
    if (element !== undefined && mean === false) {
      if (className.includes(element) === true) {
        className.splice(className.indexOf(element), 1);
      }
    }
    return className.join(" ");
  };
}

const classNameEditor = makeClassNameEditor();
console.log(classNameEditor());
console.log(classNameEditor("test", true));
console.log(classNameEditor("test", true));
console.log(classNameEditor("smth", true));
console.log(classNameEditor("test", false));
console.log(classNameEditor("test", false));
