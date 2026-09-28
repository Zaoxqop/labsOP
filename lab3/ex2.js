'use strict';

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-=+_';

const generateKey = (length, characters) => {
    let randomChar = '';
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * characters.length);
        randomChar += characters[index]; 
    }
    return randomChar;
};

console.log(generateKey(16, characters));
console.log(generateKey(10, characters));

