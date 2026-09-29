'use strict';

const sum = (...args) => {
    return args.reduce((acc, number) => {
        return acc + number;
    }, 0);
};

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));