// Задание 1: Простое условие

let userNum = prompt("Введите число:");

if (userNum > 10) {
  console.log("Число больше 10");
} else {
  console.log("Число меньше или равно 10");
}

// Задание 2: Подтверждение действия
let userConfirmed = confirm("Удалить данный файл?");

if (userConfirmed) {
  console.log("Файл удален");
} else {
  console.log("Удаление отменено");
}

// Задание 3: Несколько условий с else if
let userAge = prompt("Введите ваш возраст");

if (userAge < 18) {
  console.log("Вы еще подросток");
} else if (userAge >= 18 && userAge <= 30) {
  console.log("Вы молодой взрослый");
} else if (userAge > 30) {
  console.log("Вы взрослый");
} else {
  console.log("Пожалуйста, введите корректный возраст");
}

// Задание 4: Тернарный оператор

let num = prompt("Введите число, что бы проверить, четное оно или нет");

let result = num % 2 == 0 ? "Четное число" : "Нечетное число";
console.log(result);

// Задание 5: Условное ветвление switch-case
let dayNum = Number(prompt("Укажите номер дня недели (от 1 до 7):"));
let message;
switch (dayNum) {
  case 1:
    message = "Понедельник";
    break;
  case 2:
    message = "Вторник";
    break;
  case 3:
    message = "Среда";
    break;
  case 4:
    message = "Четверг";
    break;
  case 5:
    message = "Пятница";
    break;
  case 6:
    message = "Суббота";
    break;
  case 7:
    message = "Воскресенье";
    break;
  default:
    message = "Некорректное значение";
}

console.log(message);

// Задание 6: Комбинация if-else и тернарного оператора
let num1 = Number(prompt("Введите первое число:"));

let num2 = Number(prompt("Введите второе число:"));

if (num1 == num2) {
  console.log("Числа равны");
} else if (num1 > num2) {
  console.log("Первое число больше");
} else if (num1 < num2) {
  console.log("Второе число больше");
} else {
  console.log("Ошибка! Введите корректные числа");
}

// Дополнительное задание
let month = Number(prompt("Укажите номер месяца (от 1 до 12):"));

switch (month) {
  case 1:
    console.log("Январь");
    break;
  case 2:
    console.log("Февраль");
    break;
  case 3:
    console.log("Март");
    break;
  case 4:
    console.log("Апрель");
    break;
  case 5:
    console.log("Май");
    break;
  case 6:
    console.log("Июнь");
    break;
  case 7:
    console.log("Июль");
    break;
  case 8:
    console.log("Август");
    break;
  case 9:
    console.log("Сентябрь");
    break;
  case 10:
    console.log("Октябрь");
    break;
  case 11:
    console.log("Ноябрь");
    break;
  case 12:
    console.log("Декабрь");
    break;
  default:
    console.log("Некорректное значение");
}
