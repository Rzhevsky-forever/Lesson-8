'use strict';

// 2.2 «Прототип и конструктор объекта»

var positions = [
    {
        title: 'Телепорт бытовой VZHIH-101',
        price: 10000,
        discount: 7,
        available: 3
    },
    {
        title: 'Ховерборд Mattel 2016',
        price: 9200,
        discount: 4,
        available: 14
    },
    {
        title: 'Меч световой FORCE (синий луч)',
        price: 57000,
        discount: 0,
        available: 1
    }
];


// Формулировка конструктора
const itemPrototype = {
    hold(amount = 1) {
        if (this.available < amount) {
            return false;
        }
        this.available -= amount;
        this.holded += amount;
        return true;
    },
    toString() {
        return `${this.title} (остаток ${this.available}, в резерве ${this.holded})`;
    }
};

// Функция создания инстанции по прототипу
function createItem(title, amount) {
    const item = Object.create(itemPrototype);
    item.title = title;
    item.available = amount;
    item.holded = 0;
    return item;
}

// Создаем массив инстанций по прототипу. Берем каждый элемент из positions 
// и делаем из него объект 
const items = [];
for (let item of positions) {
    items.push(createItem(item.title, item.available));
}

// Резервируем товары
items[0].hold(2);
items[1].hold(8);
items[1].hold(12);
items[2].hold(1);

// Печатаем
for (let item of items) {
    console.log(`Товар ${item}`);
}

// Задание 1

// Опишем функциональность unhold (удбрать из резерва)
const unhold = {
    unhold(amount = 1) {
        if (this.holded < amount) {
            return false;
        }
        this.holded -= amount;
        this.available += amount;
        return true;
    },
};

// Добавим ко всем объектам
for (let item of items) {
    item = Object.assign(item, unhold);
}

// Отменяем резервы
console.log('Отменяем резервы : ');
items[0].unhold(1);
items[1].unhold(4);
items[1].unhold(12); // не выполнится т.к. в резерве всего 8
items[2].unhold(1);
items[2].unhold(-20); // не баг а фича = )

// Печатаем
for (let item of items) {
    console.log(`Товар ${item}`);
}

/*
* Вопрос проверяющему
*
*/ 
// console.log(items[0]);
    // { title: 'Телепорт бытовой VZHIH-101',
    //   available: 1,
    //   holded: 2,
    //   unhold: [Function: unhold] }

// Не вывел hold. Но :

// items[0].hold(1);
// console.log(items[0]);
    // { 
    //   title: 'Телепорт бытовой VZHIH-101',
    //   available: 0,
    //   holded: 3,     -> Зарезервировал товар, хотя выше метод не вывел
    //   unhold: [Function: unhold] 
    // }

// Дальше пробую добавить поле более простым способом
// const foo = {
//     bar() {
//         console.log(this.unhold);
//     },
//     mar : 'qwe'
// };

// items[0].foo = foo;

// console.log(items[0]);
// console.log(Object.prototype.isPrototypeOf(items[0]));
// console.log(itemPrototype.isPrototypeOf(items[0]));
    // { title: 'Телепорт бытовой VZHIH-101',
    //   available: 0,
    //   holded: 3,
    //   unhold: [Function: unhold],
    //   foo: { bar: [Function: bar], mar: 'qwe' } }
    // true
    // true
    // Но снова не вижу методоа hold

// Меня это ставит в тупик. Прошу пояснить что там происходит


// Задание 2

const discountItemPrototype = {
    finalPrice : 0,
    getFinalPrice (cost  = 0)
    {
        let discount = this.discount / 100;
        if (cost) {
            // doing some
        }
        this.finalPrice = this.price - (this.price * (this.discount / 100));
        // return price - (price * discount);
    }
}

// function createDiscountItem(position) {
//     const discountItem =  Object.create(discountItemPrototype);
//     Object.assign(discountItem, position);
//     return discountItem;
// }

// const discountItems = [];
// for (let position of positions) {
//     discountItems.push(createDiscountItem(position));
// }

// console.log('discountItems :');
// discountItems[0].getFinalPrice() // -------------------------- РАБОТАЕТ!!
// console.log(discountItems[0]);

// 2-2
const finalPrice = {
    get finalPrice()
    {
        return this.price - (this.price * (this.discount / 100));
    },

    set finalPrice(value){
        this.finalPrice = value;
    },

    toString() {
        return this.finalPrice;
    }
}

function createDiscountItem(position) {
    const discountItem =  Object.create(finalPrice);
    Object.assign(discountItem, position);
    return discountItem;
}

const discountItems = [];
for (let position of positions) {
    discountItems.push(createDiscountItem(position));
}


console.log('discountItems :');
console.log(discountItems[0].finalPrice); // - РАБОТЕТ НО КАК НЕ ПОНЯЛ




// =========================   OLD CODE  =================================

// let foo = Object.create(sellProto);

// Object.assign(foo, positions[0]);
// console.log('foo :');
// console.log(foo);
// console.log(foo.getFinalPrice);
// foo.getFinalPrice() // -------------------------- РАБОТАЕТ!!
// console.log(foo.finalPrice);
// console.log( sellProto.isPrototypeOf(foo) );
// console.log('END foo :');


// console.log('Print discount :');
// console.log(positions[0].finalPrice);

// positions[0].discount = 50;
// // positions[0].finalPrice = positions[0].getFinalPrice();
// console.log(positions[0].finalPrice);




// function getFinalPrice (price = false, discount = false, cost  = false)

// function getFinalPrice (price = this.price, discount = this.discount, cost  = 0)
// {
    //     discount = discount / 100;
    //     if (cost) {
        //         // doing some
        //     }
        //     return price - (price * discount);
        // }
        
        // function setFinalPrice (item)
        // {
            //     let finalPrice = item.price - (item.price * (item.discount / 100));
            //     return finalPrice;
            // }
            
            // for (let item of positions) {
                //     // item.getFinalPrice = getFinalPrice;
                //     // item.finalPrice = item.getFinalPrice();
                //     item.finalPrice = setFinalPrice(item);
                // }