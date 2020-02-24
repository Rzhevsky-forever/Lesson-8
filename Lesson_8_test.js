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

console.log(items[0]);