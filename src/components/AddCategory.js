import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( { agregarPapu } ) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            agregarPapu( cats => [...cats, inputValue]);
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