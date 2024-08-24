import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Video from './components/Video/Video.jsx'

import Home from './components/Home/Home.jsx'
import { Route, Routes } from 'react-router-dom'



function App() {
  const [sidebar, setSidebar] = useState(true)
  return (
    <>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        
        <Route path='/' element={<Home sidebar={sidebar}/>}/>
        <Route path='video/:categoryId/:videoId' element={<Video/>}/>
        
      </Routes>
     

    </>
  )
}

export default App
