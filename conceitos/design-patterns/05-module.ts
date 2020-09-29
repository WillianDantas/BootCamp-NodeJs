// module

// class Person {
//     constructor(name){
//          this.name = name;
//     }
// }


// export default Person;


// Utilizar Person
// import Person from './models/Person';

let name = 'default';

function getName(){
    return name;
}

function setName(paName){
    name = paName;
}


module.exports = {
    getName,
    setName
};