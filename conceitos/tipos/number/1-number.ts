const myNumber = 1.4032;

// Transformar número para string
const numberAsString = myNumber.toString();
console.log('Número transformado em string:', typeof numberAsString);

// Retorna número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNúmero com duas casa decimais:', fixedTwoDecimals);

// Transforma uma string em float
console.log('\nString parsada para float:', parseFloat('13.22'));

//Transforma  uma string em int 
console.log('\nString parsada para int', parseInt('13.20'));


