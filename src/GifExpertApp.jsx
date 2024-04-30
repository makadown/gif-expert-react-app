import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    
    // NEVER, NEVER, NEVER, Never create state conditionally. NEVER!
    const [categories, setCategories] = useState(['Donghua', 'Link Click', `One Piece`]);

    const onAddCategory = (newCategory) => {
        
        if (newCategory.trim().length === 0) return false;
        
        // serching categories case insensitive
        const foundCategory = categories.find(cat => cat.toLowerCase() === newCategory.toLowerCase());
        if (foundCategory) return false;

        // this adds the new category at the beginning of the array
        setCategories([newCategory, ...categories]);
        return true;
    }
    
    return ( <>
              
              <h1>Gif Expert App</h1>
              
              <AddCategory 
                            onAddCategory={onAddCategory}
                    />
              
            
              {
                  /* GIF ITEM */
                  categories.map( (category) => (
                        (
                          <GifGrid 
                            key={category}
                            category={category}
                          />
                        )
                    ) 
                  ) // map
              }                
              
    </> )
    ;
}