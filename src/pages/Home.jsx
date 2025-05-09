import React from 'react'
import MovieCard from '../components/MovieCard'
import { useState, useEffect } from 'react'
import { getMovies, searchMovies } from '../services/api'
import '../css/Home.css'
function Home() {
  const [user_input, set_input] = useState('');
  const [my_movies, set_movies] = useState([]);
  const [error, set_error] = useState(null);
  const [loading, set_loading] = useState(true);

  useEffect(() => {
    set_loading(true)

    const loadMovies = async () => {
      try {
        const loadedmovies = await getMovies()
        set_movies(loadedmovies)
      } catch (err) {
        set_error('failed to get movies')
      } finally {
        set_loading(false)
      }
    }

    loadMovies();
  }, [])

  const handleSearch = async (e) => {
    e.preventDefault()
    if (loading) return
    set_loading(true)
    try {
      const getmovie = await searchMovies(user_input)
      set_movies(getmovie)
      set_error(null)
    } catch (err) {
      console.log(err)
      set_error("failed to fetch movie")
    } finally {
      set_loading(false)
    }
  }

  return (
    <div className="home">
      <div>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="enter your text"
            className="search-input"
            value={user_input}
            onChange={(e) => { set_input(e.target.value) }}
          />
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>
      <div className="movies-grid">
        {
          loading
            ? <div>Loading movies...</div>
            : my_movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))
        }
      </div>
    </div>
  )
}

export default Home
