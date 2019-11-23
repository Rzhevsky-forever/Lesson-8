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

let masha = 'Masha';

function showInfo (val) {
    let type = typeof val;
    console.log(`Тип : ${type} , строка : ${val}`);
}

showInfo (john);
showInfo (user);
showInfo (masha);