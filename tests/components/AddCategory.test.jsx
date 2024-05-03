// Use React Testing Library to create unit test for AddCategory 
import {render, fireEvent} from '@testing-library/react';
import {AddCategory} from '../../src/components/AddCategory';


describe('Pruebas en AddCategory', () => {

    // test onInputChange
    test('should change the input value', () => {
        const onInputChange = () => {};
        const {container} = render(<AddCategory onAddCategory={onInputChange}/>);
        const input = container.querySelector('input');
        fireEvent.input(input, {target: {value: 'One Piece'}});
        expect(input.value).toBe('One Piece');
    });

    // test onSubmit
    test('should call onAddCategory if input has a value', () => {
        const jsdomAlert = window.alert;
        window.alert = () => {};
        const inputValue = 'popotitos';
        const onAddCategory = jest.fn();
        const {container} = render(<AddCategory onAddCategory={onAddCategory}/>);
        const form = container.querySelector('form');
        const input = container.querySelector('input');
        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);
        expect(onAddCategory).toHaveBeenCalled();
        expect(onAddCategory).toHaveBeenCalledTimes(1);
        expect(onAddCategory).toHaveBeenCalledWith(inputValue);
        window.alert = jsdomAlert;
    });

    test('should not call onAddCategory if input is empty', () => {
        const onAddCategory = jest.fn();
        const {container} = render(<AddCategory onAddCategory={onAddCategory}/>);
        const form = container.querySelector('form');
        fireEvent.submit(form);
        expect(onAddCategory).toHaveBeenCalledTimes(0);
    })

})