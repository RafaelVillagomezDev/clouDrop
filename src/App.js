import React from 'react'
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import {BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home/Home'
import Myphotos from './pages/MyPhotos/Myphotos';
// import { ThemeProvider } from '@mui/material/styles'
//Config theme Material Mui global
// import theme from './themeConfig';

function App() {
  return (
    <>
    
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path='/clouDrop' element={<Home/>}/>
        <Route path='/myphotos' element={<Myphotos/>}/> 
        
        </Routes>
      
      </Router>

    </>
  )
}

export default App
