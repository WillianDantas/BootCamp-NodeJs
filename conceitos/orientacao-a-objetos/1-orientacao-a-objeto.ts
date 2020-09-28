'use strict';

const myText = String('Hello prototype');

myText.split('');

console.log(myText);
console.log(myText.__proto__.split);
console.log(String.prototype.split);
console.log(myText.__proto__.split === String.prototype.split);
console.log(myText.constructor === String);

console.log('__proto__ -> prototype -> constructor');
console.log('myText.constructor -> String');
console.log('myText.__proto__ -> String.prototype');


function Animal() {
     this.qtdePatas = 4;
}

function Cachorro(morde){
     Animal.call(this, 4);
     this.morde = morde;
}

const cachorro = new Animal();
console.log(cachorro.qtdePatas);

console.log(cachorro.__proto__ === Animal.prototype);

console.log(Animal.__proto__ === Function.prototype);


console.log(cachorro instanceof Animal);
console.log(cachorro instanceof Function);

const pug = new Cachorro(false);
console.log(pug);





