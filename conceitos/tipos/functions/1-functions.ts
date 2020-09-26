
function fn(){
    return 'Code here';
}

const arrowFn = () => 'Code here';
const arrowFn2 = () => {
    // Mais de uma expressão
    return 'Code here';
}

// Funcões também são objetos
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

// Receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

// Rceber e retornar funções
const controlFnExec = c  => allowed => {
   if(allowed){
      console.log(c());
       console.log(allowed);
   }else{
       console.log('Erro :', allowed);
   }
}


const handleFnExecution = controlFnExec(fn);

handleFnExecution(true);        // Executará a função fn
handleFnExecution(false);        //  Não executará a função fn


// controlFnExec como função
// function controlFnExec(fnParam){
//     return function(allowed){
//         if(allowed){
//             fnParam();
//         }
//     }
// }

