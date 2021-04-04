import React, { useEffect, useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
    const misCategorias = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(misCategorias);

    /*const handleAdd = () => {
        // setCategories([...categories, 'HunterXHunter']);
        setCategories( cats => [...cats, 'HunterXHunter']);
    }*/

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory></AddCategory>
            <hr/>
            <ol>
                {
                    categories.map( (c, i ) => {
                        // React necesita el key para saber que elemento esta iterando
                        return <li key={i}> {c} </li>
                    })
                }
            </ol>
        </>
    )
}

export default GifExpertApp;