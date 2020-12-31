const fs = require('fs');
const path = require('path');
const {promisify} = require('util');
const basePath = './assets/';

const readFileAsync = promisify(fs.readFile);

// console.log('Begin')

function read (index){
     return readFileAsync(path.resolve(basePath, `s${index}.txt`), { encoding: 'utf-8'})
}

// function start (index, max){
//     if(index > max) return
//     read(index).then((data) => {
//         console.log(data, '\n')
//         start(index + 1, max)
//     })
// }
  
// start(1, 4)





console.log('Begin')
const promiseArray = []
for(let i = 1; i <= 4; i++) promiseArray[i - 1] = read(i)
console.log(promiseArray)
Promise.all(promiseArray).then(console.log)
Promise.all(promiseArray).then((arr) => console.log(arr.join('\n')))
