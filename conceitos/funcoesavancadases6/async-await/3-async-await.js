// EventEmmiter
const EventEmitter = require('events');

const emmitter = new EventEmitter();

emmitter.on('User logged', data =>{
    console.log(data);
});


emmitter.emit('User logged', {user: 'Celsor Henrique' });