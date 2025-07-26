// Задание 1:  Объявление переменных с помощью `let` и `const`

let age = 21;
console.log(age); //Выведет 21

age = 22;
console.log(age); //Выведет 22
// Переменная let может быть изменена

//Задание 2: Что такое `var`?

/* var использовалась в ES5. Использование переменной var все еще допустимо, но не рекомендуется.
Для более надежного и предсказуемого поведения рекомендуется использовать let или const.*/

//Задание 3: Типы данных

let number = 8;
console.log(typeof number);

let string = "This is a string value";
console.log(typeof string);

let bool = true;
console.log(typeof bool);

let nothing = null;
console.log(typeof nothing);

let undefinedValue;
console.log(typeof undefinedValue);

let nan = NaN;
console.log(typeof nan);

//Задание 4: Преобразование типов
// 4.1
let str = "8";
let strToNum = Number(str);
console.log(typeof str);

let num = 8;
let numToStr = String(num);
console.log(typeof num);

// 4.2
let valueUndefined = undefined;
console.log(String(valueUndefined)); //Выведет undefined (строчное значение)
console.log(Number(valueUndefined)); //Выведет NaN(результат неудачной или некорректной числовой операции)

let nullValue = null;
console.log(String(nullValue)); //Выведет null (строчное значение)
console.log(Number(nullValue)); //Выведет 0, тк null это пустое значение

//Задание 5: Динамическая типизация
let num2 = 8;
console.log(typeof num2); //Выведет number

num2 = "8";
console.log(typeof num2); //Выведет string

//Динамическая типизация в JS - тип переменной меняется сам, в зависимости от присвоенного значения

//Задание 6: Использование `prompt`

let userName = prompt("Введите ваше имя");

let userAge = prompt("Введите ваш возраст");

console.log("Имя:" + userName);

console.log("Возраст:" + userAge);
