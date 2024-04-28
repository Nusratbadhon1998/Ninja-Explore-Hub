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
      <h2 className="card-title font-bold text-2xl">{country_name}</h2>
      <p className='font-medium text-sm'>{description.slice(0,160)}...</p>
      <div className="card-actions">
       <Link className='btn outline-none border-none transition transform duration-200 hover:bg-stone-50 hover:text-stone-700 px-4 py-2 bg-[#f3aa4e] text-black' to={`/countries/${country_name}`}>View details</Link>
      </div>
    </div>
  </div>
  )
}

export default CountryCard