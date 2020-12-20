const  assert = require('assert');
const Math = require('../math.js');
const expect = require('chai').expect;

let value = 0;

describe('chai class', function(){
    // Hooks
    beforeEach(function(){  // antes de cada it função e chamada : beforeEach, afterEach, before, after!
        value = 0;
    })



    it('Sum two numbers Async', function(done) {
        const math = new Math();
        this.timeout(3000); // timeout não pode ser iniciado com arrow function
        try{
            math.sumAsync(value, 5, value => {
                //assert.equal(value, 10);
                expect(value).to.equal(10);
                done(); // Teste vai aguarda resposta.
            })
        }catch(err){
            console.log(err);
        }
        
    });


    it('Multiply two numbers value', function() {
         const math = new Math();

         expect(math.multiple(value, 5)).to.equal(0)
    });


    it('objects', function(){
        const math = new Math(); 
        const obj = {
            name : 'Celso Henrique'
        };

        expect(obj).to.have.property('name');
    });

    it('objects name', function(){
        const math = new Math(); 
        const obj = {
            name : 'Celso Henrique'
        };

        expect(obj).to.have.property('name').equal('Celso Henrique');
    });


    it('objects different name', function(){
        const math = new Math(); 
        const obj = {
            name : 'Celso Henrique'
        };

        expect(obj).to.have.property('name').equal('Celso');
    });

    it('object compare object', function(){
        const math = new Math(); 
        const obj = {
            name : 'Celso Henrique'
        };

        const obj2 = {
            name : 'Celso Henrique'
        };

        expect(obj).to.deep.equal(obj2);
    });

});