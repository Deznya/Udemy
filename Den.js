// массив дан к примеру от 1 до 100 в случайном порядке на языке джаваскрипт

const array = [77, 22, 56, 12, 34, 89, 45, ...]; // массив с числами от 1 до 100 в случайном порядке

// Деструктуризация первых 100 элементов массива
const [num1, num2, num3, ..., num100] = array;

// Теперь у нас есть доступ к каждому числу от 1 до 100 через отдельные переменные num1, num2, num3, ..., num100.
// Можно использовать эти переменные по своему усмотрению.

// Обрати внимание, что я использовал ... для обозначения остаточных элементов, так как это всего лишь пример, и вместо ... нужно указать все оставшиеся 100 элементов массива.

// а какие есть требования к деструктуризации?

// Извлечение определенных элементов: Можешь указать конкретные индексы элементов, которые ты хочешь извлечь из массива. 
// Например:

// const array = [10, 20, 30, 40, 50];
// const [firstElement, , thirdElement] = array;
console.log(firstElement);  // 10
console.log(thirdElement);  // 30

// Извлечение оставшихся элементов: Можешь использовать оператор "..." (spread) для извлечения оставшихся элементов массива. 
Например:

const array = [10, 20, 30, 40, 50];
const [firstElement, ...restElements] = array;
console.log(firstElement);     // 10
console.log(restElements);     // [20, 30, 40, 50]

// Извлечение значений с помощью значения по умолчанию: Можешь задать значения по умолчанию для элементов массива, которые не имеют соответствующих значений. 
Например:

const array = [10, 20];
const [firstElement, secondElement = 30, thirdElement = 40] = array;
console.log(firstElement);   // 10
console.log(secondElement);  // 20
console.log(thirdElement);   // 40 (значение по умолчанию)

// Использование деструктуризации в циклах: Можешь использовать деструктуризацию в циклах для извлечения элементов массива по мере его итерации. 
Например:

const array = [[1, 2], [3, 4], [5, 6]];

for (const [a, b] of array) {
  console.log(a, b);
}
// Вывод:
// 1 2
// 3 4
// 5 6

/////// objects//////////

// Извлечение конкретных свойств: Можешь указать конкретные свойства объекта, которые ты хочешь извлечь. 
Например:

const obj = { name: 'John', age: 30, city: 'New York' };
const { name, age } = obj;
console.log(name);  // 'John'
console.log(age);   // 30

/// Переименование извлеченных свойств: Можешь переименовать извлеченные свойства, присвоив им новые имена переменных. 

Например:

const obj = { name: 'John', age: 30, city: 'New York' };
const { name: personName, age: personAge } = obj;
console.log(personName);  // 'John'
console.log(personAge);   // 30

// Извлечение значений с помощью значения по умолчанию: Можешь задать значения по умолчанию для свойств объекта, которые не имеют соответствующих значений. 
Например:

const obj = { name: 'John', age: 30 };
const { name, age, city = 'Unknown' } = obj;
console.log(name);  // 'John'
console.log(age);   // 30
console.log(city);  // 'Unknown' (значение по умолчанию)

// Извлечение оставшихся свойств: Можешь использовать оператор "..." (rest) для извлечения оставшихся свойств объекта в новый объект. Например:
javascript:

const obj = { name: 'John', age: 30, city: 'New York', country: 'USA' };
const { name, age, ...rest } = obj;
console.log(name);  // 'John'
console.log(age);   // 30
console.log(rest);  // { city: 'New York', country: 'USA' }

// Если у тебя есть объект с 100 свойствами и ты хочешь выполнить деструктуризацию, то есть несколько способов сделать это. Вот несколько примеров:

// Извлечение отдельных свойств: Можешь указать конкретные свойства, которые ты хочешь извлечь из объекта. Пример:

const obj = { prop1: value1, prop2: value2, ..., prop100: value100 };

const { prop1, prop2, prop3, ..., prop100 } = obj;

// Теперь у тебя есть доступ к каждому свойству объекта через отдельные переменные prop1, prop2, prop3, ..., prop100.

// Извлечение оставшихся свойств: Можешь использовать оператор "..." (rest) для извлечения оставшихся свойств объекта в новый объект. Пример:

const obj = { prop1: value1, prop2: value2, ..., prop100: value100 };

const { prop1, prop2, ...rest } = obj;

// Теперь у тебя есть доступ к определенным свойствам объекта через отдельные переменные prop1, prop2, а все остальные свойства будут содержаться в объекте rest.

// Использование цикла: Можешь использовать цикл, например for...in, чтобы перебрать все свойства объекта и выполнить нужные действия. Пример:

// const obj = { prop1: value1, prop2: value2, ..., prop100: value100 };

for (const prop in obj) {
  // Доступ к каждому свойству объекта
  console.log(prop, obj[prop]);
}









const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];





function lookUpProfile(name, prop) {
  // Змініть код лише під цим рядком
for (let i = 0; i < contacts.length; i += 1) {
        let currentContacts = contacts[i];
for (let key in currentContacts) {

        if (name === currentContacts.firstName && prop === key) {

      return currentContacts[prop];

        }
       

      }
  // Змініть код лише над цим рядком
}
}

console.log(lookUpProfile("Kristian", "number"))
