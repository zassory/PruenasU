import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string.js', ()=>{

    test('getSaludo debe de retornar Hola Nicolas', ()=> {

        // 1. Preparacion Arrange
        const nombre = 'Nicolas';

        // 2. Estimo Act
        const saludo = getSaludo( nombre );

        // 3. Observar el comportamiento Assert
        expect(saludo).toBe('Hola '+ nombre)
    })

    // getSaludo debe retornar hola Carlos si no hay argumento nombre
    test('getSaludo si esta vacio debe retornar Hola Carlos', ()=> {

        // 1. Preparacion Arrange
        //const nombre = null;

        // 2. Estimulo Act
        const saludo = getSaludo();
        
        expect( saludo ).toBe('Hola Carlos');
    })

});