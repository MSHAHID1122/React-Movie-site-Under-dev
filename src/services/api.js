
const API_KEY = '2ba4c44e5f7b64a8778c42072a95004a';
const BASE_URL = 'https://api.themoviedb.org/3';


export const  getMovies= async ()=>{
    const reponse = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await reponse.json()
    return data.results
   
}

export const searchMovies = async (query) =>
    {
    const reponse = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await reponse.json()
    return data.results
    }