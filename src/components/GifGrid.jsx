import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./";

export const GifGrid = ( { category } ) => {
    
    const { images, isLoading } = useFetchGifs(category);
    
    console.log({ images, isLoading });

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