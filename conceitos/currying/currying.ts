function soma (a = 0){
    let soma = 0;

    return function(b = 0){
        soma = a + b;
        console.log(soma);
    }
}

const s = soma(2);

s(2);
s(3);
s(4);
s(5);


function sum (a){
    return function(b){
        return a + b;
    }
}


const s2 = sum(2);

console.log(s2(2));
console.log(s2(3));
console.log(s2(4));
console.log(s2(5));

console.log("Digitar em varias linha crtl + shift + alt + seta");