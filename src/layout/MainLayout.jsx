import React from 'react'
import Nav from '../components/Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function MainLayout() {
  return (
    <div className='bg-[#e5e8ee]'>
        <div className='max-w-7xl mx-auto'>
        <Nav></Nav>

        </div>
        {/* <div className='min-h-[calc(100vh-378px)]'> */}

        <Outlet></Outlet>
        {/* </div> */}
        <Footer></Footer>
    </div>
  )
}

export default MainLayout