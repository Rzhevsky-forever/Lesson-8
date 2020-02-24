'use strict';

class Person {
    constructor (name, family, age) {
        this.name = name
        this.family = family
        this.age = age

        Person.count +=1;
    }

    sayHello () {
        console.log(`Hello! i am ${this.name} ${this.family} i am ${this.age}`);

        Person.count; 
    }

    goToHome () {
        console.log ('I am go to home');
    }
}

Person.count = 0;

Person.prototype.address = 'not define';

const person1 = new Person ('Fedy', 'Pupkin', 33);
const person2 = new Person ('Zoya', 'Kukushkina', 54);

person1.sayHello(); // Hello! i am Fedy Pupkin i am 33
console.log(person1);
console.log(Person.count);
console.log(person1.address);