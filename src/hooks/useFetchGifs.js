import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

/**
 * This hook takes a category as an argument.
 * Inside the hook, it uses the useState hook to create two state variables: images and isLoading.
 *  images is an array that will hold the fetched GIF images, and isLoading is a boolean that indicates whether the GIFs are still loading.
 * 
 * The getImages function is an asynchronous function that fetches GIFs using the getGifs function (presumably defined elsewhere) with the provided category. 
 * It then updates the images state with the fetched GIFs and sets isLoading to false.
 * 
 * The useEffect hook is used to call getImages when the component using this hook mounts. 
 * It does this by passing an empty dependency array [], which means the effect will only run once (on mount).
 * 
 * Finally, the hook returns an object with images and isLoading as its properties, 
 * which can be used by the component using this hook to render the GIFs and show a loading state if necessary.
 * @param {string} category - The category of gifs to fetch.
 * @return {Object} An object containing the fetched images and the loading state.
 */
export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages =  async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    };

    useEffect(() => {
        getImages();
    }, []);

    return { images, 
            isLoading };
};