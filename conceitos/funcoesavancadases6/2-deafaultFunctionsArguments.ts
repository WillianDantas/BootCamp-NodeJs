function multiply(a, b){
    b = b || 1;
    return a * b;
}

console.log('\n multiply');
console.log(multiply(5, 5));
console.log(multiply(5));
console.log(multiply(5,0));

function multiplyLogico(a, b){
    b = typeof b === 'undefined' ? 1 : b;
    return a * b;
}

console.log('\n multiplyLogico');
console.log(multiplyLogico(5, 5));
console.log(multiplyLogico(5));
console.log(multiplyLogico(5, 0));


function multiplyPadrao(a, b = 1){
    return a * b;
}


console.log('\n multiplyPadrao');
console.log(multiplyPadrao(5, 5));
console.log(multiplyPadrao(5));
console.log(multiplyPadrao(5, 0));


function multiplyAtribuicao(a, b = a){
    return a * b;
}


console.log('\n multiplyAtribuicao');
console.log(multiplyAtribuicao(5, 5));
console.log(multiplyAtribuicao(5));
console.log(multiplyAtribuicao(5, 0));


// lazy evaluation
function randoNumber(){
    console.log('Generating a random numer...')
    return Math.random() * 10;
}

function multiplyRandom(a, b = randoNumber()){
    return a * b;
}

console.log(randoNumber());
console.log(multiplyRandom(5));
console.log(multiplyRandom(5));