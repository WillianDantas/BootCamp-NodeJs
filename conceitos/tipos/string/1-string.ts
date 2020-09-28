// Retorna o tamanho de uma string
const textSize = 'Texto'.length;
console.log(`Quantidade de letras : ${textSize}`);

// Retorno um array quebrado a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log('\nArray com as posições separadas pelo delimitador:', splittedText);

// Busca por um valor e substiui por outro
const replacedText = 'Texto'.replace('Text', 'txet');
console.log('\nSustituição de valor:', replacedText);

//
const Texto = 'Texto e Texto'.replace('Texto', 'Letra');
console.log("\n substituir",Texto);

// Retorna  "fatia" de um valor 
const  lastChar = 'Texto'.slice(-1);
console.log('\núltimo letra de uma string:', lastChar);

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log('\nValor da string da primeira letra menos a última:', allWithoutLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log('\nValor da string da segunda letra até a última:', secondToEnd);

// Retorna N caracters a partir de uma posição
const twotCharsBeforeFirsPos =  'Texto'.substr(0, 2);
console.log('\nAs duas letras primeiras letras são:', twotCharsBeforeFirsPos);

const myNumber = 12.4032;

// Transforma número para string
const numberAsString = myNumber.toString();
console.log('\nNúmero transformado em string: ', typeof numberAsString);

// Retorna número com um número dde casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNúmero com duas casa decimais:', fixedTwoDecimals);

// Transforma uma string em float
console.log('\nString parsada para float:', parseFloat('13.22'));

// Transforma uma string em int
console.log('\nString parsada para int:', parseInt('13.20'));