// Use React Testing Library to create unit test for GifGrid
import {render, screen} from '@testing-library/react';
import {GifGrid} from '../../src/components/GifGrid';

describe('Pruebas en GifGrid', () => {

    const category = 'AVGN';

    test('should show the <h2>cargando....</h2> when isLoading is true', () => {

        render(<GifGrid category={category}/>);
        expect(screen.getByText('cargando....')).toBeTruthy();
        expect(screen.getByText(category));

    });

    // TODO:
    test('should show items when isLoading is false', () => {
                render(<GifGrid category={category}/>);

    });


})