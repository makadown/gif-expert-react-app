import React, { useState } from 'react'
import PropTypes from 'prop-types';

/**
 * Componente para capturar una nueva categoría
 * @param {agregarPapu} {setCategories} Referencia a Método del useState para agregar elemento a arreglo
 * @returns componente AddCategory
 */
export const AddCategory = ( { agregarPapu } ) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            // aqui se agrega elemento al arreglo que esta en 
            // componente GifExpertApp mediante el metodo del useState.
            agregarPapu( cats => [inputValue, ...cats, ]);
            setInputValue('');
        }
    };

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
        </>
    )
}

// Candado para que se force a usar este parametro al usar este componente
AddCategory.propTypes = {
    agregarPapu: PropTypes.func.isRequired
}