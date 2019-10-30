var chai = require('chai');
var assert = chai.assert; // importamos la libreria assert del framework chai
var should = chai.should();// importamos la libreria should del framework chai
var expect = chai.expect;// importamos la libreria expect del framework chai
var calculator = require('../calculator');// llamamos el archivo calculator para uso en las funciones

//JHON DARWIN ACEVEDO
describe('Prueba con la funcion assert : ', ()=> { // este seria una forma mas TDD
  describe('Comprovamos la funcion addTest', ()=>{
    it('Comprovamos el valor retornado usando : assert.equal(value, value): ', ()=> {
       result = calculator.addTest(1,1);//colocamos los valores como parametros para la suma
       assert.equal(result, 2);//y seteamos el resultado que da la suma de los dos parametros, con el resultado real
    });
  });
})
//JHON DARWIN ACEVEDO
describe('Prueba con la funcion should: ', ()=> {// este seria una forma mas VDD
    describe('Comprovamos la funcion  addTest', ()=>{
      it('Comprovamos el valor retornado usando : result.should.be.equal(value): ', ()=> {
         result = calculator.addTest(1,1);//colocamos los valores como parametros para la suma
         result.should.be.equal(2);//y seteamos el resultado que da la suma de los dos parametros, con el resultado real
      })
    })
  })
//JHON DARWIN ACEVEDO
  describe('Prueba con la funcion expect: ', ()=> {// este seria una forma mas VDD
    describe('Comprovamos la funcion de addTest', ()=>{
      it('Comprovamos el valor retornado usando: expect(result).to.be.a(value);: ', ()=> {
         result = calculator.addTest(1,1); //colocamos los valores como parametros para la suma
          expect(result).to.equal(2);//y seteamos el resultado que da la suma de los dos parametros, con el resultado real
      })
    })
  })
  //basicamente los 3 ejemplos hacen lo mismo los diferencia es el metodo utilizado
