import { useState } from "react";

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue);
        
        if (inputValue.trim().length <= 1) return;        
        
        setCategories( cats => [inputValue, ...cats] );
        
        setInputValue('');
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