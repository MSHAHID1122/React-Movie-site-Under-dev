
API_KEY = ''
BASE_URL = ''


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