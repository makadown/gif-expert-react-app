import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect( () => {
       // console.log('Buscando por', category);
        getGifs(category).then( imgs => {
            setImages(imgs)
        });
    }, [category]); // si la category cambia, se vuelve a cargar el efecto

    
    return (
        <>
        <h3> {category} </h3>
        <div className="card-grid">
            
            {
                images.map( ( img ) => {
                        return <GifGridItem key={img.id} {...img}/>
                    })
            }
        </div>
        </>
    )
}
