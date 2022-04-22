import React from 'react'
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';

import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home/Home'
// import { ThemeProvider } from '@mui/material/styles'
//Config theme Material Mui global
// import theme from './themeConfig';

function App() {
  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
        <Navbar />
        <Home />
        {/*<Counter /> */}
      {/* </ThemeProvider> */}
    </>
  )
}

export default App
