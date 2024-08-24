import React, { useEffect, useState } from 'react'
import video from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import './VideoPlay.css'
import axios, { toFormData } from 'axios'
import {API_KEY, value_converter} from '../../Data.js'
import moment from 'moment'
import { useParams } from 'react-router-dom'


const VideoPlay=()=> {
  const {videoId}=useParams();
  
  const[apiData,setApiData]=useState(null);
  const [channelData,setChannelData]=useState(null);
  const [apiComments,setApiComments]=useState([]);

  const fetchApiData=async()=>{
    const api_url= `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2C%20statistics&id=${videoId}&key=${API_KEY}`;
    await fetch(api_url).then(res=>res.json()).then(data=>(setApiData(data.items[0])))
  }
  const fetchChannelInfo=async()=>{
    const channel_url= `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2C%20contentDetails%2C%20statistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channel_url)
    .then(res=>res.json()).
    then(data=>(setChannelData(data.items[0])))
  

    const comments_url= `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2C%20replies&maxResults=50&videoId=${videoId}&key=${API_KEY}`
    await fetch(comments_url)
    .then(res=>res.json())
    .then(data=>setApiComments(data.items))
  
  }
  
  useEffect(()=>{
    fetchApiData()
  },[videoId])

  useEffect(()=>{
    fetchChannelInfo()
  },[apiData])




  return (
    <div className='video-container'>
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}autoplay frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h2>{apiData?apiData.snippet.title:"Title"}</h2>
      <div className='video-tags'>
        <h4>{value_converter(apiData?apiData.statistics.viewCount:"12K")} Views . {moment(apiData?apiData.snippet.publishedAt:"1 Month ago").fromNow()}</h4>
        <div>
            <span><img src={like} alt='like'/>{value_converter(apiData?apiData.statistics.likeCount:"1K")}</span>
            <span><img src={dislike} alt='like'/></span>
            <span><img src={share} alt='like'/>share</span>
            <span><img src={save} alt='like'/>save</span>
        </div>
      </div>
      <hr/>
      <div className='channel-detail'>
        <img src={channelData?channelData.snippet.thumbnails.default.url:" "} alt='jack'/>
        <div>
          <h3>{apiData?apiData.snippet.channelTitle:"Shahbaz"}</h3>
          <h4>{value_converter(channelData?channelData.statistics.subscriberCount:"subscriber")} Subscribers</h4>
        </div>
        <button className='button'>Subscribe</button>
      </div>
      <p>{apiData?apiData.snippet.description.slice(0,300):"Description Here"}</p>
      <hr/>
     <h4>{value_converter(apiData?apiData.statistics.commentCount:"3k")} Comments</h4>

     {apiComments.map((item,index)=>{
       return(
        <div key={index}className='comment'>
          <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt=''/>
          <div>
            <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span> 2day ago</span></h3>
            <p>{item.snippet.topLevelComment.snippet.textOriginal}</p>
            <div className='comment-section'>
              <img src={like} alt=''/>
              <span>{item.snippet.topLevelComment.snippet.likeCount}</span>
              <img src={dislike} alt=''/>
              <span></span>
            </div>
          
          </div>
        
        
        </div>
     
       )
     })}
        
    
     
    </div>

  )

}
export default VideoPlay