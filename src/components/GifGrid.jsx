import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ( { category } ) => {
    
    // using useEffect I need to call the getGifs function
    // - Only once and not every time the component is rendered
    // - Only if the category changes
    useEffect( () => {
        getGifs( category );
    }, [ category ] );

    

    return (
        <>
            <h3>{category} </h3>
            <p>Hola mundo!</p>
        </>
    )
}