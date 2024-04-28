import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

function CountryCard({country}) {

    const {country_name,image,description}= country
  return (
    <div className="card w-full h-full *:text-white  image-full  shadow-xl hover:cursor-pointer hover:scale-95 transition transform ease-in duration-300">
    <figure className="">
      <img src={image} alt="Shoes" className="rounded-xl aspect-[3/2] w-full bg-cover transform transition duration-300 hover:scale-110" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title text-stone-100 font-bold text-2xl">{country_name}</h2>
      <p className='font-medium  text-stone-200 text-sm'>{description.slice(0,160)}...</p>
      <div className="card-actions">
       <Link className='btn outline-none border-none transition transform duration-200 hover:bg-stone-50 hover:text-stone-100 px-4 py-2 text-stone-200 bg-gradient-to-r from-[#612bd3] to-[#6e008f]' to={`/countries/${country_name}`}>View details</Link>
      </div>
    </div>
  </div>
  )
}

export default CountryCard