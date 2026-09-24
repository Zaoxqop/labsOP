'use strict';


const phoneBoook = [
    {name: "Marcus", phone: "+380445554433"},
    {name: "Roma", phone: "+380448884433"},
    {name: "Timur", phone: "+380447774433"}
];

const findPhoneByName = (name) => {
    for (const person of phoneBoook){
        if (person.name === name){
            return person.phone;
        };
    }
};

console.log(findPhoneByName("Timur"));
console.log(findPhoneByName("Marcus"));
console.log(findPhoneByName("Roma"));

const phoneBoookCollection = {
    Marcus: "+380445554433",
    Roma: "+380448884433",
    Timur: "+380447774433",
};

const findPhoneByNameCollection = (name) => {
    return phoneBoookCollection[name];
};

console.log(findPhoneByNameCollection("Timur"));
console.log(findPhoneByNameCollection("Marcus"));
console.log(findPhoneByNameCollection("Roma"));