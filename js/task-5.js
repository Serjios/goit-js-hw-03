'use strict';

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function(arr, prop) {
  const result = [];

  //   eslint-disable-next-line
  for (const key of arr) {
    if (prop === 'name') {
      result.push(key.name);
    } else if (prop === 'price') {
      result.push(key.price);
    } else if (prop === 'quantity') {
      result.push(key.quantity);
    }
  }
  return result;
};

console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []
