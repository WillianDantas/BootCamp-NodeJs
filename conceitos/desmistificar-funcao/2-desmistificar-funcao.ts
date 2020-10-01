const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 10
    },
    {
        name: 'miau',
        type: 'cat',
        age: 2
    },
    {
        name: 'gulp',
        type: 'fish',
        age: 1
    }
];


console.log(pets);


const pestMinFive = pets.filter((elem, array) => elem.age < 5);

console.log(pestMinFive);

const  eMenorQueCinco = (numero) => {
        return numero < 5;
}

const petsMenorCinco = pets.filter(({age}) => eMenorQueCinco(age));

console.log(petsMenorCinco);

