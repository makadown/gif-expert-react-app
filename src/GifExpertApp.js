import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ( {defaultCategories = ['Berserk']} ) => {
    const [categories, setCategories] = useState(defaultCategories);

    /*const handleAdd = () => {
        // setCategories([...categories, 'HunterXHunter']);
        setCategories( cats => [...cats, 'HunterXHunter']);
    }*/

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory agregarPapu={setCategories}></AddCategory>
            <hr/>
            <ol>
                {
                    categories.map( (c, i ) => {
                        return <GifGrid 
                            key={i} category={c}
                        />
                    })
                }
            </ol>
        </>
    )
}

export default GifExpertApp;