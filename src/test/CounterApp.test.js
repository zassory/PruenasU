import { shallow } from "enzyme";
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', ()=>{

    let wrapper = shallow(<CounterApp />);

    beforeEach( ()=> {

         wrapper = shallow(<CounterApp />);

    });
    test('Debe mostrar CounterApp Correctamente', ()=>{
        
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar el valor por defecto de 100', ()=>{

        // 1. Preparar arrange
        const valorDefecto = "100";
        // 2. Estimulo Act
        const wrapper = shallow(<CounterApp />);
        const textoParrafo = wrapper.find('h2').text().trim();

        // 3. Afirmar Assert
        expect( textoParrafo ).toBe(valorDefecto);
    });

    test('Debe de incrementar con el boton +1' , ()=> {

        //Con esto simulo un click
        wrapper.find('button').at(0).simulate('click');

        const textoParrafo = wrapper.find('h2').text().trim();
        expect( textoParrafo ).toBe('101');
    });

    test('Debe de incrementar con el boton -1' , ()=> {

        //Con esto simulo un click        
        wrapper.find('button').at(2).simulate('click');
        const textoParrafo = wrapper.find('h2').text().trim();
        expect( textoParrafo ).toBe('99');
    });

    test('Debe resetear ', ()=> {

        wrapper.find('button').at(1).simulate('click');
        const textoParrafo = wrapper.find('h2').text().trim();
        expect( textoParrafo ).toBe('100');

    });




})