/*
1. Rest e Spread Operator
2. Destructuring
*/

// Jeito antigo
function soma(a, b){
    var value = 0;

    for(var i = 0; i < arguments.length; i++){
            value  += arguments[i];
    }

    return value;
}

console.log(soma(5, 5, 5, 2, 3));

// Jeito Rest Operation

function somaRest(...args){
    return args.reduce((acc, value) => acc += value);
}

console.log(somaRest(5, 5, 5, 2, 3));

const somaRestArrow = (a, b, ...rest) => {
    console.log(a, b, rest);
};


somaRestArrow(5, 5, 5, 2, 3);


const multiply = (...args) =>  args.reduce((acc, value) => acc  *  value, 1);


// Spred Operation

const SpredSoma = (...rest) => {
    return multiply(...rest);
}

console.log(SpredSoma(5, 5, 5, 2, 3));

// strings, arrays e  objetcs e objetos iteraveis

const str = 'Digital Innovation One';
const arr = [1, 2, 3, 4];

function losArgs(...args){
    console.log(args);
}

function argsLog(a, b, c){
    console.log(a, b, c);
}

// Array
argsLog(...arr);

// String
losArgs(...str);

const arr2 = [...arr, 5, 6, 7];

console.log(arr2);


const arrClone = [...arr];

console.log(arrClone);

const obj = {
    test: 123
};

const obj2 = {
    ...obj,
    test2: 'hello'
};


console.log(obj2);

// Objeto

const objetos = {
    test: 123
}

const objetos2 = {
    test: 456
}


const objMerged = {
    ...objetos,
    ...objetos2
}

console.log(objMerged);

















