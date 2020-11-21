// ES7 - Asysnc / Await
const fetch = require('node-fetch');

const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve(12345);
    }, 1000) 
});
     



const simpleFunc = async () => {
    const data = await asyncTimer();
    console.log(data);
    const dataJson = await fetch ("https://soundcloud.com/oembed?url=http%3A//soundcloud.com/forss/flickermood&format=json")
                    .then(resStream => 
                            resStream.json()
                    );

    return dataJson;
};

/*
const simpleFunc = async () => {
    const data = await Promise.all([
        asysncTimer(),
        fetch('').then(restStream => restStream.json())
    ]);

    return data;
}
*/

simpleFunc()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });


//console.log(simpleFunc());

simpleFunc().then(data => {
    console.log(data);
});

