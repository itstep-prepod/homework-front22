// 3. Создать функцию classNameEditor(), которая
// принимает строку с названием класса и добавляет
// его в класс, если вторым параметром было
// передано true, если вторым параметром было
// передано false, то функция пытается удалить из
// класса переданное имя. Если удаление не было
// совершено, то просто вернуть строку с названием
// класса. Функция должна возвращать текущее
// название класса.

function createClassNameEditor() {
  let classNames = [];
  return function (strClassName, boolVar) {
    if (strClassName === undefined || boolVar === undefined) {
      classNames[classNames.length] = "";
    } else {
      if (!classNames.includes(strClassName)) {
        if (boolVar) {
          classNames[classNames.length] = strClassName;
        }
      } else if (boolVar) {
      } else {
        indexClassName = classNames.indexOf(strClassName);
        classNames.splice(indexClassName, 1);
      }
    }
    return console.log(classNames.join(" "));
  };
}

const classNameEditor = createClassNameEditor();

classNameEditor();
classNameEditor("test", true);
classNameEditor("test", true);
classNameEditor("test", true);
classNameEditor("smth", true);
classNameEditor("smth", true);
classNameEditor("test", false);
classNameEditor();
classNameEditor("test", false);
classNameEditor("test", false);
classNameEditor("smth", false);
classNameEditor("smth", false);
classNameEditor("smth");
classNameEditor();
//classNameEditor();
//classNameEditor("test", false);
