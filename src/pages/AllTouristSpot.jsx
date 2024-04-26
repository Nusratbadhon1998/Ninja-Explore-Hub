import React from 'react'
import { useLoaderData } from 'react-router-dom'

function AllTouristSpot() {

  const data = useLoaderData()
  return (
    <div>AllTouristSpot:{data.length}</div>
  )
}

export default AllTouristSpot