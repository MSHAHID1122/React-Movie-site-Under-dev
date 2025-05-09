import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Favorite from './pages/Favourite'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import { MovieProvider } from './contexts/MovieContext'

function App() {
  
  return (
    <MovieProvider>
    <div>
    <Navbar></Navbar>
    </div>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Favorite' element = {<Favorite/>}></Route>
   </Routes>
    </MovieProvider>
     
  )
}

export default App
