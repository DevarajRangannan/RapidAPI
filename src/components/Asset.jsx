import React, {useState} from 'react'
import axios from 'axios'

const API = process.env.REACT_APP_RAPID_API

export default function Asset() {

  const [ASSET, setASSET] = useState(null)

  const getData = async(e)=>{
    e.preventDefault()
    const elem = document.getElementById("inputBox1")
    const value = elem.value

    const options = {
      method: 'GET',
      url: 'https://bravenewcoin.p.rapidapi.com/asset/'+value,
      headers: {
        'X-RapidAPI-Key': API,
        'X-RapidAPI-Host': 'bravenewcoin.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      setASSET(await response.data)
    } catch (error) {
      console.error(error?.response?.data?.status);
      setASSET(await error?.response?.data)

    }
  }

  return (

    <div className='w-[90%] md:w-[80%] mx-auto'>
      <div className='text-center text-3xl font-bold italic mt-10'>Assets</div>

      <form className='  my-10 flex'>
        <input id='inputBox1' type="text"  placeholder='Enter Asset ID...' className='w-[70%] md:w-[80%] p-3 bg-gray-500 text-white rounded focus:outline'/>
        <button type='submit' className='ml-1 w-[30%] md:w-[20%] bg-emerald-500 p-3 text-white text-center rounded hover:cursor-pointer' onClick={(e)=>{getData(e)}}>Get</button>
      </form>

      <div>
        {
          ASSET?.status === "ACTIVE" ?
            <div className='w-[70%] md:w-[80%] p-2'>
              <div className='text-xl font-semibold truncate'>Name: {ASSET.name}</div>
              <div >Type: {ASSET.type}</div>
              <div className='text-sm text-gray-500 truncate'> ID: {ASSET.id}</div>
            </div>
          :
            ASSET?.status === "BAD_REQUEST" ?
              <div className='text-red-500'>Invalid ID***</div>
            :
              ""
        }
      </div>
    </div>
  )
}
