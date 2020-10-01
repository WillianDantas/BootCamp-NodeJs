const pets = [
    {
        type: 'dog',
        name: 'bolinha',
        age: 15,
        weight: 30
    },
    {
        type: 'cat',
        name: 'mingal',
        age: 6,
        weight: 2
    },
    {
        type: 'dog',
        name: 'rex',
        age: 4,
        weight: 5
    },
    {
        type: 'cat',
        name: 'marrom',
        age: 2,
        weight: 1
    },
    {
        type: 'fish',
        name: 'gulp',
        age: 1,
        weight: 0.01
    },
    {
        type: 'horse',
        name: 'pé de pano',
        age: 1,
        weight: 0.01
    }
    
];

console.log(pets);

// map

const petName = pets.map((pet) => pet.name);

console.log(petName);

const petNameAge = pets.map((pet) => ({'name': pet.name, 'age' : pet.age}));

console.log(petNameAge);


// ForEach

const forEachPetNames = [];

pets.forEach((pet) => {
     forEachPetNames.push(pet.name);
});

console.log(forEachPetNames);

// reduce

const totalWeight = pets.reduce((total, pet) => {
  return total += pet.weight;
}, 0);


console.log(totalWeight);

const ObjectTotalWeight = pets.reduce((total, pet) => {
    return {
        totalAge: total.totalAge += pet.age,
        totalWeight: total.totalWeight += pet.weight
    }
  }, {totalWeight : 0, totalAge : 0});
  
  
  console.log(ObjectTotalWeight);


  const totalWeightDog = pets.reduce((total, pet) => {
    if(pet.type !== 'dog') return total;

    return total += pet.weight;
  }, 0);


  console.log(totalWeightDog);


  const totalWeightEncadeamentoDog = pets
    .filter((pet) => {
        return pet.type === 'dog';
    }).reduce((total, pet) => {
            return total += pet.weight;
    }, 0)
  
  
  console.log(totalWeightEncadeamentoDog);
  