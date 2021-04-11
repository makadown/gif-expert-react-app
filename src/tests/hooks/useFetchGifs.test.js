import React from 'react';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas a Hook de useFetchGifs', () => {
    
    test('Debe de retornar el estado inicial', async () => {
        const category = 'Berserk';
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs(category));
        const {data, loading} = result.current;
        
        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBeTruthy();
        
    });

    test('Debe retornar arreglo de imagenes y loading en false', async() => {
        const category = 'One Punch';
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs(category));
        await waitForNextUpdate();
        const {data, loading} = result.current;
        
        expect(data.length).toBeGreaterThan(0);
        expect(loading).toBeFalsy();
    })
    
    
});

