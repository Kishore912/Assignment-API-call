import React from 'react'
import { useEffect, useState } from 'react';
const Gallery = () => {
    const[data,Image]=useState([])

    const Api = async() =>{
    const x = await fetch("https://api.unsplash.com/photos/?client_id=0rgdUdgdqjUvPchiVKfxZiIcIPagL-J3eGUzuo3xOVY");
    const Response = await x.json();
    console.log(Response);
    Image(Response)
  }
  useEffect(() => {
    Api();
  },[])

  return (
    <div>
      <div className='flex justify-center w-[100vw]'>
      <div className='grid grid-cols-4 gap w-[75vw]'>
      {data.map((data,index)=>(
        <div key = {index} className=''>
          <img src={data.links.download}/>
        </div>  
      ))}
      

      </div>
    </div>
    </div>
  )
}

export default Gallery
