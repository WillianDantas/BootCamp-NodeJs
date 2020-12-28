const fs = require('fs');
const path = require('path');
const basePath = './assets/';


function cb(err, data) {
    if(err) throw err;
    console.log(data);
}

console.log('Begin');

const files = fs.readdirSync(path.resolve(basePath));

const sentences = files.filter((file) => /s[1-4].txt/gi.test(file));

/*
for(const sentence of sentences){
    const  text  = fs.readFileSync(path.resolve(basePath, sentence)).toString();
    console.log(text, '\n');
}
*/

/*
for(const file of  sentences){
    fs.readFile(path.resolve(basePath, file), {encoding: 'utf-8'}, cb);
}
*/

/*
fs.readFile(path.resolve(basePath, 's1.txt'), {encoding: 'utf-8'}, (err, data) =>  {
    cb(err, data);
    fs.readFile(path.resolve(basePath, 's2.txt'), {encoding: 'utf-8'}, (err, data) => {
        cb(err, data);
        fs.readFile(path.resolve(basePath, 's3.txt'), {encoding: 'utf-8'}, (err, data) => {
            cb(err, data);
            fs.readFile(path.resolve(basePath, 's4.txt'), {encoding: 'utf-8'}, (err, data) => {
                cb(err, data);
            })
        })
    })
})

*/

fs.readdir(path.resolve(basePath), (err, files) => {
    if(err) throw err;
    files.filter((file) => /s[1-4].txt/gi.test(file))
    .forEach((sentenceFile) => {
        fs.readFile(path.resolve(basePath, sentenceFile), {encoding: 'utf-8'}, cb);
    })
})
console.log('End');