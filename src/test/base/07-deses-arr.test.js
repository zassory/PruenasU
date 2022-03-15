import '@testing-library/jest-dom';
import { retornaArreglo  } from '../../base/07-deses-arr';

describe( 'Pruebas en desestructuracion' , () => {

    it('Debe de retornar string y un numero' , ()=>{

        // 1. Preparar arrange
        const [ letras , numeros ] = retornaArreglo(); //['ABC', 123];
        const arrTest = ['ABC',123]

        expect( letras ).toBe( 'ABC' );
        expect( typeof letras ).toBe('string');
        expect( numeros ).toBe( 123 );
        expect( typeof numeros ).toBe( 'number' );
    })

})