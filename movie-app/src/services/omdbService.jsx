export const fetchMovies = async (query) => {
    const apikey = 'f779b39';
    const url = `https://www.omdbapi.com/?s=${query}&apikey=${apikey}`;

    const response = await fetch(url);

    if(!response.ok){
        console.error("ertor fetching data through omdb api")
    }

    return await response.json();
}
export const fetchMovieDetails = async (id) => {
    const apikey = 'f779b39';
    const url = `https://www.omdbapi.com/?i=${id}&apikey=${apikey}`;

    const response = await fetch(url);

    if(!response.ok){
        console.error("ertor fetching data through omdb api")
    }

    return await response.json();
}