export const fetchMovies = async (query) => {
    const apiKey = 'f779b39';

    const url = `https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`;

    const response = await fetch(url);

    if(!response.ok){
        console.error("ertor fetching data through omdb api")
    }

    return await response.json();
}
export const fetchMovieDetails = async (id) => {
    const apiKey = 'f779b39';
    const url = `https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`;

    const response = await fetch(url);

    if(!response.ok){
        console.error("ertor fetching data through omdb api")
    }

    return await response.json();
}