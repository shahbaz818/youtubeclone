import React, { useEffect,useState } from 'react'
import thumbnail1 from '../../assets/thumbnail1.png'

import './Card.css'
import {Link} from 'react-router-dom'
import { API_KEY, value_converter } from '../../Data'
import moment from 'moment'
import axios from 'axios'


const Card=({category})=>{

  const [data,setData]=useState([]);

  const fetchData=async()=>{
    const res=await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2C%20statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`);
    console.log(res)
    setData(res.data.items)
    
    
    
  }

  useEffect(()=>{
    fetchData()
  },[category])

  return (
   
    <div className='main-card'>
      {data.map((item)=>{
        return(
        <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
          <img src={item.snippet.thumbnails.medium.url} alt='image'/>
          <h3>{item.snippet.title}</h3>
          <h4>{item.snippet.channelTitle}</h4>
          <h4>{value_converter(item.statistics.viewCount)} Views . {moment(item.snippet.publishedAt).fromNow()}</h4>
        </Link>
        )
      })}
         


      
      

    </div>
      

    
  )
}

export default Card