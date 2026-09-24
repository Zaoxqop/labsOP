'use strict';


const range = (startNumber, endNumber) => {
    let array = [];
    for (let number = startNumber; number <= endNumber; number++){
        array.push(number);
    }
    return array;
}

console.log(range(10,30));

const rangeOdd = (startNumber, endNumber) => {
    const array = range(startNumber, endNumber);
    let arrayFinal = [];
    for (const number of array){
        if (number % 2 !== 0){
            arrayFinal.push(number);
        };
    }
    return arrayFinal;
};

console.log(rangeOdd(10,30));