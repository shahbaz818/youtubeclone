import React from 'react'
import './Video.css'
import VideoPlay from '../VideoPlay/VideoPlay'
import Recomended from '../Recomended/Recomended'
import {useParams} from 'react-router-dom'

const Video=()=>{
  const {videoId,categoryId}=useParams();
 
  

  return (
    <div className='play-container'>
        <VideoPlay videoId={videoId}/>
        <Recomended categoryId={categoryId}/>
    </div>
  )
}

export default Video