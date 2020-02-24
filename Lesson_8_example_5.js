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
person_1.sayHey();
person_2.sayHey();

Person.prototype.car = 'Volga';

person_1.car = 'bmw';
console.log(person_1.car);
console.log(person_1);

console.log(person_2.car);
console.log(person_2);