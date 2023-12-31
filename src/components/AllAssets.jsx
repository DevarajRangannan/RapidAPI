import React, {useEffect, useState} from 'react'
import axios from 'axios'
import copy from "copy-to-clipboard";

const API = process.env.REACT_APP_RAPID_API

export default function AllAssets() {

  const [ASSETS, setASSETS] = useState([])
  
  const getAllAssets = async()=>{
    const options = {
      method: 'GET',
      url: 'https://bravenewcoin.p.rapidapi.com/asset',
      params: {status: 'ACTIVE'},
      headers: {
        'X-RapidAPI-Key': API,
        'X-RapidAPI-Host': 'bravenewcoin.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      const tempData = await response.data.content.slice(0,200)
      setASSETS(await tempData)
    } catch (error) {
      console.error(error);
    }
  }

  const copyID = (e)=>{
    copy(e.target.id)
    e.target.innerHTML="Copied"

    setTimeout(()=>{
      e.target.innerHTML="Copy ID"
    },1000)
  }
    useEffect(()=>{
      getAllAssets()
    },[])

  return (
    <>
      <div className='text-center text-3xl font-bold italic mt-10'>All Assets</div>

      <div className='w-[90%] md:w-[80%] mx-auto my-10 p-3 h-[78vh] border-4 overflow-y-scroll'>
          {
            ASSETS.length > 0 ?  ASSETS.map((asset, index)=>{
                return <div key={index} className='w-full flex-col '>
                <div className=' flex'>
                  <div className='w-[70%] md:w-[80%] p-2'>
                    <div className='text-xl font-semibold truncate'>Name: {asset.name}</div>
                    <div >Type: {asset.type}</div>
                    <div className='text-sm text-gray-500 truncate'> ID: {asset.id}</div>
                  </div>
                  <span id={asset.id} className='flex items-center justify-center w-[30%] md:w-[20%] bg-blue-600 hover:cursor-pointer rounded text-white' onClick={(e)=>copyID(e)}>Copy ID</span>
                </div>
                <div className='my-2 w-full h-0.5 bg-gray-300'></div>
              </div>
              })
            :
            <div className='w-full text-center'>Loading...</div>

          }
      </div>
    </>
  )
}
