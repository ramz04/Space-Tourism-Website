import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function Main() {
  return (
    <div className='text-white px-6 sm:px-24 lg:px-0 py-8 mt-10 flex flex-col lg:flex-row sm:justify-around justify-between gap-28 h-[80%] items-center'>
        <div className='text-center lg:text-left lg:basis-1/2'>
            <h3 className='uppercase tracking-widest sm:text-lg lg:text-xl font-light font-barlow'>So, you want to travel to</h3>
            <h1 className='mt-6 uppercase text-7xl sm:text-8xl lg:text-9xl lg:tracking-widest sm:tracking-wider tracking-wide '>
                Space
            </h1>
            <p className='mt-6 text-[#D0D6F9]  tracking-wider lg:px-0 lg:pr-48  sm:px-20 font-barlow'>
            Let’s face it; if you want to go to space, you might as well genuinely go to 
  outer space and not hover kind of on the edge of it. Well sit back, and relax 
  because we’ll give you a truly out of this world experience!
            </p>
        </div>
        <Link to={`destination`}>
          <div className='uppercase  text-3xl py-20 sm:-mt-6 lg:-mt-0  -mt-2 px-8 rounded-full bg-white text-[#0B0D17]'>
              Explore
          </div>
        </Link>
    </div>
  )
}

export default Main