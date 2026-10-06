'use strict';

const difference = (arr1, arr2) => {
  const res = [];
  for (const item of arr1) {
    if (!arr2.includes(item)) {
      res.push(item);
    }
  }
  return res;
};

const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const result = difference(array1, array2);
console.log(result);

const array12 = ['Beijing', 'Kiev'];
const array22 = ['Kiev', 'London', 'Baghdad'];
const result2 = difference(array12, array22);
console.log(result2);