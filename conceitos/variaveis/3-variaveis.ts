const usuario  = 'Mariana Vieira';

// Não podemos alterar o valor 
//name = 'Marcelle';

console.log(usuario);

const user = {
    name : 'Mariana Vieira'
};

// Mas se for um objeto podemos trocar suas propriedades
user.name = 'Outro nome';

console.log(user.name);

// Não podemos faer o objeto "apontar" para outro lugar
// user = {
//     name: 'Guilherme'
// };

const persons = ['Guilherme', 'Pedro', 'Jennifer'];

// Podemos adicionar novos itens
persons.push('Mariana Vieira');

// Podemos remover algum item
persons.shift();

// Podemos alterar diretamente
persons[1] = 'James';

console.log('\nArray após as alterações: ', persons);

// Tipos de variáveis
console.log('string');
console.log('number');
console.log('boolean');
console.log('null');
console.log('undefined');
console.log('symbol');
console.log('Object');
console.log('Fuction');
console.log('Array');