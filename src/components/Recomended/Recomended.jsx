import React, { useEffect, useState } from 'react'
import './Recomended.css'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import axios from 'axios'
import moment from 'moment'
import { API_KEY ,value_converter} from '../../Data'
import { Link } from 'react-router-dom'

const Recomended=({categoryId})=> {
    const [apiData, setApiData]=useState([]);

    const fetchData=async()=>{
        const recomended_url= `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2C%20statistics&chart=mostPopular&maxResults=20&videoCategoryId=${categoryId}&key=${API_KEY}`;
        await fetch(recomended_url)
        .then(res=>res.json())
        .then(data=>setApiData(data.items));
    }

    useEffect(()=>{
        fetchData();

    },[])

  return (
    
    <div className='recomended'>
        {apiData.map((item,index)=>{
            return(
            <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='side-video-list'>
                <img src={item.snippet.thumbnails.default.url} alt=''/>
                <div className='video-info'> 
                    <h3>{item.snippet.title.slice(0,26)}</h3>
                    <h5>{item.snippet.channelTitle}</h5>
                    <h5>{value_converter(item.statistics.viewCount)} views . {moment(item.snippet.publishedAt).fromNow()}</h5>
                </div>
            </Link>
            
      

            )

})}
      </div>   
  )
}

export default Recomended