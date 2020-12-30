const fs = require('fs');
const path = require('path');
const basePath = './assets/';

const promise = new Promise((resolve, reject) => {
   // setTimeout(() => resolve('End'), 2000);
   setTimeout(() => reject('End'), 2000)
})


// promise.then((data) => console.log(data)).catch((err) => console.log('oops', err)); 
// promise.then(console.log);

promise.then((res) => {}, (rej) => {});

function readFileAsync(path, options) {
   return new Promise((resolve, reject) => {
         fs.readFile(path, options, (err, data) => {
            if (err) return reject(err)
               return resolve(data)
         })
   });
}


console.log('Begin');
   readFileAsync(path.resolve(basePath, 'invictus.txt' ), {encoding: 'utf-8'})
      .then(console.log)
      .catch(console.error)
console.log('End');