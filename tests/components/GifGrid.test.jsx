// Use React Testing Library to create unit test for GifGrid
import {render, screen} from '@testing-library/react';
import {GifGrid} from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {

    const category = 'AVGN';

    test('should show the <h2>cargando....</h2> when isLoading is true', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        render(<GifGrid category={category}/>);
        expect(screen.getByText('cargando....')).toBeTruthy();
        expect(screen.getByText(category));
    });

    test('should show items when isLoading is false', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'                
            },
            {
                id: '456',
                title: 'Vegeta',
                url: 'https://localhost/vegeta.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: [...gifs],
            isLoading: false
        });
        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(gifs.length);
    });

})