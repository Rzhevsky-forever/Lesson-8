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
items[0].hold(1);
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

// Задание 2
const discountItemPrototype = {
    finalPrice : 0,
    getFinalPrice (cost  = 0)
    {
        let discount = this.discount / 100;
        this.finalPrice = this.price - (this.price * (this.discount / 100));
    }
}

// 2-2
// Объявляем прототип
const finalPrice = {
    get finalPrice()
    {
        return this.price - (this.price * (this.discount / 100));
    },

    set finalPrice(value) {
        this.discount = value < this.price 
        ? 100 - ((value * 100) / this.price) 
        : `Сумма должна быть меньше базовой цены - ${this.price}`;
        
        this.price = value > this.price
        ? this.price
        : this.price = value;
    },

    toString() {
        return this.finalPrice;
    }
}

function createDiscountItem(position) {
    const discountItem =  Object.create(finalPrice);
    Object.assign(discountItem, position); // Как еще можно сделать?
    return discountItem;
}

const discountItems = [];
for (let position of positions) {
    discountItems.push(createDiscountItem(position)); 
}


console.log('Задача 2 :');
console.log(`Базовая цена с учётом скидки : ${discountItems[0].finalPrice}`);
discountItems[0].finalPrice = 369;
console.log('Отработал скрипт')
console.log(
    `Скида стала : ${discountItems[0].discount}, Цена стала : ${discountItems[0].price}`
);


// Задание 3
console.log('Задача 3');
let requiredFields = [ 'title', 'price', 'discount' ];

let form1 = {
    title: 'Товар Телепорт бытовой VZHIH-101',
    price: 7800,
    discount: 0
};
let form2 = {
    title: 'Товар Телепорт бытовой VZHIH-101',
    discount: 10
}

function isValidPosition (item = 0, requiredFields) {
    requiredFields.forEach(function(requiredField) {
        if (requiredField in item != true) 
            throw new Error ('В форме не заполнены необходимые поля');
    });
    return console.log('Форма заполнена верно');
}

try {
    isValidPosition(form2, requiredFields);
}
catch (e) {
    console.log('В форме не заполнены необходимые поля');
}