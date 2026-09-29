'use strict';

const sum = (...args) => {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        const number = args[i];
        result += number;
    }
    return result;
};

console.log(sum(1,2,3,4,5));
console.log(sum(1,2,3,4,5,6,7,8,9,10));


