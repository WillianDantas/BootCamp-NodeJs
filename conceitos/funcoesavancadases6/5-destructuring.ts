// Destructuring Assgnmet

var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

// Utilizando Destructuring Assgnmet

var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['Tomato']];



console.log(apple, apple2);
console.log(tomato2);


// Caso de erro
/*
var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange'];

console.log(tomato2);

*/


// Caso de undefined

var [apple2, banana2, orange2] = ['Apple', 'Banana'];

console.log(orange2);

//Fazer com objeto

var obj = {
    name: 'Marian',
    props: {
        age : 26,
        favoriteColors: ['black', 'white', 'blue']
    }
};

var name = obj.name;

// Utilizando Destructuring Assgnmet

var {name} = obj;
var {
    name: name2
} = obj;

var {
    props: {
        age : age2,
        favoriteColors: [color1, color2, color3]
    }
} = obj;

console.log(name);
console.log(`Modelo 2º ${name2}`);


var age = obj.props.age;
// var color1 = obj.props.favoriteColors[0];

console.log(`Por variável ${age}`);

console.log(`Por objeto value age : ${age2}`);

console.log(`Por objeto value color :  ${color1}`);

///

var fruit = [{ name: 'Apple', type: 'fruit'}];

var [{name}] = fruit;
var [{name: fruitName}] = fruit;

console.log(`\nFruit value : ${name}`);
console.log(`\nFruitName value : ${fruitName}`);

// functions

function  sum(arr) {
    return arr[0] + arr[1];
}

function sumModule2([a, b] = [0, 0]){
    return a + b;
}

function sumModule3({a, b}){
    return a + b;
}



console.log(`\nSoma : ${sum([5,5])}`);
console.log(`\nSoma module 2º : ${sumModule2([5, 10])}`);
console.log(`\nSoma module 2º vazio : ${sumModule2()}`);
console.log(`\nSoma module 3º : ${sumModule3({a: 5, b: 5})}`);






