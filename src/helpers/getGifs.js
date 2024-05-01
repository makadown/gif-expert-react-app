import { getEnvironments } from './getEnvironments.js'; 

/**
 * This function gets a list of gifs from the giphy api
 * @param {string} category: keyword to search for gifs
 * @returns {Array}: Array of gif objects
 */
export const getGifs = async (category) => {
    // encode uri to pass as url param
    const keyWord = encodeURI(category);
    // API key for giphy
    const apiKey = 'api_key=' + getEnvironments().VITE_GIPHY_API_KEY;
    // final URL for the API request
    const url = 'https://api.giphy.com/v1/gifs/search?' +
            `q=${keyWord}&` + // keyword to search for
            'limit=5&' + // number of results to return
            apiKey; // api key for the request

    // fetch request using the url
    const response = await fetch(url);
    // convert response to json data
    const { data } = await response.json();    
    // create an array of gif objects from the response data
    const gifs = data.map( (img) => {
        return {
            id: img.id, // unique id for the gif
            title: img.title, // title of the gif
            url: img.images?.downsized_medium.url // url of the downsized medium gif
        }
    });
    // return the array of gifs
    return gifs;
};
