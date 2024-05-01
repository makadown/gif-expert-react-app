// Use React Testing Library to create unit test for GifItem and Evaluate snapshot
import {render} from '@testing-library/react';
import {GifItem} from '../../src/components/GifItem';

describe('Pruebas en GifItem', () => {
    const title = 'title';
    const url = 'https://url.com/img.png';

    test('should match the snapshot', () => {
        const {container} = render(<GifItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();
    });

    test('should show the image with the given URL and ALT attribute', () => {
        const {container} = render(<GifItem title={title} url={url}/>);
        const img = container.querySelector('img');
        expect(img.src).toBe(url);
        expect(img.alt).toBe(title);
    });

    test('should show the title within the component', () => {
        const {container} = render(<GifItem title={title} url={url}/>);
        const p = container.querySelector('p');
        expect(p.textContent).toBe(title);
    })
});
