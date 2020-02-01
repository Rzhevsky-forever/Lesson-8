'use strict';

const person_1 = {
    name: 'Wer',
    family: 'Ber',
    age: 84,

    sayHey () {
        console.log(`Hey i am ${this.name} ${this.family} ${this.age}`);
    },

    goToHome () {
        console.log('i go to home');
    }
}

const person_2 = 'Pasha Pupkin';

const person_3 = {
    name: 'Zara',
    family: 'Mara',
    age: 23,

    sayHey () {
        console.log(`Hey i am ${this.name} ${this.family} ${this.age}`);
    },

    goToHome () {
        console.log('i go to home');
    }
}

person_1.sayHey();
person_3.sayHey();