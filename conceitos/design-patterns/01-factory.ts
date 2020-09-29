function FakeUser() {
    this.name = 'Guilherme';
    this.lastName = 'Cabrini';
}

// não é Factory
const user = new FakeUser();

console.log(user);


function FakeFactory(){
    return {
        name: 'Guilherme',
        lastName: 'Cabrini'
    }
}

const fake = FakeFactory();

// Factory
console.log(fake);


function Pessoa(customProperties) {
    return {
        name: 'Guilherme',
        lastName: 'Cabrini',
        ...customProperties
    }
}

const p = Pessoa({name: 'Custom Name', age: 27});
console.log(p);







