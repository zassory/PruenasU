import React from 'react';
import { shallow } from 'enzyme';

import PrimeraApp from '../PrimeraApp';

//import '@testing-library/jest-dom';
//import { render } from '@testing-library/react';

describe('Pruebas en <PrimeraApp />' , ()=> {

    // test('Debe mostrar el mensaje "Hola, soy Goku"', () => { 
    //     const saludo = 'Hola, soy Goku';
    //     const { getByText } = render( <PrimeraApp saludo={ saludo }/> )
    //     expect( getByText(saludo) ).toBeInTheDocument();
    // });

    test('Debe mostrar <PrimeraApp /> correctamente', () => { 

        const saludo = 'Hola, soy Goku';
        const wrapper = shallow(<PrimeraApp saludo = { saludo } />);

        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe de mostrar el sutitulo enviado por props', () => { 

        const saludo = 'Hola, soy Goku';
        const subtitulo = 'Soy un subtitulo';

        const wrapper = shallow(
            <PrimeraApp 
            saludo = { saludo }
            subtitulo = { subtitulo }
            />
        );

        const textoParrafo = wrapper.find('p').text();
        expect( textoParrafo ).toBe(subtitulo);

    });


})