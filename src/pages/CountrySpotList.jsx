import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import TouristSpotCard from '../components/TouristSpotCard'

function CountrySpotList() {
    const data= useLoaderData()
    const [infos,setInfos]=useState(data)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {infos.map(info=><TouristSpotCard key={info._id} info={info}></TouristSpotCard>)}
    </div>
  )
}

export default CountrySpotList