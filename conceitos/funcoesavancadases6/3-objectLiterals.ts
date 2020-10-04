function method (){
    console.log('method called');
}


var prop = 'Digital Innovation One';

var propName = 'proName';

var obj = {
    prop : prop,
    sum(a, b){
        return a + b;
    }
}

var obj1 = {
    [propName + 'concat'] : 'value concat'
};

obj1[propName] = 'prop values';

console.log(obj);
console.log(obj.sum(5,5));
console.log(obj1);
console.log(obj1.proNameconcat);

var proposta = {
    prop,
    method
}

// Colocando variavel ES6
console.log(proposta);

proposta.method();
