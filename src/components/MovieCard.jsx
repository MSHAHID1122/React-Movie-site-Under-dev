


function MovieCard({movies}){
     function clicked(){
        alert('button clicked')
     }
    return(
    <>
    <div>
        <div>
        <img src={movies.poster} alt={movies.title} />
        </div>
        <div>
            <button onClick={clicked}> Heart</button>
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