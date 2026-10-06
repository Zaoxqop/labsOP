'use strict';

const unique = (arr) => {
    let res = [];
    for (const item of arr){
        if (!res.includes(item)) res.push(item);
    }
    return res;
};

const result = unique([2, 1, 1, 3, 2]);
console.log(result);

const result2 = unique(['top', 'bottom', 'top', 'left']);
console.log(result2);