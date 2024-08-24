import React, { useState } from 'react'
import Card from '../Card/Card.jsx'
import SideBar from '../SideBar/SideBar'
import './Home.css'

const Home = ({sidebar}) => {

  const[category, setCategory]=useState(0);

  return (
    <>
    <SideBar sidebar={sidebar} category={category} setCategory={setCategory}/>
    <div className={`container  ${sidebar?"":"large-container"}`}>
      <Card category={category}/>

    </div>
    
    
    
    </>
  )
}

export default Home