const coinFlip = new Promise((resolve, reject) =>  Math.random() > 0.5 ? resolve('Yay') : reject('Oops'))


/*
coinFlip
        .then((data) => console.log(data, '1'))
        .catch((err) => console.log('Erro 1'))
        .then(() => {throw new Error('Erro 2')})
        .catch((err) => console.log(err.message))

*/


/*

coinFlip.then((data) => console.log('Yay 2'))
coinFlip.catch((err) => console.error('Next then will not execute'))
coinFlip.then(() => console.log('End 2'))

coinFlip.then((data) => console.log('Yay 2')).then(() => { throw new Error('xpto')}).catch(console.log)


coinFlip
        .then((sucess) => console.log(sucess), (fail) => console.log('Error in third'))


 */

 // catch não para execução de Promises
/*
 console.log('Begin')

 coinFlip.then((data) => console.log(data))
        .catch((err) => {throw err})
        .then(() => console.log('End 1'))


new Promise((resolve) => setTimeout(() => resolve(), 2000)).then(() => console.log('Yay'));
*/

// Parar no erro
/*
console.log('------------------------------------------------------');
console.log('Parar no erro')

function start(){
        throw new Error('An error')
}


console.log('Begin');
   start()
console.log('End');
*/

/*
coinFlip.then((data) => console.log('Yay 1'))
        .catch(() => console.log('First catch'))
        .then(() => console.log('Result'))
        .catch((err) => console.error('Error in first case, next then will not execute'))
        .then(() => console.log('End 1'))


coinFlip.then((data) => console.log('Yay 1'))
        .catch(() => console.log('First catch'))
        .then(() => { throw new Error('')})
        .catch((err) => console.error('Error in first case, next then will not execute'))
        .then(() => console.log('End 1'))
*/

// Both catches will be executed

coinFlip.then((data) => console.log('Yay 1'))
        .then(() => console.log('Result'))
        .then(() => console.log('End 1'))




coinFlip
        .catch(() => console.log('First catch'))
        .catch((err) => console.error('Error in first case, next then will not execute'))



// https://bevacqua.github.io/promisees/