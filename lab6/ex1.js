'use strict';

const pipe = (...fns) => {
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new Error('All arguments should be functions');
    }
  }
  return (x) => fns.reduce((value, fn) => fn(value), x);
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = pipe(inc, twice, cube);
const x = f(5);

console.log(x);