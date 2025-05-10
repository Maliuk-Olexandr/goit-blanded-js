//Завдання 1:

// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map((num) => num ** 2);
// console.log(squares); // [1, 4, 9, 16, 25]

//Завдання 2:

// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];
// const allValues = data.flatMap((item) => item.values);
// console.log(allValues); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//Завдання 3:

// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// const hasUnderage = people.some((person) => person.age < 20);
// console.log(hasUnderage); // true

//авдання 4:

// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];
// const allEven = numbers.every((num) => num % 2 === 0);
// console.log(allEven); // true

//Завдання 5:

// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];
// const firstOdd = numbers.find((num) => num % 2 !== 0);
// console.log(firstOdd); // 1

//Завдання 6:

// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];
// const sortedArray = numbersArray.toSorted((a, b) => a - b);
// console.log(sortedArray); // [1, 2, 3, 4, 5]

//Завдання 7:

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];
// const sortedStrings = stringArray.toSorted((a, b) => a.localeCompare(b));
// console.log(sortedStrings); // ["apple", "banana", "orange", "pear"]

//Завдання 8:

//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];
// const sortedUsers = users.toSorted((a, b) => a.age - b.age);
// console.log(sortedUsers); // [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}]

//Завдання 9:

// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]
// const filteredUsers = user.filter((person) => person.age > 20);
// console.log(filteredUsers); // [{name: "John", age: 27}, {name: "Jane", age: 31}]

//Завдання 10:

// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum); // 15

//Завдання 11:

// Розроби клас Calculator, який дозволяє виконувати арифметичні
//  операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.

// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод substruct - Віднімає value від поточного значення. Повертає this.

// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод multiply -Множить поточне значення на value. Повертає this.

// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
// class Calculator {
//   constructor() {
//     this.value = 0;
//   }

//   number(value) {
//     this.value = value;
//     return this;
//   }
//   getResult() {
//     return this.value;
//   }
//     add (value) {
//       this.value += value;
//       return this;
//   }
//   subtract (value) {
//     this.value -= value;
//     return this;
//   }
//   divide (value) {
//     if (value === 0) {
//       throw new Error("Division by zero is not allowed");
//     }
//     this.value /= value;
//     return this;
//   }
//   multiply (value) {
//     this.value *= value;
//     return this;
//   }
// }

// // Приклад використання:
// const calc = new Calculator();

// const result = calc
//   .number(100)   // Встановлюємо початкове значення 10
//   .add(5)       // Додаємо 5 (10 + 5 = 15)
//   .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4)  // Множимо на 4 (12 * 4 = 48)
//   .divide(2)    // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

//   console.log(result); // 24

//Завдання 12:
// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

// class Client {
//   #login;
//   #email;
//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }
//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//Завдання 13:

//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

// class Person {
//   constructor(name, age, gender, email) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.email = email;
//   }
//   getDetails() {
//     return {
//       name: this.name,
//       age: this.age,
//       gender: this.gender,
//       email: this.email,
//     };
//   }
// }
// class Employee extends Person {
//   constructor(name, age, gender, email, salary, department) {
//     super(name, age, gender, email);
//     this.salary = salary;
//     this.department = department;
//   }
//   getEmployeeDetails() {
//     return {
//       salary: this.salary,
//       department: this.department,
//     };
//   }
// }

// Завдання 14:
// Напишіть функцію sayHi(), яка приймає в якості параметра масив імен,
// перебирає масив і додає до кожного ім'я привітання.
// Функція повертає новий масив  ["Ivan привіт!", "Maria привіт!", "Anna привіт!"]

// const names = ['Ivan', 'Maria', 'Anna'];
// const sayHi = (arr) => {
//   return arr.map((name) => `${name} привіт!`);
// };
// console.log(sayHi(names)); // ["Ivan привіт!", "Maria привіт!", "Anna привіт!"]

// Завдання 15:
// Перевірити чи містить даний масив, хоча б одне число більше 20.

// const numbers = [20, 16, 11, 13, 15];
// const hasGreaterThan20 = numbers.some((num) => num > 20);
// console.log(hasGreaterThan20); // false

// Завдання 16:
// Перевірити чи всі студенти старші 18 років.

// const students = [
//   { name: 'Alex', age: 17 },
//   { name: 'Stas', age: 18 },
//   { name: 'Mike', age: 22 },
//   { name: 'Den', age: 20 },
// ];
// const allOlderThan18 = students.every((student) => student.age > 18);
// console.log(allOlderThan18); // false

// Завдання 17:
// Напиши функцію, котра приймає масив користувачів і id.
// У масиві користувачів потрібно знайти людину з заданим id
// і повернути його ім'я. Якщо користувача не було знайдено
// функція повертає повідомлення
// "Користувача з таким id не знайдено"

// const users = [
//   {id: 1, name: "John"},
//   {id: 2, name: "Pete"},
//   {id: 3, name: "Mary"}
// ];
// const findUserById = (arr, id) => {
//   const user = arr.find((user) => user.id === id);
//   return user ? user.name : "Користувача з таким id не знайдено";
// };
// console.log(findUserById(users, 24)); // Користувача з таким id не знайдено
// console.log(findUserById(users, 2)); // Pete

// Завдання 18:
// Є масив студентів. Кожен студент має ім’я та оцінку. Напиши функцію, яка:
// знаходить студентів, у яких оцінка більша або дорівнює 90;
// створює з них список імен;
// повертає цей список у вигляді рядка, розділеного комами.
// const students = [
//   { name: "Оля", grade: 95 },
//   { name: "Іван", grade: 88 },
//   { name: "Марія", grade: 91 },
//   { name: "Андрій", grade: 78 },
//   { name: "Катя", grade: 90 },
// ];
// const getTopStudents = (arr) => {
//   const students = arr
//     .filter((student) => student.grade >= 90)
//     .map((student) => student.name);
//   return students.join(", ");
// };
// console.log(getTopStudents(students)); // Оля, Марія, Катя

// Завдання 19:
//Напишіть функцію getGirlsPassports() яка поверне масив номерів паспортів дівчат.

// const friends = [
//   {
//     passport: "03005988",
//     name: "Joseph Francis Tribbiani Jr",
//     age: 32,
//     sex: "m",
//   },
//   { passport: "03005989", name: "Chandler Muriel Bing", age: 33, sex: "m" },
//   { passport: "03005990", name: "Ross Eustace Geller", age: 33, sex: "m" },
//   { passport: "03005991", name: "Rachel Karen Green", age: 31, sex: "f" },
//   { passport: "03005992", name: "Monica Geller", age: 31, sex: "f" },
//   { passport: "03005993", name: "Phoebe Buffay", age: 34, sex: "f" },
// ];

// const getGirlsPassports = (arr) => {
//   return arr.filter((arr) => arr.sex === "f").map((arr) => arr.passport);
// };
// console.log(getGirlsPassports(friends)); // ["03005991", "03005992", "03005993"]

// // Напишіть функцію getTotalBoysYears() яка порахує загальний вік хлопців.
// const getTotalBoysYears = (arr) => {
//   return arr
//     .filter((arr) => arr.sex === "m")
//     .reduce((acc, arr) => acc + arr.age, 0);
// };
// console.log(getTotalBoysYears(friends)); // 99

//завдання 20:

// маємо масив об'єктів, який представляє список товарів і їх цін:
// Завдання: Знайдіть суму вартості всіх товарів, які коштують більше 10 гривень.
// const products = [
//   { name: 'Milk', price: 20 },
//   { name: 'Bread', price: 10 },
//   { name: 'Eggs', price: 15 },
// ];
// const totalPrice = products
//   .filter((product) => product.price > 10)
//   .reduce((acc, product) => acc + product.price, 0);
// console.log(totalPrice); // 35

// Завдання 21:
// Відсортувати імена активних користувачів (isActive: true). за алфавітом.
// const users = [
//   { id: 1, name: "Іван", isActive: true },
//   { id: 2, name: "Олена", isActive: false },
//   { id: 3, name: "Андрій", isActive: true },
//   { id: 4, name: "Світлана", isActive: false },
//   { id: 5, name: "Марія", isActive: true },
// ];
// const sortedActiveUsers = users
//   .filter((user) => user.isActive)
//   .toSorted((a, b) => a.name.localeCompare(b.name))
//   .map((user) => user.name);
// console.log(sortedActiveUsers); // ["Андрій", "Іван", "Марія"]

// Завдання 22:
// Маємо масив об'єктів, який представляє список замовлень:
// Завдання:
// Поверніть список товарів з усіх виконаних замовлень.
// const orders = [
//   { id: 1, products: ["Milk", "Bread"], status: "completed" },
//   { id: 2, products: ["Eggs", "Juice"], status: "processing" },
//   { id: 3, products: ["Pasta", "Spices"], status: "completed" },
// ];
// const completedProducts = orders
//   .filter((order) => order.status === "completed")
//   .flatMap((order) => order.products);

// console.log(completedProducts); // ["Milk", "Bread", "Pasta", "Spices"]

// Завдання 23:
// Порахуй загальну кількість лайків в категорії  Fashion
// const posts = [
//   { title: 'Post 1', likes: 20, category: 'Tech' },
//   { title: 'Post 2', likes: 45, category: 'Fashion' },
//   { title: 'Post 3', likes: 12, category: 'Tech' },
//   { title: 'Post 4', likes: 30, category: 'Fitness' },
//   { title: 'Post 5', likes: 15, category: 'Fashion' },
//   { title: 'Post 6', likes: 50, category: 'Tech' }
// ];
// const totalLikesFashion = (arr, type) => {
//   return arr
//     .filter((post) => post.category === type)
//     .reduce((acc, post) => acc + post.likes, 0);
// }
// console.log(totalLikesFashion(posts, 'Tech')); // 82
// console.log(totalLikesFashion(posts, 'Fashion')); // 60
// console.log(totalLikesFashion(posts, 'Fitness')); // 30

// Завдання 24:
//Напиши клас Rectangle який створює об'єкт
//з ​​властивостями height, width
//і методом calculateArea() для підрахунку прлощі прямокутника.
// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   calculateArea() {
//     return this.height * this.width;
//   }
// }
// const rectangle = new Rectangle(5, 10);
// console.log(rectangle.calculateArea()); // 50

// Завдання 25:
// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

// class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const client = new Client("ivan", "ivan@mail.com");
// console.log(client.login); // ivan
// console.log(client.email); //
// client.email = "ivanna@mail.com";
// console.log(client.email); //

// Завдання 26:
// Створи клас Phone який створює об'єкт з ​​властивістю price.
// Додай статичну властивість MAX_PRICE зі значенням 40000 - максимально допустима ціна телефону.
// Оголоси приватну властивість price доступ до якої буде через геттер та сеттер.
// Додай сетеру price перевірку значення параметра newPrice, що передається.Якщо воно більше за MAX_PRICE,
// сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну телефону.

// class Phone {
//   static MAX_PRICE = 40000;
//   #price;

//   constructor(price) {
//     this.price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice > Phone.MAX_PRICE) {
//       return;
//     }
//     else this.#price = newPrice;
//   }
// }
// const phone = new Phone(20000);
// console.log(phone.price); // 20000
// phone.price = 50000;
// console.log(phone.price); // 20000
// phone.price = 30000;
// console.log(phone.price); // 30000
// phone.price = 40001;
// console.log(phone.price); // 30000

// Завдання 27:

// Створіть клас Car, який має конструктор для зберігання марки та
// року виробництва автомобіля.
// 1. Додайте метод, який обчислює вік автомобіля на основі поточного року
// та року виробництва і виведе в кнсоль рядок `Вік автомобіля: age років`
// 2. Додайте перевірку, якщо вік автомобіля більше ніж 5 років, виводимо
// повідомлення "Автомобіль потребує технічного обслуговування."
// в іншому випадку - "Автомобіль не потребує технічного обслуговування зараз."
// 3. Додайте перевірку, якщо рік виробництва перевищює поточний рік,
// вивести повідомлення "Помилка: Рік виробництва не може бути пізнішим за поточний рік."

// class Car {
//   constructor(brand, year) {
//     this.brand = brand;
//     this.year = year;
//   }

//   getCarAge() {
//     const currentYear = new Date().getFullYear();
//     const age = currentYear - this.year;
//     console.log(currentYear)
//     console.log(`Марка автомобіля: ${this.brand}`);
//     console.log(`Рік виробництва автомобіля: ${this.year}`);
//     console.log(`Вік автомобіля: ${age} років`);

//     if (age > 5) {
//       console.log("Автомобіль потребує технічного обслуговування.");
//     }
//     else if (age < 0) {
//       console.log("Помилка: Рік виробництва не може бути пізнішим за поточний рік.");
//     } else
//       console.log("Автомобіль не потребує технічного обслуговування зараз.");
//   }
// }
// const car1 = new Car("Toyota", 2015);
// car1.getCarAge(); // Вік автомобіля: 8 років

// const car2 = new Car("Honda", 2020);
// car2.getCarAge(); // Вік автомобіля: 3 років

// const car3 = new Car("BMW", 2026);
// car3.getCarAge(); // Помилка: Рік виробництва не може бути пізнішим за поточний рік.

// Завдання 28:
// Створіть клас BankAccount, який має конструктор для зберігання
// номеру рахунку та балансу.
// Додайте методи:
// withdraw - метод для зняття готівки. Отримує в якості аргументу
// суму готівки котру потрібно зняти. Готівку можна зняти за умови,
// що баланс більше або дорівнює сумі, котру хоче зняти користувач.
// Виводить повідомлення: `Знято amount грн. Залишок на рахунку: balance грн.`
// або "Недостатньо коштів на рахунку."
// deposit - метод для пововнення балансу. Отримує в якості аргументу
// суму котру користувач хоче покласти на рахунок.
// Виводить повідомлення: `Поповнено amount грн. Залишок на рахунку: balance грн.`
// checkBalance - метод для перевірки балансу.
// Виводить повідомлення `Залишок на рахунку: balance грн.`

// class BankAccount {
//   constructor(accountNumber, balance) {
//     this.accountNumber = accountNumber;
//     this.balance = balance;
//   }
//   checkBalance() {
//     console.log(`Залишок на рахунку: ${this.balance} грн.`);
//   }
//   withdraw(amount) {
//     if (this.balance >= amount) {
//       this.balance -= amount;
//       console.log(`Знято ${amount} грн. Залишок на рахунку: ${this.balance} грн.`);
//     } else {
//       console.log("Недостатньо коштів на рахунку.");
//     }
//   }

//   deposit(amount) {
//     this.balance += amount;
//     console.log(`Поповнено ${amount} грн. Залишок на рахунку: ${this.balance} грн.`);
//   }
// }
// const account = new BankAccount("UA123456789", 1000);
// account.checkBalance(); // Залишок на рахунку: 1000 грн.
// account.withdraw(500); // Знято 500 грн. Залишок на рахунку: 500 грн.
// account.withdraw(600); // Недостатньо коштів на рахунку.
// account.deposit(200); // Поповнено 200 грн. Залишок на рахунку: 700 грн.
// account.checkBalance(); // Залишок на рахунку: 700 грн.
