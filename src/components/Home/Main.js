 import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function Main() {
  return (
    <div className='text-white px-6 sm:px-24 sm:mt-10 lg:px-0 py-8 flex flex-col lg:flex-row sm:justify-around justify-between gap-20 h-[80%] items-center'>
        <div className='text-center lg:text-left lg:basis-1/2'>
            <h3 className='uppercase tracking-widest sm:text-lg text-[#D0D6F9] lg:text-xl font-light font-barlow'>So, you want to travel to</h3>
            <h1 className='mt-4 uppercase text-7xl sm:text-[120px] lg:text-9xl lg:tracking-widest sm:tracking-widest tracking-wide '>
                Space
            </h1> 
            <p className='mt-6 text-[#D0D6F9]  tracking-wider sm:px-10 font-barlow'>
            Let’s face it; if you want to go to space, you might as well genuinely go to 
  outer space and not hover kind of on the edge of it. Well sit back, and relax 
  because we’ll give you a truly out of this world experience!
            </p>
        </div>
        <Link to={`destination`}>
          <div className='uppercase mt-16 text-4xl py-[6.8rem] lg:py-32 lg:px-20  lg:-mt-0 px-[3.2rem] rounded-full bg-white text-[#0B0D17]'>
              Explore
          </div>
        </Link>
    </div>
  )
}

export default Main