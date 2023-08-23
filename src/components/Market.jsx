import React, {useState} from 'react'
import axios from 'axios'

const API = process.env.REACT_APP_RAPID_API


export default function Market() {

  const [MARKET, setMARKET] = useState(null)

  const getData = async(e)=>{
    e.preventDefault()

    const elem = document.getElementById("inputBox2")
    const value = elem.value

    const options = {
      method: 'GET',
      url: 'https://bravenewcoin.p.rapidapi.com/market/'+value,
      headers: {
        'X-RapidAPI-Key': API,
        'X-RapidAPI-Host': 'bravenewcoin.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      setMARKET(await response.data)
    } catch (error) {
      console.error(error?.response?.data?.status);
      setMARKET(await error?.response?.data)
    }
  }

  return (

    <div className='w-[90%] md:w-[80%] mx-auto'>
      <div className='text-center text-3xl font-bold italic mt-10'>Market</div>

      <form className='  my-10 flex'>
        <input id='inputBox2' type="text"  placeholder='Enter Market ID...' className='w-[70%] md:w-[80%] p-3 bg-gray-500 text-white rounded focus:outline'/>
        <button type='submit' className='ml-1 w-[30%] md:w-[20%] bg-emerald-500 p-3 text-white text-center rounded hover:cursor-pointer' onClick={(e)=>{getData(e)}}>Get</button>
      </form>

      <div className='overflow-hidden'>
        {
            MARKET?.status === "BAD_REQUEST" ?
              <div className='text-red-500'>Invalid ID***</div>
            :
            MARKET != null ?
              <div className='p-2 overflow-hidden'>
                <div className='font-semibold '>Base Asset Id: {MARKET.baseAssetId}</div>
                <div className=''>Quote Asset Id: {MARKET.quoteAssetId}</div>
                <div className='text-sm text-gray-500 '> ID: {MARKET.id}</div>
              </div>
            :
            ""
        }
      </div>
    </div>
  )
}
