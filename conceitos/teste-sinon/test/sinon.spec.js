const  assert = require('assert');
const Math = require('../math.js');
const expect = require('chai').expect;
const sinon = require('sinon');

let value = 0;

describe('sinon class', function(){
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

    it.only('Calls res with sum and index values', function() {
        const req = {}
        const res = {
            load: sinon.spy()
        };
        const math = new Math();

        math.printSum(req, res, 5, 5);

        // expect(res.load.calledOnce).to.be.true;

        expect(res.load.args[0][0]).to.equal('index');
    });

});