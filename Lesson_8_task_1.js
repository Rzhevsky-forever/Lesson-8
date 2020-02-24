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
const unhold = function unhold (amount) 
{
    if (!(amount)) {
        this.available = this.available + this.holded;
        this.holded = 0;
        return false;
    }
    if (this.holded < amount) {
        return false;
    }
    if (amount < 0) {
        return false;
    }
    this.holded -= amount;
    this.available += amount;
    return true;
};

// Добавим ко всем объектам
for (let item of items) {
    // item = Object.assign(item, unhold);
    item.unhold = unhold;
}

// Отменяем резервы
console.log('Отменяем резервы : ');
items[0].unhold(1);

items[1].unhold(4);
items[1].unhold(12); // не выполнится т.к. в резерве всего 8

items[2].unhold(1);
items[2].unhold(-20); // нельзя задать отрецательное число
items[2].unhold(); // 

// Печатаем
for (let item of items) {
    console.log(`Товар ${item}`);
}