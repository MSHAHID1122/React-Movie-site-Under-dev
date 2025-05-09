import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './components/MovieCard'
import poster from './assets/react.svg'

function Test({text}){
    return (
      <>
      <div>
        <p>{text}</p>
      </div>
      </>
    )
  }
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <MovieCard movies={{title:'jangni',release_date:'12,1,2006',poster:poster}}/>
    </>
     
  )
}

export default App
