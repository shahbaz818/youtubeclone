import React, { useEffect, useState } from 'react'
import video from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import './VideoPlay.css'
import axios from 'axios'
import {API_KEY, value_converter} from '../../Data.js'
import moment from 'moment'


const VideoPlay=({videoId})=> {
  const[data,setData]=useState(null);

  const fetchApiData=async()=>{
    const res=await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2C%20statistics&id=${videoId}&key=${API_KEY}`)
    console.log(res)
    setData(res.data.items[0]);

  }
  useEffect(()=>{
    fetchApiData()
  },[])

  
  return (
    <div className='video-container'>
      
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}autoplay frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h2>{data?data.snippet.title:"Title"}</h2>
      <div className='video-tags'>
        <h4>{value_converter(data?data.statistics.viewCount:"12K")} Views . {moment(data?data.snippet.publishedAt:"1 Month ago").fromNow()}</h4>
        <div>
            <span><img src={like} alt='like'/>{value_converter(data?data.statistics.likeCount:"1K")}</span>
            <span><img src={dislike} alt='like'/></span>
            <span><img src={share} alt='like'/>share</span>
            <span><img src={save} alt='like'/>save</span>
        </div>
      </div>
      <hr/>
      <div className='channel-detail'>
        <img src={data?data.snippet.thumbnails.medium.url:"picture"} alt='jack'/>
        <h3>{data?data.snippet.channelTitle:"Shahbaz"}</h3>
        <button className='button'>Subscribe</button>
      </div>
      <p>{data?data.snippet.description.slice(0,300):"Description Here"}</p>
      <hr/>
     <h4>{value_converter(data?data.statistics.commentCount:"3k")} Comments</h4>
     <div className='comment'>
        <img src={jack} alt=''/>
        <div>
          <h3>shahbaz123<span> 2day ago</span></h3>
          <p>This is the best channel</p>
          <div className='comment-section'>
            <img src={like} alt=''/>
            <span>200</span>
            <img src={dislike} alt=''/>
            <span>5</span>
          </div>
          
        </div>
        
        
      </div>
      <div className='comment'>
        <img src={jack} alt=''/>
        <div>
          <h3>shahbaz123<span> 2day ago</span></h3>
          <p>This is the best channel</p>
          <div className='comment-section'>
            <img src={like} alt=''/>
            <span>200</span>
            <img src={dislike} alt=''/>
            <span>5</span>
          </div>
          
        </div>
        
        
      </div>
      <div className='comment'>
        <img src={jack} alt=''/>
        <div>
          <h3>shahbaz123<span> 2day ago</span></h3>
          <p>This is the best channel</p>
          <div className='comment-section'>
            <img src={like} alt=''/>
            <span>200</span>
            <img src={dislike} alt=''/>
            <span>5</span>
          </div>
          
        </div>
        
        
      </div>
      
    </div>

  )
}

export default VideoPlay