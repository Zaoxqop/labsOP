'use strict';


const average = (a,b) => {
    const result = (a+b)/2;
    return result;
};

const square = x => x**2;
const cube = x => x**3;


const calculate = () => {
    let number = 0;
    const numberArray = [];

    while (number <= 9) {
        const avg = average(square(number), cube(number));
        numberArray.push(avg);
        number++;
    }

    return numberArray;
};

console.log(calculate());