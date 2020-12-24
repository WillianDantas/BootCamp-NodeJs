class CustomError extends Error {
    constructor({message, data}) {
        super(message);
        this.data = data;
    }
}


try{
    // console.log(name);
    const name = 'Celso Henrique';
    const myError = new CustomError({ 
        message: 'Custom message',
        data: { 
            type: 'Server error'
        }
    });
    throw myError;
}catch(err){
   if(err.data.type === 'Server error'){

   } else {

   }
   console.log('Erro:', err); 
}finally{
    console.log('Kepp going.....');
}

 


