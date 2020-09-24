function fn(){
   function log(value){
        console.log(value);
   }

   log("hoisting de função");
}

fn();


function fn2(){
    logger("hoisting de função");

    function logger(value){
        console.log(value);
   }
 }


 fn2();