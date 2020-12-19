// EventEmmiter
const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged(data) {
        setTimeout(() =>{
            this.emit('User logged', data);
        }, 2000);
    }
}



const emmitter = new EventEmitter();

emmitter.on('User logged', data => {
    console.log(data);
});


 emmitter.emit('User logged', {user: 'Celsor Henrique' });





const users = new  Users();


users.on('User logged', data => {
    console.log(data);
});

/* 
users.once('User logged', data => {
    console.log(data);
});

*/


users.userLogged({user : 'Celso Henrique'});
users.userLogged({user : 'Vicente Rodrigues'});
