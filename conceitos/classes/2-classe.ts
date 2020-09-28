'use strict'

function Person(initialName) {
    let name = initialName;

    this.getName = function() {
        return name;
    }

    this.setName = function(newName){
        name = newName;
    }
}


const p = new Person('Guilherma');


console.log(p);

console.log(p.getName());

console.log(p.name);

p.setName('Thiago');

console.log(p.getName());