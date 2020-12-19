const  assert = require('assert');
const Math = require('../math.js');

let value = 0;

describe('Math class', function(){
    // Hooks
    beforeEach(function(){  // antes de cada it função e chamada : beforeEach, afterEach, before, after!
        value = 0;
    })

    it('Sum two numbers', function() {
            const math = new Math();
            try{
                assert.equal(math.sum(5,5), 10);
            }catch(err){
                console.log(err);
            }
            
    });

    it('Sum two numbers Async', function(done) {
        const math = new Math();
        this.timeout(3000); // timeout não pode ser iniciado com arrow function
        try{
            math.sumAsync(value, 5, value => {
                assert.equal(value, 10);
                done(); // Teste vai aguarda resposta.
            })
        }catch(err){
            console.log(err);
        }
        
    });

    it('Multiply pending');
    it.skip('Multiply pending'); // deixar pedente it.skip
    
    it('Multiply two numbers', function(){ // execeutar apenas um teste it.only.
         const math = new Math();

         assert.equal(math.multiple(5, 5), 25);

    });

    it('Multiply two numbers value', function() {
         const math = new Math();

         assert.equal(math.multiple(value, 5), 0);
    });

});