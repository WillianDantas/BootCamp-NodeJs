let array = [1, 2, 3, 2, 4, 2, 5, 3];
let models = [];

for(var i = 0; i < array.length; i ++){
    if( array.indexOf(array[i]) === i){
        models.push(array[i]);
    }
}

console.log(models);


//versão simplificada

var uniqueProduts = array.filter((elem, i , array) => array.indexOf(elem) === i);

console.log(uniqueProduts);


