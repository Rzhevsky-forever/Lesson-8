'use strict';

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


// 2-2
// Объявляем прототип
const finalPrice = {
    toString() {
        return this.finalPrice;
    }
}

const finalPriceConfig = {
    get : function ()
    {
        return this.price - (this.price * (this.discount / 100));
    },

    set : function (value) {
        this.discount = value < this.price 
        ? 100 - ((value * 100) / this.price) 
        : `Сумма должна быть меньше базовой цены - ${this.price}`;
        
        this.price = value > this.price
        ? this.price
        : this.price = value;
    },
}

for (let position of positions) {
    // discountItems.push(createDiscountItem(position)); 
    Object.defineProperty(position, 'finalPrice', finalPriceConfig);
}


console.log('Задача 2 :');
console.log(`Базовая цена с учётом скидки : ${positions[0].finalPrice}`);
positions[0].finalPrice = 369;
console.log('Отработал скрипт')
console.log(
    `Скида стала : ${positions[0].discount}, Цена стала : ${positions[0].price}`
);

/**
 * 
 * В вашем комментарии к моему рещению есть :
 * 
 * “Если задать конечную цену, 
 * большую, чем базовая цена, 
 * должно бросаться исключение с пояснением причины.”
 * 
 * Прошу пояснить, что значит здесь "бросаться исключение"?
 * 
 */