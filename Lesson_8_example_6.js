'use strict';

/**
 * Это класс в js
 * @param {string} name 
 * @param {string} family 
 * @param {string} age 
 */
function Person (name, family, age) {
    this.name = name,
    this.family = family,
    this.age = age

    this.sayHey = () => {
        console.log(`Hello! i am ${this.name} ${this.family} i am ${this.age}`);
    }
}

const person_1 = new Person('Ivanov', 'Ivan', 15);
const person_2 = new Person('Petrov', 'Petr', 23);

Person.prototype.sayHey = function sayHello() {
    console.log(this); // Так можно проверить доступен ли контекст и что там есть
}

Person.prototype.sayHey = function sayHello() {
    console.log(`Hello! i am ${this.name} ${this.family} i am ${this.age}`);
}

console.log(person_1.sayHey); // [Function: sayHello]
console.log(person_1);
person_1.sayHey();
console.log(person_2.sayHey); // [Function: sayHello]
console.log(person_2);
person_2.sayHey();

console.log(person_1.sayHey === person_2.sayHey); // false
console.log(person_1.prototype === person_2.prototype); // true
console.log(person_1.prototype === Person.prototype); // false
console.log(Person.prototype.sayHey === person_1.sayHey); // false


person_1.sayHey();
console.log(person_1);
person_2.sayHey = function sayYo() {
    console.log(`Yo i am ${this.name} `);
}
console.log(person_2);
