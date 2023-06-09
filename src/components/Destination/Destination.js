import React from 'react'
import Navbar from './Navbar'
import Main from './Main'

function Destination() {
  return (
    <div className='h-full w-full lg:h-screen font-barlow bg-destinationmobile bg-center bg-cover sm:bg-destinationtablet lg:bg-destinationdesktop'>
      <Navbar />
      <Main />
    </div>
  )
}

export default Destination