var log = function (value){
    console.log(value);
};


log('teste');


var sum = function(a, b){
    return a + b;
};

console.log(sum(5,5));


// Arrow functions

var sumArrow  = (a, b) => {
    return  a + b;
}

console.log(sumArrow(5,15));


var soma = (a, b) => a + b;

console.log(soma(1,2));

var s = (a) => a + 5;
console.log(s(5));

var sum1 = (...a) => a;
console.log(sum1(5, 25, 6));

var createObj = () => ({ test: 123});
console.log(createObj());


var Car = function(){
     this.foo = 'bar 2';
}

console.log(new Car());



var Car2 = () => {
    return 'bar 2';
}


console.log(Car2()); // Erro


var obj = {
    showContext: function () {
            this.log('Timeout');
            setTimeout(function(){
                this.log('after 1000ms');
            }.bind(this), 1000)
    },
    log : function (value){
        console.log(value);
    }
}


obj.showContext();

// this do Arrow function se relaciona ao contexto dentro dele
var obj2 = {
    showContext: function () {
            this.log('Timeout');
            setTimeout(() => {
                this.log('after 1000ms');
            }, 1000)
    },
    log : function (value){
        console.log(value);
    }
}


obj2.showContext();















