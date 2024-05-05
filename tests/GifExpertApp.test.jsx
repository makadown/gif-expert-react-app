import {render, screen} from '@testing-library/react';
import {GifExpertApp} from '../src/GifExpertApp';

describe('GifExpertApp tests', () => {

    test('should match the snapshot', () => {
        const {container} = render(<GifExpertApp/>);        
        expect(container).toMatchSnapshot();
    })

    test('should show the title', () => {
        render(<GifExpertApp/>);
        expect(screen.getByText('Gif Expert App')).toBeTruthy();
    })

    test('should show the One Piece category by default', () => {
        render(<GifExpertApp/>);
        expect(screen.getByText('One Piece')).toBeTruthy();        
    })
})