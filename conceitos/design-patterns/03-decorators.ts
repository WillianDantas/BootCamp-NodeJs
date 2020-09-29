let loggerIn = false;

function callIfAuthenticated(fn){
    return !!loggerIn && fn();
}

function sum (a, b){
    return a + b;
}

let authenticated = callIfAuthenticated(() => sum(2, 3));
console.log(authenticated);
loggerIn = true;
authenticated = callIfAuthenticated(() => sum(2, 3));
console.log(authenticated);
loggerIn = false;
authenticated = callIfAuthenticated(() => sum(2, 3));
console.log(authenticated);

// Exemplo 2
/*
function readonly(target, name, descriptor){
    descriptor.writable = false;
    return descriptor;
}

class Job {
    @readonly
    title() { return 'CEO' }
}
*/



