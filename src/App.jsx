import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './components/MovieCard'
import poster from './assets/react.svg'
import Home from './pages/Home'
import Favorite from './pages/Favourite'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {

  
  return (
    <>
    <div>
    <Navbar></Navbar>
    </div>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/favorite' element = {<Favorite/>}></Route>
   </Routes>
    </>
     
  )
}

export default App
