import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { Helmet } from 'react-helmet-async'

function Home() {
  return (
    <div>
        <Helmet>
        <title>Ninja Explore Hub</title>
      </Helmet>
      <h1>
        Home
      </h1>
    </div>
  )
}

export default Home