// console.log((new String('foo')).toString);
// console.log(['foo', 'bar'].toString);

let john = {
    name: 'John',
    age : 99,
}
//Тип : object , строка : [object Object]

let user = {
    name: 'John',
    age : 99,
    toString () {
        return 'Привет!';
    }
}
// Тип : object , строка : Привет!

let example = {
    name : 'foo',
    age : 13
}
example.toString = function() {};
// Тип : object , строка : undefined

let masha = 'Masha';

function showInfo (val) {
    let type = typeof val;
    console.log(`Тип : ${type} , строка : ${val}`);
}

showInfo (john);
showInfo (user);
showInfo (example);
showInfo (masha);

console.log(user.toString);

function compare (obj1, obj2) {
    let result = obj1 === obj2 ? 'идентичны' : 'разные';
    console.log(result);
}

compare ([].toString, {}.toString); // разные
compare ([].toString, [].toString); // идентичны
compare ({}.toString, {}.toString); // идентичны

let user_3 = {name : 'Вася', age : '44'};
console.log (user_3.hasOwnProperty('age'));
console.log (user_3.hasOwnProperty('toString'));

function checkProp(obj, propName) {
    var has = propName in obj ? 'есть' : 'нет';
    var own = obj.hasOwnProperty(propName) ? 'собственное' : 'прототипа';
    console.log(`Свойство ${propName} ${has}`);

    if (propName in obj) {
        console.log(`Свойство ${propName} ${own}`);
    }
}

let user_4 = {name : 'Паша', age : '123'};

checkProp(user_4, 'valueOf');
checkProp(user_4, 'toString');
checkProp(user_4, 'hasOwnProperty');
checkProp(user_4, 'name');
checkProp(user_4, 'age');
checkProp(user_4, 'phone_number');

const protoUser = {
    show() {
        console.log(`Пользователь ${this.getFullName()},
        возраст ${this.age} лет`);
    },
    getFullName() {
        return `${this.name} ${this.lastName}`
    }
};

let customUser = Object.create(protoUser);

customUser.age = 67;
customUser.name = 'Степашка';
customUser.lastName = 'Хрюшкин';

customUser.show();
console.log(customUser.getFullName());