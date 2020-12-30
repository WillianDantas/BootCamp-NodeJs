const fs = require('fs');
const path = require('path');
const basePath = './assets/';
const {promisify} = require('util');

const readFileAsync = promisify(fs.readFile);

console.log('Begin');
   readFileAsync(path.resolve(basePath, 'invictus.txt' ), {encoding: 'utf-8'})
      .then(console.log)
      .catch(console.error)
      .finally(() => console.log('End \n\nBegin\n-------------------'))



readFileAsync(path.resolve(basePath, 's1.txt'), {encoding: 'utf-8'})
   .then((sentence) => {
      console.log(sentence, '\n')
      return readFileAsync(path.resolve(basePath, 's2.txt'), {encoding: 'utf-8'})
   })
   .then((sentence) => {
      console.log(sentence, '\n')
      return readFileAsync(path.resolve(basePath, 's3.txt'), {encoding: 'utf-8'})
   })
   .then((sentence) => {
      console.log(sentence, '\n')
      return readFileAsync(path.resolve(basePath, 's4.txt'), {encoding: 'utf-8'})
   })
  .then(console.log)
  .finally(() => console.log('End'))
