'use strict';

const sum = (...args) => {
    let result = 0;
    let i = 0;
    while ( i < args.length) {
        result += args[i];
        i++;
    }
    return result;
};

console.log(sum(1,2,3,4,5));
console.log(sum(1,2,3,4,5,6,7,8,9,10));