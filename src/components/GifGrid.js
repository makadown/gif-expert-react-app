import React, { useState, useEffect } from 'react'

export const GifGrid = ({ category }) => {

    const [count, setCount] = useState(0);

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
    };
    
    return (
        <>
            <li> {category} </li>
            <h3> { count } </h3>
            <button onClick={ () => setCount( count + 1)}>presioname papu</button>
        </>
    )
}