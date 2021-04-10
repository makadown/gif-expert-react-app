import React from 'react';
import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
const { GifGrid } = require('../../components/GifGrid');

jest.mock('../../hooks/useFetchGifs');


describe('Pruebas de GifGrid', () => {
    const category = 'One Punch';

    test('Debe mostrar <GifGrid/> correctamente correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid key={1} category={category} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
        const gifs = [{
            id: "4N5vB4aErlVtVsywBw",
            url: "https://giphy.com/gifs/jojo-bizzare-cruisaders-4N5vB4aErlVtVsywBw",
            title: "bizzare GIF"
        }];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('p').exists()).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe(gifs.length);
    });


});
