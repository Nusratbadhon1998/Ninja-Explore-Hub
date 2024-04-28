import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import TouristSpotCard from '../components/TouristSpotCard'
import CountriesCard from '../components/CountriesCard'
import NoCountry from '../components/NoCountry'

function CountrySpotList() {
    const data= useLoaderData()
    const [infos,setInfos]=useState(data)

    if (infos.length<=0){
      return <NoCountry></NoCountry>
    }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 max-w-6xl mx-auto my-20'>
        {infos.map(info=><CountriesCard key={info._id} info={info}></CountriesCard>)}
    </div>
  )
}

export default CountrySpotList