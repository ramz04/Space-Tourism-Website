import React from 'react'
import Navbar from './Navbar'
import Main from './Main'

function Technology() {
  return (
    <div className='h-screen w-full font-barlow bg-techmobile bg-center bg-cover sm:bg-techtablet lg:bg-techdesktop'>
      <Navbar />
      <Main />
    </div>
  )
}

export default Technology