import React from 'react'
import { TbMoodSad } from 'react-icons/tb'

function NoCountry() {
  return (
    <div className="flex justify-center items-center flex-col h-[400px] py-20">
        <TbMoodSad className="w-72 h-72 text-stone-100"  />
        <h1 className="text-2xl font-semibold text-stone-100">No Tourist Spots are present</h1>

    </div>
  )
}

export default NoCountry