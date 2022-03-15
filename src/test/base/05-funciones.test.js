import { getUser , getUsuarioActivo } from "../../base/05-funciones";
import '@testing-library/jest-dom';

describe('Pruebas en 05-funciones', ()=> {

    test('Debe de retornar un objeto' , ()=> {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        expect( user ).toEqual( userTest );
    });

    test('Debe retornar objeto y parametro nombre' , ()=> {

        const nombre = 'Nicolas';
        const userTest = {
            uid: 'ABC567',
            username: nombre
        };
        const user = getUsuarioActivo( nombre );

        //expect( user.username ).toEqual( nombre );
        expect( user ).toEqual( userTest );

    })


})