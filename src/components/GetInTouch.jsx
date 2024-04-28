import React from 'react'
import man from '../assets/bike.svg'

function GetInTouch() {
  return (
    <div className='relative mt-20 '>
        <img className='absolute z-0 inset-0 h-full w-full bg-right-bottom bg-cover' src={man} alt="" />
        <div className='max-w-5xl relative z-10 mx-auto flex flex-col justify-center items-center bg-base-100 bg-opacity-35 p-3 lg:p-40  rounded-2xl space-y-5'>
            <h1 className='text-4xl font-bold text-stone-900'>Trusted By People Around the world</h1>
            <p className='text-center text-stone-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quasi, dolor perferendis beatae dignissimos itaque doloribus vel ipsum soluta numquam quam aut reiciendis.
            </p>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

        </div>

    </div>
  )
}

export default GetInTouch