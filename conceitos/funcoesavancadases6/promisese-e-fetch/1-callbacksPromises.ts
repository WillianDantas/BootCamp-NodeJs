//Promises
const doSomethingPromise = new Promise((resolve, reject) => {
   // throw new Error("Something went wrong");
    setTimeout(function(){
        // did somenthing
         resolve('First data');
    }, 1000);
});


const doOtherThingPromise = new Promise((resolve, reject) => {
    // throw new Error("Something went wrong");
    setTimeout(function(){
        // did other thing
         resolve('Second data');
    }, 1000);
});

//doSomethingPromise.then(data => console.log(data)).catch(error => console.log(error));

/*
doSomethingPromise
    .then(data => {
       console.log(data.split(''));
       return doOtherThingPromise;
    })
    .then(data2 => console.log(data2.split('')))
    .catch(err => console.log(err));
*/

// Fazer informação  paralelo

console.log("Fazer informação  paralelo");

Promise.all([doSomethingPromise, doOtherThingPromise]).then(data => {
    console.log(data);
});

Promise.race([doSomethingPromise, doOtherThingPromise]).then(data => {
    console.log(data);
});

//doOtherThingPromise.then(data => console.log(data)).catch(error => console.log(error));

/*
Status Promise:
Pending = em execução
Fulfilled = terminar execução
Reject = acontecer erro

*/

// Callback 


function doSomething(callback){
    setTimeout(function(){
        // did somenthing
         callback('First data');
    }, 1000);
}

function doOtherthing(callback){
    setTimeout(function(){
        // did other thing
         callback('Second data');
    }, 1000);
}

function doAll(){
    try{
        doSomething(function(data){
            var processedData = data.split('');
            try{
                doOtherthing(function(data2){
                    var processedData2 = data2.split("");
                    try{
                        setTimeout(function(){
                            console.log(processedData, processedData2);
                        }, 1000);
                    }catch(err){
                        console.log(err);
                    }
                });
            }catch (err){
                // handle erro
                console.log(err);
            }
        })
    }catch (err){
        // handle erro
        console.log(err);
    }
}
   


doAll();