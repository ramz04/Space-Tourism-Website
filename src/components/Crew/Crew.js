import React from 'react'
import Navbar from './Navbar'
import Main from './Main'

function Crew() {
  return (
    <div className='h-full w-full font-barlow bg-crewmobile bg-center bg-cover sm:bg-crewtablet lg:bg-crewdesktop'>
      <Navbar />
      <Main />
    </div>
  )
}

export default Crew