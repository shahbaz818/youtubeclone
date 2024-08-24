import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import menu from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'
import upload from '../../assets/upload.png'
import more from '../../assets/more.png'
import notification from '../../assets/notification.png'
import jack from '../../assets/jack.png'


function Navbar({setSidebar}) {

  return (
    <div className='navbar'>
        <div className='nav-left flex-div'>
            <img src={menu} className='menu_icon' onClick={()=>setSidebar(prev=>prev===false?true:false)}/>
            <Link to='/'><img src={logo} className='logo'/></Link>
        </div>

        <div className='nav-middle'>
            <div className='search-Box'>
                <input 
                className="input" 
                type='text' 
                placeholder='search'
                />
                <img className='search' src={search} alt='search'/>

            </div>
            
        </div>
        <div className='nav-right'>
            <img src={upload} alt='upload' className='image'/>
            <img src={more} alt='more' className='image'/>
            <img src={notification} alt='upload' className='image'/>
            <img src={jack} alt='upload' className='jack'/>
        </div>
        

    </div>
  )
}

export default Navbar