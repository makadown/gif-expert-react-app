import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas de GifGridItem', () => {
    const img = {
        id:"4N5vB4aErlVtVsywBw",
        url:"https://giphy.com/gifs/jojo-bizzare-cruisaders-4N5vB4aErlVtVsywBw",
        title:"bizzare GIF"
    };
    
    let wrapper = shallow(<GifGridItem key={img.id} {...img}/>);

    test('Debe mostrar <GifGridItem/> correctamente correctamenteu', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe tener un párrafo con title ', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe(img.title);
    });
    
    test('Debe tener la imagen igual al url y alt de la img', () => {
        const imagen = wrapper.find('img');
        expect(imagen.prop('src')).toBe(img.url);
        expect(imagen.prop('alt')).toBe(img.title);
    });

    test('Debe tener la class animate__fadeIn', () => {
        expect(wrapper.hasClass('animate__fadeIn'));
    })
    
})
