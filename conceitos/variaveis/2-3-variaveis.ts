(()=> {
    const test = 'valor função';
    console.log(`Valor dentro da função "${test}"`);

    if(true){
        const test = 'valor if';
        console.log(`Valor dentro da if "${test}"`);
    }

    if(true){
        const test = 'valor de outro if';
        console.log(`Valor de outro if "${test}"`);
    }

    console.log(`Valor após execução do if "${test}"`);
})();
