import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
    
    // NEVER, NEVER, NEVER, Never create state conditionally. NEVER!
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const onAddCategory = () => {
        const newCategory = document.getElementById('myCategory').value;
        if (newCategory.trim().length === 0) return;
        
        // serching categories case insensitive
        const foundCategory = categories.find(cat => cat.toLowerCase() === newCategory.toLowerCase());
        if (foundCategory) return;

        // this adds the new category at the beginning of the array
        setCategories([newCategory, ...categories]);
        // clean the input
        document.getElementById('myCategory').value = '';
    }
    
    return ( <>
              {/* APP TITLE */}
              <h1>Gif Expert App</h1>
              {/* APP INPUT */}
              <AddCategory setCategories={setCategories}></AddCategory>
              
            
              {/* GIF LIST */}
              <ol>
                {
                  /* GIF ITEM */
                  categories.map(category => <li key={category}>{category}</li>)
                }                
              </ol> 
    </> )
    ;
}