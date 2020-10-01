
const items = ['a', 'b', 'c', 'd', 'e'];

;(async function () {
    const promiseFunction = async (element) => {
        return new Promise((resolve, reject) => {
             return resolve(`${element} - promise`)
        })
    }

     // const itemMapped = promiseFunction('x');
     // console.log(await itemMapped);
    
     // const itemMapped = items.map(promiseFunction)

     // console.log(itemsMapped)

    const itemMappedPromisses = items.map(promiseFunction);

    const itemsMapped =  await Promise.all(itemMappedPromisses)

    console.log(itemsMapped);
    
})()


