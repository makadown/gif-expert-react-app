import React from 'react';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas a Hook de useFetchGifs', () => {
    
    test('Debe de retornar el estado inicial', () => {
        const category = 'Berserk';
        const { result } = renderHook( () => useFetchGifs(category));
        const {data, loading} = result.current;
        
        expect(data).toEqual([]);
        expect(loading).toBeTruthy();
        
    });
    
});

