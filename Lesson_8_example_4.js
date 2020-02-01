'use strict';

function getPerson (name, family, age) {
    const person = {
        name: name,
        family: family,
        age: age,

        sayHey () {
            console.log(`Hey i am ${this.name} ${this.family} ${this.age}`);
        },
    
        goToHome () {
            console.log('i go to home');
        }
    }
    return person;
}

const person_1 = getPerson('Teylor', 'Otwel', '34');
const person_2 = getPerson('Dara', 'Kara', '54');

person_1.sayHey();
person_2.sayHey();

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

const person = new Person(); // Person { name: undefined, family: undefined, age: undefined }
console.log(person);

const personF_1 = Person; // [Function: Person]
console.log(personF_1);
// const personF_2 = Person(); // return Error : this.name = name,
// console.log(personF_2);

const realPerson = new Person('Dan', 'Jban', 13);
console.log(realPerson);
console.log(realPerson.sayHey); // [Function]
console.log(realPerson.sayHey()); // undefined
realPerson.sayHey(); // Hello! i am Dan Jban i am 13 (nice)



/**
 * Это класс в js ES2015
 * @param {string} name
 * @param {string} family
 * @param {string} age
 */
class SuperPerson {
    constructor(name, family, age) {
        this.name = name,
            this.family = family,
            this.age = age;
        this.sayHey = () => {
            console.log(`Hello! i am ${this.name} ${this.family} i am ${this.age}`);
        };
    }
}
