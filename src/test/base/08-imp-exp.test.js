import '@testing-library/jest-dom'

import { getHeroeById , getHeroesByOwner } from '../../base/08-imp-exp';
//import heroes from '../../data/heroes';
import heroes from '../../data/heroes';

describe( 'Pruebas en funciones de heroes', ()=> {

    //AAA
    test('should return hero for id)', () => { 

        // 1. Preparar arrange
        const id = 1;
        // 2. Estimulo Act
        const hero = getHeroeById(id);        
        const heroData = heroes.find( (h) => h.id === id);

        // 3. Afirmar Assert
        expect(hero).toEqual(heroData);

    });

    test('should most return if id not exist, return undefined', ()=> {

        // 1. Preparar arrange
        const id = 6;
        // 2. Estimulo act
        const hero = getHeroeById(id);        

        // 3. Afirmar assert
        expect( hero ).toBe( undefined ); 
    });

    test('Should return heroes from DC' , ()=> {
        // 1. Preparar arrange
        const owner = 'DC';
        // 2. Estimulo act
        const dcHeros = getHeroesByOwner( owner );
        const dcData = heroes.filter( (h) => h.owner === owner );
        // 3. Afirmar assert
        expect( dcHeros ).toEqual( dcData );
    });

    test('should return [] for DC Owners' , ()=> {
        // 1. Preparar assert
        const owner = 'Toei';
        // 2. Estimulo act
        const dcHeros = getHeroesByOwner( owner );        
        // 3. Afirmar assert
        expect( dcHeros ).toEqual( [] );
    });

    test('Should return Marvel heroes', ()=> {

        // 1. Preparar arrange
        const owner = 'Marvel';
        // 2. Estimulo act
        const MHeroe = getHeroesByOwner( owner );
        const MHeroeData = heroes.filter( (h) => h.owner === owner );
        // 3. Afirmar assert
        expect( MHeroe ).toEqual( MHeroeData );
    });

    test('Should return [] for Marvel owners' , ()=> {

        // 1.Preparar arrange
        const owner = 'Toei';
        // 2.Estimulo act
        const MHeros = getHeroesByOwner( owner );
        // 3.Afirmar assert
        expect( MHeros ).toEqual([]);


    });


})