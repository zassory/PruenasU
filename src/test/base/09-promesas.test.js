import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';


describe('Pruebas en promesas', ()=> {

    test('should first', ( done ) => { 

        const id = 1;

        getHeroeByIdAsync( id )
        .then( her => {

            expect( her ).toBe( heroes[0] );
            done();
        });            
     });

     test('Debe tener un error si heroe por id no existe', ( done )=> {

        const id= 10;
        getHeroeByIdAsync(id).catch(
            error => {
                expect( error ).toBe('No se pudo encontrar el héroe');
                done();
            }
        )

     })

})