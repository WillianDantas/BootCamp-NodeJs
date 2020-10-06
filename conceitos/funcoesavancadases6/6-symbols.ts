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
