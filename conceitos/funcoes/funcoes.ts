function getName(){
    return "Mariana Vieria";
}

function logFn(fn){
    console.log(fn());
}


const logFnResult = logFn;

const obj = {
    logFn: logFn
}

const arr = [logFn];

logFnResult(getName);