const { AddCategory } = require('../../components/AddCategory');
import { shallow } from 'enzyme';

describe('Pruebas en AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory agregarPapu={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory agregarPapu={setCategories} />);
    });
    
    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    /*test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', {target : { value }});
    })*/

    test('No debe de postear con submit sin valor en texto', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Debe llamar setCategories y limpiar caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', {target : { value }});

        wrapper.find('form').simulate('submit', { preventDefault(){} });
        
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        expect(input.prop('value')).toBe('');
    });
    
    
});
