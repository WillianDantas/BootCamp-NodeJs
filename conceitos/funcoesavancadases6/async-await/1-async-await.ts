const fetch = require('node-fetch');
const evaluation = require('./data.json');


// Replace ./data.json with your JSON feed
fetch(evaluation).then(resposStream => {
     console.log(resposStream);
})

   