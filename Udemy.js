// Колбэки и функции высшего порядка. Фундаментальный JavaScript
// Ссылка на ролик https://youtu.be/ab0a8ZbCNMY

    // 3 ключевых ПОНЯТИЯ JS.
    // Выражения const c = a + b
    // Функции function myFn(a, b) {}
    // Обьекты {}

//////////////////////////////  Переменные!!!  //////////////////////////////

// 1) Все переменные обьявлять перед их использованием.
// 2) Стараться использовать const везде, где это возможно.

// Имена переменных:

// 1) PascalCase // Типы и Классы
// 2) DB_PASSWORD // Значения известны до запуска приложения и не меняются.
// 3) camelCase // Все остальные переменные.

const j = 10 // Переменная j типа число.
const h = 10+ 5 // Выражение.


//////////////////////////////  Примитивные типы!!!  //////////////////////////////

// Тип string(строка)
// boolean(логический тип)
// number(число)
// null
// undefined (неопределенно)
// symbol (символ)

const g = 15 // Примитив
const k = 'Vlad' // Примитив

//////////////////////////////  Ссылочный Тип!!!  //////////////////////////////

// object(обьект)

//////////////////////////////  Обьекты!!!  //////////////////////////////


// Если какй-то свойство содержит функцию как значение, такое свойство называется метод!

// Обьект это набор свойст, имя: значение.
// Переменная в которую мы присваиваем обьект, содержит только ссылку на обьект а сам обьект находится в другом месте памяти.


// ПОРЯДОК СВОЙСТВ НЕ ИМЕЕТ ЗНАЧЕНИЯ!!!
const myCity1 = {
    city: 'New York',
    popular: true,
    country: 'USA'
} // свойсто city:  значение 'USA'

// ПОЛУЧАЕМ ДОСТУП К ОБЬЕКТУ!!!

console.log(myCity1.city) // New York
// Точечная запись
console.log(myCity1.popular) // true
// Точечная запись

//////////////////////////////  ИЗМЕНЕНИЕ ЗНАЧЕНИЙ СВОЙСТВА ОБЬЕКТА!  //////////////////////////////

const myCity ={
    city: 'New York'
}

myCity.city = 'Las Vegas'
// Изменяем в свойстве city значение 'New York' НА 'Las Vegas'.

console.log(myCity) // { city: 'Las Vegas' }


//////////////////////////////  ИЗМЕНЕНИЕ ЗНАЧЕНИЙ СВОЙСТВА ОБЬЕКТА!  //////////////////////////////

// Переменная myCity ТИПА ОБЬЕКТ.
const myCity ={
    city: 'New York'
}
// В const находится ССЫЛКА на обьект myCity, поэтому мы можем менять его свойства и значения.
// Происходит мутация данного обьекта. Нужно делать копию обьекта и мутировать КОПИЮ обьекта а не ОРИГИНАЛ!

myCity.popular = true
// Добавили с помощью точечной записи в обьект свойство popular:  значение true.

console.log(myCity)
// { city: 'New York', popular: true}

myCity.country = 'USA'
// Добавили с помощью точечной записи в обьект свойство country:  значение 'USA'.

console.log(myCity)
// { city: 'New York', popular: true, country: 'USA' }



//////////////////////////////  УДАЛЕНИЕ СВОЙСТВ ОБЬЕКТА оператор delete!  //////////////////////////////

delete myCity.country
// Удалили свойство country

console.log(myCity)


//////////////////////////////  ДОСТУП К ЗНАЧЕНИЮ СВОЙСТВА С ИСПОЛЬЗОВАНИЕМ СКОБОК []  //////////////////////////////


const myCity ={
    city: 'New York'
}

myCity['popular'] = true
// Добавили в обьектс помощью [] свойство popular:  значение true.

console.log(myCity)
// { city: 'New York', popular: true }


const countryPropertyName = 'country'
// Поместили в переменную свойство 'country' для обьекта.

myCity[countryPropertyName] = 'USA'
// Присвоили к свойству 'country' значение 'USA'
// Добавили country: 'USA' свойство хранится в переменной countryPropertyName.
// JS перед созданием свойства посмотрит в переменную countryPropertyName, после чего создаст свойство которое хранится в переменной countryPropertyName, далее присвоили значение свойства = 'USA'.
// Есди нужно создать свойство из перменной используем скобки [] в остальных случаях используем точечную запись.

console.log(myCity)
// { city: 'New York', popular: true, country: 'USA' }

// ОТЛИЧИЕ СКОБОЧНОЙ ЗАПИСИ ОТ ТОЧЕЧНОЙ, 
// В ТО ЧТО В CКОБОЧНОЙ ЗАПИСИ [] МОЖНО ИСПОЛЬЗОВАТЬ ЛЮБОЕ ВЫРАЖЕНИЕ!

// Пример 2

const myCity ={
    name: 'Vlad',
    age: 25
}

const myCountry = 'city'

console.log(myCity)
// { name: 'Vlad', age: 15 }


myCity[myCountry] = 'USA'

console.log(myCity)
// { name: 'Vlad', age: 15, city: 'USA' }


 //////////////////////////////  В JS МОГУТ БЫТЬ ВЛОЖЕННЫЕ СВОЙСТВА КОТОРЫЕ СОДЕРЖАТ ВЛОЖЕННЫЕ ОБЬЕКТЫ!  //////////////////////////////


 const myCity = {
    city: 'New York',
    info: {
        isPopular: true,
        country: 'USA'
    }
 }

 console.log(myCity.info.isPopular) // true 
// Точечная запись, переходим во вложенный обьект и выводим значение свойства isPopular.


delete myCity.info.isPopular
 // Получаем доступ в вложенный обьекта info и удаляем его с помощью оператора delete. 
 // Можно через скобочную [] запись delete myCity.info['isPopular']
 // Скобочную запись используем когда в скобках должно быть выражение, допустим название переменной.


 console.log(myCity)
 // { city: 'New York', info: { country: 'USA' } }


 //////////////////////////////  ИСПОЛЬЗОВАНИЕ ПЕРЕМЕННЫХ ПРИ ФОРМИРОВАНИИ ОБЪЕКТА! //////////////////////////////

 const name = 'Vlad'
 const postsQty = 23
 // Используем название перменных как выражение для свойст обьекта.

 const userProfile = { 
    name: name,
    postsQty: postsQty,
    hasSignedAgreement: false
 }

// Сначала JS получит результат того или иного свойства а после этого этот результат присвоится тому или иному свойству обьекта.

// Сокращенные свойства рекомендуется размещать в начале обьекта, чтобы было ясно где переменные в которых хранятся значения.

// const userProfile = { 
//     name,
//     postsQty,
//     hasSignedAgreement: false
//  }
 
// Сокращенный формат записи когда название переменной где находится значение свойства совподвет с название свойства!

// Обычно часть значений уже известно до формирования объекта, такие значения можно поместить в переменные. Допустим переменная password где будет находится пароль.


////////////////////////////// ГЛОБАЛЬНЫЕ ОБЪЕКТЫ! //////////////////////////////


console // Браузер глобальный обьект.

window.console // Hrome глобальный обьект.

global.console // Node.JS глобальный обьект.

globalThis // Унифицированный глобальный обьект.


// СВОЙСТВО ГЛОБАЛЬНЫХ ОБЬЕКТОВ 

window.console

global.console

console.log('Hello')

window.console.log('Hello')

global.console.log('Hello')
// Одно и тоже!



//////////////////////////////  МЕТОД - СВОЙСТВО ОБЪЕКТА ЗНАЧЕНИЕ КОТОРОГО - ФУНКЦИЯ! //////////////////////////////

// Методы - свойства обьекта, которые содержат функции.

const myCity = {
    city: 'New York',
    cityGreeting: function () {
        console.log('Greetings!!!')
    }
    
}
// В данном примере cityGreeting это метод. Вот city это просто свойство так как его значение не является функцией!!!
myCity.cityGreeting()
// Вызов МЕТОДА!

// Сокращенный формат записи без : и слова function!

const myCity = {
    city: 'New York',
    cityGreeting() { // Сокращенный формат записи.
        console.log('Greetings!!!')
    }
    
}


myCity.cityGreeting()
// Вызов МЕТОДА!


////////////////////////////// ЕСЛИ СРАВНИТЬ МЕТОДЫ VS СВОЙСТВА ОБЬЕКТОВ! //////////////////////////////

// Отличия СВЙОСТВА НЕ сожержат функции как значения а МЕТОДЫ СОДЕРЖАТ!!!
// шаблон обьекта свойство: значение

myCity.city
// Доступ к свойству

myCity.cityGreeting()
// Вызов метода



////////////////////////////// JSON! //////////////////////////////


// Есть 2 метода, для конвертиртации JSON в JS обьект и наоборот JS обьект в JSON.


JSON.parse()
// Конвертирует (парсим) JASON в JS Обьект.

JSON.stringify()
// Конвертирует JS Обьект в JASON.


const post = {
    title: 'My post',
    likesQty: 5
}
// Порядок свойств не имеет значения.

console.log(post)
// { title: 'My post', likesQty: 5 }

const postStringify = JSON.stringify(post)
// Конвертирует JS Обьект в СТРОКУ JASON.

console.log(postStringify)
// Получили СТРОКУ JSON '{"title":"My post","likesQty":5}'

const postParse = JSON.parse(postStringify)
// Конвертирует СТРОКУ JASON в JS Обьект.

console.log(postParse)
// Получили ОБЬЕКТ JS { title: 'My post', likesQty: 5 }

// JSON ЭТО ФОРМАТ ПЕРЕДАЧИ ДАННЫХ В ИНТЕРНЕТЕ!!!


////////////////////////////// МУТАЦИИ В JS! //////////////////////////////


// ЗНАЧЕНИЯ ПРИМИТИВНЫХ ТИПОВ!!! ЭТО ОЧЕНЬ ВАЖНО!!! ОСНОВЫ ОСНОВ!

// Крпирование по ЗНАЧЕНИЮ!
// ЗНАЧЕНИЕ ПРИМИТИВНЫХ ТИПОВ СОХРАНЯЕТСЯ НЕПОСРЕДСТВЕННО В САМИХ ПЕРЕМЕННЫХ!

const a = 10
// Переменная a ТИПА число ПРИМИТИВ!!!!

let b = a
// Обьявили новую переменную let b И КРАИРУЕМ a В b

b = 30
// 

console.log(a)
// 10

console.log(b)
// 30

////////////////////////////// ЗНАЧЕНИЯ ССЫЛОЧНОГО ТИПА!!! //////////////////////////////

const person = {
    name: 'Bob',
    age: 21
}

person.age = 22
// Изменили в свойстве age значение С 21 НА 22.
// Мутация Обьекта. Нужно делать копию ОБЪЕКТА и после его изменять.
person.isAdult = true
// Добавили свойство isAdult: и его значение true.
// Мутация Обьекта. Нужно делать копию ОБЪЕКТА и после его изменять.

console.log(person.age) // 22
console.log(person.isAdult) // true


// МУТИРОВАНИЕ ОБЬЕКТА ЧЕРЕЗ КОПИЮ.
const person = {
    name: 'Bob',
    age: 21
}


const person2 = person
// Крпируем ССЫЛКУ на обьект в памяти.
// То есть мы не обьект person скопировали в переменную person2 а ССЫЛКУ на один обьект в памяти!!!
// Теперь мы можем менять даннй обьект как через переменную person так и person2.


person2.age = 26
// Изменили в свойстве age значение НА 26.
person2.isAdult = true
// Добавили свойство isAdult: и его значение true.

// Мутируем обьект через ССЫЛКУ, которая хранится в переменной person2.
// То есть есть 1 обьект, ССЫЛКА на него находится в двух переменных person и person2.
// ЭТО ПРОИСХОДИТ И ЗА ТОГО ЧТО МЫ КОПИРУЕМ ТОЛЬКО ССЫЛКУ НА ОБЬЕКАТ А НЕ САМ ОБЬЕКТ!!!

console.log(person.age) // 26
console.log(person.isAdult) // true

// Всегда нужно помнить что ПРИМИТИВНЫЙ ТИП КОПИРУЕТСЯ ПО ЗНАЧЕНИЮ А ССЫЛОЧНЫЙ ТИП КОПИРУЕТСЯ ПО ССЫЛКЕ!!!





////////////////////////////// КАК ИЗБЕЖАТЬ МУТАЦИИ ОБЪЕКТОВ!!! //////////////////////////////

// Что делать если мы не хотим чтобы ОБЬЕКТ МЕНЯЛСЯ когда мы создаем КОПИЮ такого ОБЬЕКТА.

// Вариант номер 1

const person = {
    name: 'Bob',
    age: 25
}

const person2 = Object.assign({}, person)
// Object это и ТИП и КЛАСС потому с большой буквы O
// С помощью метода assign можем создать КОПИЮ нового обьекта на базе старого.
// То есть не ссылку на обьект а полностью новый обьект, МЕТОД assign создат новый обьект и запишет в него свойства обьекта person.
// Где в параметрах {} новый обьект С старого person.

person2.age = 26

console.log(person2.age) // 26
console.log(person.age) // 25

// Но если у обьекта person есть вложенные обьекты ТО ССЫЛКИ НА ЭТИ ВЛОЖЕННЫЕ ОБЬЕКТЫ СОХРАНЯЮТСЯ!!!
// То есть если есть свойство значение которого ОБЬЕКТ.

// Можно использовать Object.assign() где нет вложенных обьектов.



// Вариант номер 2


const person = {
    name: 'Bob',
    age: 25
}

const person2 = {...person}
// Три точки ... оператор СПРЕД (распыление)
// Берется обьект person и разделяется на свойства, в данном примере на name и age.
// Мы разделили старый обьект на свойства с помощью СПРЕД ... и сразу собрали эти свойства в НОВЫЙ обьект!
// person2 ЭТО НОВАЯ ССЫЛКА КОТОРАЯ ССЫЛАЕТСЯ НА НОВЫЙ ОБЬЕКТ!


person2.name = 'Alice'
// Меняем свойства НОГОВО обьекта person2.

console.log(person2.name) // Выводим свойство НОВОСОДАННОГО обьекта Alice
console.log(person.name) // Выводим свойство оригинального обьекта Bob


// Здесь как и в ВАРИАНТЕ 1 если у обьекта person есть вложенные обьекты ТО ССЫЛКИ НА ЭТИ ВЛОЖЕННЫЕ ОБЬЕКТЫ СОХРАНЯЮТСЯ!!!
// То есть меняя вложенные обьекты в распыленном обьекте спредом, ОНИ ПОМЕНЯЮТСЯ И В ОРИГИНАЛЬНОМ ОБЬЕКТЕ!!!
// Ссылки вложенных обьектов сохрянятся на ОРИГИНАЛЬНЫЙ обьект.

// Спред и Object.assign() МОЖНО ИСПОЛЬЗОВАТЬ ТОЛЬКО ЕСЛИ НЕТ ВЛОЖЕННЫХ ОБЬЕКТОВ!!!


////////////////////////////// ИЗБЕЖАТЬ МУТАЦИИ ОБЪЕКТОВ на 100% использую JSON!!! //////////////////////////////


// Вариант 3


const person = {
    name: 'Bob',
    age: 25
}

const person2 = JSON.parse(JSON.stringify(person))

// 1) Конвентируем обьект person в строку JSON.stringify(person) (Код работает как матрёшка, ИЗНУТРИ НАРУЖУ.)
// 2) На результате метода JSON.stringify(person) получили строку JSON.
// 3) Переадем строку JSON как аргемент в метод JSON.parse()
// 4) С помощью метода JSON.parse() мы обратно конвентируем строку JSON в ОБЬЕКТ JS.
// Итог, происходит двойная конвертация обьекта в строку JSON и обратно строка JSON в обьект!
// Мы получим новый обьект и в этом новом обьекте мы можем менять любые свойства, даже в вложенных обьектах.
// Оригинальный Обьект с которого мы делали конвертицию затронут не будет!
// Ссылки на вложенные обьекты если такие есть, НЕ СОХРАНЯЮТСЯ!!! Получили то что хотели.

person2.name = 'Alice'

console.log(person2.name) // Alice
console.log(person.name) // Bob



////////////////////////////// ФУНКЦИИ!!! //////////////////////////////

// Функция - это блок кода котрый можно выполнять многократно.

// Пример
let l = 5
let p = 3

c = l + p
// Одинаковые блоки кода!

console.log(c) // 8

let n = 10
let m = 5

c = n + m
// Одинаковые блоки кода!

console.log(c) // 8

// Очень рекомендуется избегать повторений блоков кода!

// На помощь приходят ФУНКЦИИ!

// Вариант 1
    function sum(a, b) {
    console.log( a + b ) 
    }


sum(10, 15) // 25

sum(10, 25) // 35

// Вариант 2
    function sumA(a, b) {
       const c = a + b 
       console.log(c) 
    }

a = 8
b = 12

    sumA(a, b) // 

    // Функция может быть...

    // 1) ...именованной
    // 2) ...присвоено переменной
    // 3) ...анонимной (без имени)
    // 4) ...аргументом при вызове другой функции (Callback функции)
    // 5) ...значением свойства (метода) обьекта. (Метод это свойство обьекта значение которого функция)

    // 3 ключевых ПОНЯТИЯ JS.
    // Выражения
    // Функции
    // Обьекты



////////////////////////////// ФУНКЦИЯ - ЭТО ОБЬЕКТ!!! //////////////////////////////


function myFn(a, b) { // (a, b) параметры функции, это переменные внутри функции а значение их определяются в момент ВЫЗОВА ФУНКЦИИ myFn(10, 5)!!!
let c
a = a + 1
c = a + b
return c // Вернет результат который равен переменной С
// После инструкция return Функция прекращает дальнейшие инструкции!!!
// Если после return есть каий-то операции они не будет выполнены!!!
// Если return ТО функция возвращает результат и заканчивает свою работу.
// Если использовали return ФУНКЦИЯ ВОЗВРАЩАЕТ РЕЗУЛЬТАТ И ЗАКАНЧИВАЕТ СВОЮ РАБОТУ!!!!
}

const res = myFn(15, 5) // Это (15, 5) аргументы!

console.log(res)

console.log(myFn.name) // myFn ФУНКЦИЯ - ЭТО ОБЬЕКТ.



////////////////////////////// ФУНКЦИЯ ВОЗВРАЩАЕТ UNDEFINED ЕСЛИ НЕТ ИНСТРУКЦИИ return ВАЖНО !!! //////////////////////////////


// Если мы говорим АРГУМЕНТЫ функции имеем ввиду ВЫЗОВ ФУНКЦИИ.
// // Если мы говорим ПАРАМЕТРЫ функции имеем ввиду ОБЬВЛЕНИЕ ФУНКЦИИ.

// Резюмируя 

// 1) Обьявили функцию в результате которой создасться переменная myFn.
// 2) Ее значение будет функция!
// 3) myFn(15, 5) вызыыввем функцию и в вызове указываем 2 аргумента 15 которые присвоятся в параметр a И 5 который присвоится в параметр b  function myFn(a, b)
// Функция возвращает значение!



function myFn(a, b) { 
    a = a + 1
    c = a + b
    return c 
    }    // ЕСЛИ НЕТ ИНСТРУКЦИИ return ФУНКЦИЯ ВОЗВРАЩАЕТ ЗНАЧЕНИЕ ТИПА UNDEFINED

    myFn(10, 3) // 14

// Что происходит внутри функции при ее вызове!

// 1) Параметрам "a" и "b" писваиваются значения 10 и 3
// 2) Обьявляется переменная "c"
// 3) Значение "a" увеличивается на 1
// 4) Сумма значений "a" и "b" присваивается "c"
// 5) Возвращает значение "c"

function myFn() {} // Самая короткая функция.

myFn() // undefined



////////////////////////////// ПЕРЕДАЧА ЗНАЧЕНИЯ ПО ССЫЛКЕ !!! //////////////////////////////

const personOne1 = {
    name: 'Bob',
    age: 21
}

function increasePersonAge(person) {
    person.age +=1
    return person
}
// Внутри ФУНКЦИИ мутация ВНЕШНЕГО обьекта. Так делать НЕ РЕКОМЕНДУЕТСЯ!!!
// В параметр функции person передаем как аргумент обьект personOne.
// После переходим в person.age где значение 21 с помощью +=1 добавлем 1 получаем 22.

increasePersonAge(personOne1)
// Вызов функции increasePersonAge с передачей как аргумент обьект  personOne.
console.log(personOne1.age)

// Мы по ссылке которая находится в переменной в ОРИГИНАЛЬНОМ ОБЬЕКТЕ поменяли значение age: 21 на age: 22.



////////////////////////////// ВНУТРИ ФУНКЦИИ НЕ РЕКОМЕНДУЕТСЯ МУТИРОВАТЬ ВНЕШНИЕ ОБЪЕКТЫ!!! //////////////////////////////


// То есть мы не передаем ОРИНИНАЛЬНЫЙ ОБЬЕКТ как аргумент в ФУНКЦИЮ.
// Мы можем создать копию обьекта внутри функии!




const personOne = {
    name: 'Bob',
    age: 21
}

function increasePersonAge(person) {
    const updatePerson = Object.assign({}, person) // Создали НОВЫЙ ОБЬЕКТ и присвоили в переменную updatePers ОБЬЕКТ на БАЗЕ СТАРОГО personOne.
    updatePerson.age += 1 // К новому обьекту pdatePerson в свойство age добавили значение 1 на выходе получили age: 22
    return updatePerson // Возвращаем новый ОБЬЕКТ updatePerson.
}

const updatePersonOne = increasePersonAge(personOne) // Вызов ФУНКЦИИ 
console.log(personOne.age) // 21
console.log(updatePersonOne.age) // 22

// Вывод мы передаем ОБЪЕКТ в ФУНКЦИЮ не изменяя оригинальный ОБЪЕКТ.
// Чтобы не было мутации оригинального обьекта!!! Это важно!
// На выходе personOne НЕ ИЗМЕНИТСЯ, мы будем менять КОПИЮ такого ОБЬЕКТА.

// ФУНКЦИИ НЕ ДОЛЖНЫ МЕНЯТЬ ВНЕШНИЕ ПЕРЕМЕННЫЕ ОНИ ДОЛЖНЫ РАБОТАТЬ С СВОИМИ ВНУТРЕННИМИ ПЕРЕМЕННЫМИ!!!



//////////////////////////////  КОЛБЕК ФУНКЦИИ ВАЖНО!!!  //////////////////////////////



// Колбэки и функции высшего порядка. Фундаментальный JavaScript
// Ссылка на ролик https://youtu.be/ab0a8ZbCNMY

    // 3 ключевых ПОНЯТИЯ JS.
    // Выражения const c = a + b
    // Функции function myFn(a, b) {}
    // Обьекты {}

    //Пример

    // Функция 1
    function anotherFunction() {
        // Действия... 
        // Функция которую мы положим как аргумент в параметр Функции fnWithCallback.
        // Она же КОЛБЕК ФУНКЦИЯ!!!
        // Данная КОЛБЕК ФУНКЦИЯ передается как аргумент в другую функцию.
    }

        // Функция 2
    function fnWithCallback(callbackFunction) {
callbackFunction()
// Вызывает ТУ ФУНКЦИЮ которую положат в ПАРАМЕТР.
// В теле этой функции вызывается КОЛБЕК ФУНКЦИЯ, Функция 1.
    }

        // Вызов ФУНКЦИИ 2 И в ПАРАМЕНТР КЛАДЕМ ФУНКЦИЮ 1 !!!
    fnWithCallback(anotherFunction)
    // Вызов функции 

  // Пример

  function printMyName() {
    console.log('Vlad')
  }

  console.log('Start')

  setTimeout(printMyName, 2000) // Функция setTimeout отложенного запуска.
  // Эта функция отложенного запуска, вызывает внутри себя функцию которая передана как первый аргумент в вызове Функции setTimeout.
  // В данном примере, одна функция вызывает другую через отложенное время а именно 2 секунды.


// Колбэки и функции высшего порядка. Фундаментальный JavaScript


// Вариант номер 1

function treeSquared() {
    return 3 * 3
}
// Вернет 6

// Вариант номер 2

function numSquared(num) {
    return num * num
}

numSquared(3)
// Вернет нечто умноженное само на себя!
// Вернет 6

// Аналогичный пример но уже с МАССИВАМИ где учавствует ПЕРЕБОР for!!!

// Пример 1 умножение.

function copyArrayAndSquareNums(arr) { // В параметр arr получим МАССИВ!
    const output = []; // Создаем новый массив.

    for (let i = 0; i < arr.length; i += 1) {
     output.push(arr[i] ** 2); // Новый синтаксис ** 2 или arr[i] * arr[i]
        
    }
    // Обходим ориг массив умножаем само на себя число и в изменненый массив бросаем в новый массив output.

    return output;
    // Вернем новый output массив.
}


// Пример 2 деление.


function copyArrayAndSquareNums(arr) { 
    const output = [];

    for (let i = 0; i < arr.length; i += 1) {
     output.push(arr[i] / arr[i]);
        
    }

    return output;
    
}
// По факту в примере 1 и 2 аналогичный код за исключением отлиыия в одной строке output.push(arr[i] / arr[i])

// И тогда мы приходим к КОЛБЕК ФУНКЦИЯМ!!!


//Функции Callback!

//Функции высшего порядка это функции которые принимают в аргумент другую функции!

//Callback функции это отдельная функция которая передается в функцию высшего порядка как аргумент! (То есть как ссылка на данную функцию, функция вашего порядке будет на нее ссылаться.)

//Замыкание Функции!

//Функция вашего порядка может создать функцию внутри себя, и возвращает их через оператора return. Это уже замыкание.

const arrM = [1, 2, 3, 4, 5]

function copyArrayAndDoSmth(arr, instructions) { 
    const output = [];

    for (let i = 0; i < arr.length; i += 1) {
     output.push(instructions(arr[i]));
        
    }

    return output;
    
}

function numSquared(num) {
    return num * num
}
// КОЛБЕК ФУНКЦИЯ!

function divideBy2(num) {
    return num / num
}
// КОЛБЕК ФУНКЦИЯ!


const resFn = copyArrayAndDoSmth(arrM, numSquared)
// Вызов ФУНКЦИИ ВЫСШЕГО ПОРЯДКА с передачей МАССИВА как первый аргмент и передачей КОБЕК ФУНКЦИИ КАК ВТОРОЙ АРГУМЕНТ!

console.log(resFn)
// [ 1, 4, 9, 16, 25 ]




  //////////////////////////////  ПРАВИЛА РАБОТЫ ФУНКЦИИ !!!  //////////////////////////////

// 1) Называть функции исходя из выполняемых задач.
// Чтобы было понятно что функция делает, как и название любых переменных.

// 2) Одна функция дожна выполнять одну задачу.
// Функция которая работает с числами И отдельно функция которая работает с строками.

// 3) Не рекомендуется изменять внешние относительно функции перменные.
// Если функция работает с обьектами, то внутри функции содаем копию таких обьектов и меняем их,
// не меняя при этом оригинальные обьекты которые были переданы как значение аргументов.
// То есть функция должна быть чистой, функция работает только с перменными которые обьявлены внутри самой функции И ОНА НЕ МЕНЯЕТ ВНЕШНИЕ ПЕРЕМЕННЫЕ!!!
// ДАЖЕ ТЕ КОТОРЫЕ ПЕРЕДАНЫ КАК АРГУМЕНТ ЭТОЙ ФУНКЦИИ.

// Если в функции нету return то функция возвращает undefined.


//////////////////////////////  ЗАМЫКАНЕИ ФУНКЦИИ !!!  //////////////////////////////

// Замыкание в JavaScript

// 1. Функция в качесиве своей работы возвоащает новые функции.
// По сути функция генерирует новую функцию внутри себя и возвращает наружу.

// 2) Возвращаемые функции помнят контекст, где были созданы.





 //////////////////////////////  ОБДАСТЬ ВИДИМОСТИ !!!  //////////////////////////////

 // Область видимости определяет границы действия переменной.

 // 1) ЕСТЬ ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ которые обьявлены в ГЛОБАЛЬНОЙ ОБЛАСТИ ВИДИМОСТИ.
 // 2) ЕСТЬ ЛОКАЛЬНЫЕ ПЕРЕМЕННЫЕ которые обьявлены в ЛОКАЛЬНОЙ ОБЛАСТИ ВИДИМОСТИ.

// Пример 1

 let z // Создали глобальные переменные на одному ряду с глобальным обьектом window!
 let x // Создали глобальные переменные на одному ряду с глобальным обьектом window!

 function myFn() { // Глобальная область видимлсти видит myFn.
    let x // Обявлена локальная переменная! Доступна только {внутри скобок функции}
    z = true
    x = 10
    console.log(x) // 10
 }

 // При вызове функции в теле функции, между скобками создвется {локальная область видимлсти}


 myFn()

 console.log(z) // true
 // Внутри  функции присвоили  z = true, так как внутри функции нету перменной z, присвоили выше по коду к глобальной перменной z.
 console.log(x) // undefine
// Вывод рузультата обращения к глобальной переменной X

// Итог 

// 10
// true
// undefined

// Пример 2

const o = 5

function myFn() {
    function innerFn() {
        console.log(o) // 5
    }
    innerFn()
}

myFn()

// console.log(o) // 5
// Резутьтат вызова функции myFn() undefined
// Функция не имеет ключевого слова return поэтому возврат вызова myFn() будет undefined.

// 1) Создали в глобальной области видимости переменную o.
// 2) Создали в глобальной области видимости функцию myFn.
// 3) При вызове функции myFn создается внутри нее функция innerFn().
// 4) Вызываем в облвсти видимости функии myFn функцию innerFn().
// 5) В локальной области видимости innerFn() создается  console.log(o).
// 6) При вызове функции innerFn() интерпретатор js пойдет искать переменную o по коду выше.
// 7) Ищет в локальной области видимости функции innerFn(), здесь нету.
// 8) Ищет в локальной области видимости функции myFn(), и здесь нету.
// 9) Идет в глобальную облась видимости и там находит переменную const o = 5.
// 10) Выводит в консоль значение меременной const o = 5.

// ЭТО НАЗЫВАЕТСЯ ЦЕПОЧКА ОБЛАСТЕЙ ВИДИМОСТИ!





 //////////////////////////////  ЖИЗНЕННЫЙ ЦИКЛ ПЕРЕМЕННЫХ !!!  //////////////////////////////



//  let a
//  let b
 
//  function myFn() {
//  let b
//  a = true
//  b = 10
//  console. log(b) // 10
 
//  myFn()
 
//  console. log(a) // true
//  console. log(b) // undefined

// ЖИЗНЕННЫЙ ЦИКЛ ПЕРЕМЕННОЙ b

// 1) let b обьявление переменной "b" в глобальной обоасти видимости. Ее значение undefine, так как изначально мы не присваиваем значение.
// 2) Вызов функции myFn() после чего содается локальная зона видимости в функции myFn().
// 3) let b Обьевление "b" в локальной зоне видимости функции myFn().
// 4) b = 10 Интерпретатор js ищет в рамках функции, находит let b в области видимости функции и присваивает ей значение 10.
// 5) console. log(b) // 10 Внутри функции вывод в консоль b.
// 6) Функция myFn() заканчивает свою работу. Переменная b в глобальной зоне видимости все так же undefined.
// 7) В глобальной зоне видимости выводим console. log(b) получаем undefined.
// После того как отработала функция myFn() ее переменные были удалены!!!


// ЖИЗНЕННЫЙ ЦИКЛ ПЕРЕМЕННОЙ a


