'use strict';

const contract = (fn, ...types) => (...args) => {
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    const expected = types[i];
    const typeName = expected.name.toLowerCase();
    if (typeof arg !== typeName) {
      throw new TypeError(`Argument type ${typeName} expected`);
    }
  }
  const result = fn(...args);
  const expected = types[types.length - 1];
  const typeName = expected.name.toLowerCase();
  if (typeof result !== typeName) {
    throw new TypeError(`Result type ${typeName} expected`);
  }
  return result;
};

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(2, 3);
console.dir(res);

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res1 = concatStrings('Hello ', 'world!');
console.dir(res1)
