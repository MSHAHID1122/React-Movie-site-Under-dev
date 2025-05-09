function MovieCard({movies}){
    
    return(
    <>
    <div>
        <div>
        <img src={`https://image.tmdb.org/t/p/w200${movies.poster_path}`} alt={movies.title} />
        </div>
        
    </div>
    <div>
        <h3>{movies.title}</h3>
        <h4>{movies.release_date}</h4>
    </div>
    </>
    )

}
export default MovieCard