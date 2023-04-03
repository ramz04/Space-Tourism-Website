import React from 'react'
import moon from '../../assets/destination/image-moon.png'

function Main(props) {
  return (
    <div className='flex flex-col justify-around items-center h-full'>
        <img src={`${props.img}`} />

    </div>
  )
}

export default Main