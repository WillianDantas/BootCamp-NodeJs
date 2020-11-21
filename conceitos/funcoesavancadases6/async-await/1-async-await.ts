const fetch = require('node-fetch');
const evaluation = require('./data.json');




// Replace ./data.json with your JSON feed
fetch("https://soundcloud.com/oembed?url=http%3A//soundcloud.com/forss/flickermood&format=json").then(resposStream => {
     resposStream.json().then(data => {
          console.log(data);
     }).catch(err =>{
          console.log('Ops',err);
     });
});


fetch("https://soundcloud.com/oembed?url=http%3A//soundcloud.com/forss/flickermood&format=json")
     .then(resposStream => {
         // console.log(resposStream);
          if(resposStream.status === 200){
               resposStream.json()
          }else{
               throw new Error('Request error');
          }
     })
     .then(data => {
          console.log(data);
     }).catch(err => {
          console.log('Ops', err);
     })