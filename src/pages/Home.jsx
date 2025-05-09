import React from 'react'
import MovieCard from '../components/MovieCard'
import { useState } from 'react'
function Home() {
   const [user_input,set_input] = useState('');


  const my_movies=[
    {id:1,title:'movie1',release_date:'1,2,2203'},
    {id:2,title:'movie2',release_date:'2,2,2203'},
    {id:3,title:'movie3',release_date:'3,2,2203'},
    {id:4,title:'movie4',release_date:'4,2,2203'}

  ];
  const handleSearch=(e)=>{
    e.preventDefault()
       alert(user_input)


  }


  return (
    <div>
      <div>
        <form onSubmit={handleSearch}>
         <input type='text ' placeholder='enter your text' value={user_input} onChange={(e)=>{set_input(e.target.value)}}></input>
       <button type='submit'>Search</button>
        </form>

      </div>
      <div>
      { my_movies.map((movie)=>(
        movie.title.toLowerCase().startsWith(user_input) &&
        <MovieCard movies={movie} key={movie.id}/> ))
    
      }
      </div>
    </div> 
    )
  }
export default Home
