//const divs = document.querySelectorAll('div'); // ArrayNodelist
//const arr = Array.from(divs); // Transforma em array

let frutas = Array.of('Laranja', 'Maça', 'Banana'); // Criar um array

console.log(frutas);


console.log(frutas.push("melancia"));

console.log(frutas);

console.log(frutas.pop());  // remove ultimo elemento do array;


console.log(frutas.unshift("Abacaxi")); // adiconar no inicio do array

console.log(frutas.shift()); // remove no inicio

console.log(frutas);

let mergeFrutas = ["Melão", "Abacate"];
console.log(frutas.concat(mergeFrutas)) // merge entre duas lista

console.log(frutas.slice(0));
console.log(frutas);

console.log(frutas.slice(2));
console.log(frutas);

console.log(frutas.slice(-1));
console.log(frutas);

console.log(frutas.splice(2));
console.log(frutas);

console.log(frutas.splice(1, 0, "acerola"));
console.log(frutas);