import React, {useState} from 'react'
import data from '../../data.json'
import moon from '../../assets/destination/image-moon.png'
import mars from '../../assets/destination/image-mars.png'
import europa from '../../assets/destination/image-europa.png'
import titan from '../../assets/destination/image-titan.png'


function Main(props) {

  const [jsondata, setJsonData] = useState(data)
    const [planetid, setPlanetId] = useState(0)

    let planetImages = [moon, mars, europa, titan]
  return (
    <div className='flex flex-col justify-around items-center pt-5 pb-14'>
      <h2 className='text-white text-center uppercase font-barlow tracking-widest text-lg mt-4'><span className='brightness-50 mr-2'>01</span> Pick your destination </h2>
      <div className='text-white flex flex-col items-center justify-center'>
        <img src={planetImages[planetid]} alt='' className='w-[250px] p-4' />
        <div className='destination--content--nav flex justify-center gap-4 uppercase'>
          <div className='tab'>moon</div>
          <div className='tab'>mars</div>
          <div className='tab'>europa</div>
          <div className='tab'>titan</div>
        </div>
        <h1 className='text-center text-7xl font-bellefair mt-4 uppercase'>{jsondata.destinations[planetid].name}</h1>
        <p className='p-6 tracking-wider text-center'>{jsondata.destinations[planetid].description}</p>
        <hr className='p-4 w-[80%]' />
        <div className='text-center'>
          <p className=''>AVG. DISTANCE</p>
          <h2 className='text-4xl pt-2 font-bellefair uppercase'>{jsondata.destinations[planetid].distance}</h2>
        </div>
        <div className='text-center mt-4'>
          <p>EST. TRAVEL TIME</p>
          <h2 className='text-4xl font-bellefair pt-2 uppercase'>{jsondata.destinations[planetid].travel}</h2>
        </div>
      </div>

    </div>
  )
}

export default Main