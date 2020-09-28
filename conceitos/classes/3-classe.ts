
'use strict';

class Person {
    #name = '';

    constructor(initialName){
        this.#name = initialName;
    }

    setName(name) {
        this.#name = name;
    }

    getName(){
        return this.#name;
    }
}

const p = new Person('Mariana');

console.log(p);
// Person {}

console.log(p.getName());
// "Guilherme"

console.log(p.name);
// underfined

p.setName('Thiago');
console.log(p.getName());

// Thiago