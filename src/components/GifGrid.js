import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect( () => {
        getGifs();
    }, []);

    const getGifs = async() => {
        const palabraClave = 'Rick and morty'
                .replace(' ','+').replace(' ','+').replace(' ','+');
        const apiKey = 'api_key=3Ie0XE3iXNg8qBqu6WJO2J38EheOg33Z';
        const url = 'https://api.giphy.com/v1/gifs/search?q=' +
                palabraClave + '&limit=10&'+
                apiKey;
        const respuesta = await fetch(url);
        const { data } = await respuesta.json();
        // console.log(data);
        const gifs = data.map( d => {
            return { 
                id: d.id,
                title: d.title,
                url: d.images?.downsized_medium.url
            };
        });
        console.log(gifs);
        setImages(gifs);
    };
    
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
