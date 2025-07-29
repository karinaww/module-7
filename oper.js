// Задание 1: Математические операции с переменными
let a = 10;
let b = 5;
let c = 2;

console.log(a + b + c);

console.log(a + c - b);

console.log((a * b) / c);

console.log(a % b);

// Задание 2: Инкремент и декремент в выражениях
let x = 7;

console.log(x++ + ++x);

console.log(x-- - --x);

// Задание 3: Конкатенация и числа
let text = "The result is: ";
let sum = 4 + 5;
let result = text + sum;

console.log(result);

// Задание 4: Логические операторы в условиях
console.log(a > b && a > 0 && b > 0);

console.log(c < 10 || c == 2);

console.log(a / c != 5);

// Задание 5: Операторы сравнения и типы данных
let num = 10;
let str = "10";

console.log(num == str); // true, потому что оператор == не учитывает тип данных

console.log(num === str); // false, потому что оператор === учитывает тип данных

// Задание 6: Сложные выражения
console.log(x % 2 === 0 || x % 3 === 0) && x % 6 !== 0;

let y = 4;
console.log(y > 10 || y < 5);
