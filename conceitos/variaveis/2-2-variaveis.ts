(()=> {
    let test = 'valor função';
    console.log(`Valor dentro da função "${test}"`);

    if(true){
        let test = 'valor if';
        console.log(`Valor dentro da if "${test}"`);
    }

    if(true){
        let test = 'valor de outro if';
        console.log(`Valor de outro if "${test}"`);
    }

    console.log(`Valor após execução do if "${test}"`);
})();
