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