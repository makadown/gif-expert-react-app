import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('useFetchGifs Tests', () => {
    test('should return an initial state', () => {
        const category = 'One Piece';
        const {result} = renderHook(() => useFetchGifs(category));
        expect(result.current.images.length).toBe(0);
        expect(result.current.isLoading).toBeTruthy();        
    })

    test('should return an images array', async () => {
        const category = 'One Piece';
        const {result} = renderHook(() => useFetchGifs(category));
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
            {timeout: 3000}
        );
        expect(result.current.images.length).toBeGreaterThan(0);
        expect(result.current.isLoading).toBeFalsy();
    })
})