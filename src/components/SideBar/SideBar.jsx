import React from 'react'
import game_icon from '../../assets/game_icon.png'
import entertainment from '../../assets/entertainment.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import music from '../../assets/music.png'
import sports from '../../assets/sports.png'
import tech from '../../assets/tech.png'
import automobiles from '../../assets/automobiles.png'
import jack from '../../assets/jack.png'
import megan from '../../assets/megan.png'
import './SideBar.css'


const SideBar = ({sidebar, category,setCategory}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
        <div className='short-link'>
        
            <div className={`sidebar-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                <img src={game_icon} alt='game'/><p>Gaming</p>
            </div>
            <div className={`sidebar-link ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
                <img src={entertainment} alt='entertainment'/><p>Enter</p>
            </div>
            <div className={`sidebar-link ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
                <img src={blogs} alt='blogs'/><p>Blogs</p>
            </div>
            <div className={`sidebar-link ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
                <img src={news} alt='news'/><p>News</p>
            </div>
                
            <div className={`sidebar-link ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
                <img src={music} alt='music'/><p>Music</p>
            </div>   
            <div className={`sidebar-link ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
                <img src={sports} alt='sports'/><p>Sports</p>
            </div> 

            <div className={`sidebar-link ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
                <img src={tech} alt='tech'/><p>Tech</p>
            </div>   
                
                
            <div className={`sidebar-link ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
                <img src={automobiles} alt='automobiles'/><p>Automobile</p>
            </div>
            
        </div>
        <hr/>
        <p>Subscribed</p>
        
        <div className='sidebar-link'>
            <img src={jack} alt='automobiles'/><p>Jack</p>
        </div>
        <div className='sidebar-link'>
            <img src={megan} alt='automobiles'/><p>Megan</p>
        </div>
        

    </div>
  )
}

export default SideBar