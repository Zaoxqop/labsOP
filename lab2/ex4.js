'use strict';


const fn = () => {
    const obj1 = {name: "Marcus"};
    let obj2 = {name: "Roma"};

    obj1.name = "Marcus Aurelius"; //значення поля name зміниться
    obj2.name = "Roma Aurelius";   //значення поля name зміниться

    
    //obj1 = {name: "Marcus Aurelius Bonapetito"};
    //Помилка через те, що ми не можемо змінювати значення константої
    obj2 = {name: "Roma Aurelius Bonapetito"};
    //Спрацьовує, так як obj2 - змінна
    

    console.dir(obj1);
    console.dir(obj2);
};

fn();


const createUser = (name, city) => {
    return {name, city};
};

console.dir(createUser("Roma","Kyiv"));