import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './components/MovieCard'
import poster from './assets/react.svg'
import Home from './pages/Home'

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

  
  return (
    <>
    <Home/>
    </>
     
  )
}

export default App
