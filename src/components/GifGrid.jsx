import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./";
import PropTypes from 'prop-types';

export const GifGrid = ( { category } ) => {
    
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            {
                isLoading && <h2>cargando....</h2>
            }

            <h3>{category} </h3>            
            <div className="card-grid">                
                {
                    images.map( (img) => (
                        <GifItem key={img.id}
                            {...img} />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {    
    category: PropTypes.string.isRequired
}