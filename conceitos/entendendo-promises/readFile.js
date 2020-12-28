const fs = require('fs');
const path = require('path');
const basePath = './assets/';

function cb(err, data) {
    if(err) throw err;
    console.log(data);
}

console.log('Begin');

/*
fs.readFile(path.resolve(basePath, 'invictus.txt'), {encoding: 'utf8'}, (err, data) =>{
    if(err) throw err;
    console.log(data);
});
*/


fs.readFile(path.resolve(basePath, 'invictus.txt'), {encoding: 'utf8'},  cb);

console.log('End');