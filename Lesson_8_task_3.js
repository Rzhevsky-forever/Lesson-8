// Задание 3
'use strict';

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
let form3 = {
    title: 'Товар Телепорт бытовой VZHIH-101',
    discount: 10,
    quantity:15
}
let form4 = {
    title: 'Товар Телепорт бытовой VZHIH-101',
    discount: 10,
    quantity:15,
    price: 7800,
}


function isValidPosition (form = 0, requiredFields, results = []) {
    requiredFields.forEach(function(requiredField) {
        if (requiredField in form) {
            results[results.length] = true;
        } else {
            results[results.length] = false;
        }
    });

    return results.includes(false) ? false : true;
}



if (isValidPosition(form1, requiredFields)) 
{
    console.log('Форма № 1 заполнена верно');
}
else
{
    console.log('В форме № 1 не заполнены необходимые поля');
}

if (isValidPosition(form2, requiredFields)) 
{
    console.log('Форма № 2 заполнена верно');
}
else
{
    console.log('В форме № 2 не заполнены необходимые поля');
}

if (isValidPosition(form3, requiredFields)) 
{
    console.log('Форма № 3 заполнена верно');
}
else
{
    console.log('В форме № 3 не заполнены необходимые поля');
}

if (isValidPosition(form4, requiredFields)) 
{
    console.log('Форма № 4 заполнена верно');
}
else
{
    console.log('В форме № 4 не заполнены необходимые поля');
}