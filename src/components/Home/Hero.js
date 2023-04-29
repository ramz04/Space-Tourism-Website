import React from 'react'
import Navbar from './Navbar'
import Main from './Main'

function Hero() {
  return (
    <div className='bg-homemobile sm:bg-hometablet lg:bg-homedesktop h-screen sm:h-full bg-cover bg-center font-bellefair'>
        <Navbar />
        <Main />
    </div>
  )
}

export default Hero