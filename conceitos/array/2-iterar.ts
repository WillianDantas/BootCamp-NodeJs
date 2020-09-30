const frutas = [ 'Laranja', 'Maça', 'Banana', 'Melão', 'Abacate' ];

console.log(frutas.forEach(fruta => console.log(fruta)));

console.log(frutas.forEach((fruta, index) => console.log(index, fruta)));

console.log(frutas.forEach((fruta, index, arr) => console.log(index, fruta, arr)));


const arr = [1, 2, 3, 4, 5];

let mapValue = arr.map(value => value * 2);

console.log(mapValue);

console.log(frutas.map((fruta, index) => `${index} - ${fruta}`));


const idades = [20, 34, [35, 60, [70, 40]]];

console.log(idades);

console.log(idades.flat());

console.log(idades.flat(2));

console.log(arr.flatMap(value => [value * 2]));

console.log(arr.flatMap(value => [[value * 2]]));


const arrIterator = arr.keys();

console.log(arrIterator.next());

console.log(arrIterator.next());

console.log(arrIterator.next());

console.log(arrIterator.next());


const frutasIterator = frutas.entries();

console.log(frutasIterator.next());

console.log(frutasIterator.next());

console.log(frutasIterator.next());


const fistGreaterThanTwo = arr.find(value => value > 2);

console.log(fistGreaterThanTwo, arr);

const firstIndexGreaterThanTwo = arr.findIndex(value => value > 2);

console.log(firstIndexGreaterThanTwo);

const allValuesGreaterThanTwo = arr.filter(value => value > 2);

console.log(allValuesGreaterThanTwo);

let a = [1, 2, 3, 4, 5, 3]
const firstIndexOfItem = a.indexOf(3);

console.log(firstIndexOfItem);

const lastIndexOfItem = a.lastIndexOf(3);
console.log(lastIndexOfItem);

const hasItemOne = a.includes(1);

console.log(hasItemOne);

const hasItemSeven = a.includes(7);

console.log(hasItemSeven);

const hasSomeEvenNumber = arr.some(value => value % 2 === 0);

console.log(hasSomeEvenNumber);

const everyNumber =  arr.every(value => value % 2 === 0);

console.log(everyNumber);

const students = [
    {
        name: "Jonh",
        grade: 7
    },
    {
        name: "Jenny",
        grade: 5
    },
    {
        name: "Peter",
        grade: 4
    }
]

const ordem = students.sort((current, next) => current.grade - next.grade);
console.log(ordem);

const descOrdem = students.sort((current, next) =>  next.grade - current.grade);
console.log(descOrdem);

console.log(a.sort());
console.log(a.reverse());


const txt = arr.join(" - ");
console.log(txt);

console.log(arr.reduce((total, value) => total += value, 0));

console.log(students.reduce((totalGrades, student) => totalGrades += student.grade, 0) / students.length);













