import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ( { onAddCategory } ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const cleanInput = inputValue.trim();
        
        if (cleanInput.length <= 1) return;        
        
        if ( onAddCategory( cleanInput ) ) {
            setInputValue('');
        } else {
            window.alert('Category already exists');
        }
    }
    

    return (
        <form onSubmit={ onSubmit }>
            <input type="text" placeholder="Search gifs" id="myCategory" 
                    name="myCategory" style={{width: '25%', height: '10px'}}
                    value={inputValue} onChange={ onInputChange }
                    />
        </form>
    )
}

AddCategory.propTypes = {
    onAddCategory: PropTypes.func.isRequired,
}
