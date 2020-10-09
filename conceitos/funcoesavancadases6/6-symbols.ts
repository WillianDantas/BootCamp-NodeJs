//Symbols

const uniqueId =  Symbol('Hello');
// const uniqueId2 =  Symbol('Hello');

// console.log(uniqueId === uniqueId2); = false

// const obj = {
//     [uniqueId] : 'Hello',
//     _Id: 'Hello'
// };

// console.log(obj);

// console.log(Object.keys(obj));

// // Well known symbols
Symbol.iterator
// Symbol.split
// Symbol.toStringTag

const arr = [1, 2, 3, 4];
const str = 'Digital Innovation One';

const it = arr[Symbol.iterator]();

console.log(arr[Symbol.iterator]().next());

while(true){
    let {value, done} = it.next();
    if(done){
        break;
    }

    console.log(value);
}


for(let value of str){
    console.log(value);
}

const obj = {
    values: [1, 2, 3, 4,],
    [Symbol.iterator](){
        let id = 0;

        return {
            next: () => {
                id++;
                return {
                    value: this.values[id - 1],
                    done: id > this.values.length
                }
            }
        }
    }
}

const iti  =  obj[Symbol.iterator]();

console.log(iti.next());
console.log(iti.next());
console.log(iti.next());
console.log(iti.next());
console.log(iti.next());

console.log('\n----------------');

for (let value of obj){
    console.log(value);
}

console.log('\n----------------------');
const arr2 = [...obj];
console.log(arr2);

// Generetors
console.log('\n ------ Generators ------');

function* hello(){
    console.log('\nHello');
    yield 1;
    console.log('\nFrom');
    const value  = yield 2;

    console.log(`\n${value}`)
    console.log('\nFunction');
    yield 3;
}

const iter  = hello();


console.log(iter.next());
console.log(iter.next());
console.log(iter.next('Outside!'));


function* natuuralNumbers(){
    let number = 0;
    while(true){
        yield number;
        number++;
    }
}

console.log("\n---------------")

const ite = natuuralNumbers();

console.log(ite.next());
console.log(ite.next());
console.log(ite.next());




