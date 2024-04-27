import React from 'react'

function CountryCard({country}) {
    const {country_name,image,description}= country
  return (
    <div className="card w-96 bg-stone-200 shadow-xl">
    <figure className="px-10 pt-10">
      <img src={image} alt="Shoes" className="rounded-xl aspect-[3/2] transform transition duration-300 hover:scale-110" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{country_name}</h2>
      <div className="card-actions">
        <button className="btn btn-primary"> View More</button>
      </div>
    </div>
  </div>
  )
}

export default CountryCard