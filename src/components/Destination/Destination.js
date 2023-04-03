import React from 'react'
import Navbar from './Navbar'
import data from '../../data.json'
import Main from './Main'

function Destination() {

    let content = data.destinations.map((i) => {
      return (
        <Main 
          img = {i.images.png}
          name = {i.name}
          distance = {i.distance}
          desc = {i.description}
          travel = {i.travel}
        />
      )
    })

    console.log(content)

  return (
    <div className='h-screen bg-destinationmobile bg-center bg-cover sm:bg-destinationtablet lg:bg-destinationdesktop'>
      <Navbar />
        <h2 className='text-white text-center uppercase font-barlow tracking-widest text-lg mt-4'><span className='brightness-50 mr-2'>01</span> Pick your destination </h2>
      <div>
          {content}
      </div>
    </div>
  )
}

export default Destination