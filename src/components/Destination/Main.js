import React, {useState, useRef} from 'react'
import data from '../../data.json'
import moon from '../../assets/destination/image-moon.png'
import mars from '../../assets/destination/image-mars.png'
import europa from '../../assets/destination/image-europa.png'
import titan from '../../assets/destination/image-titan.png'


function Main(props) {

  const [jsondata, setJsonData] = useState(data)
  const [planetid, setPlanetId] = useState(0)
  const navigation = useRef()

  function tabChange(e){
    setPlanetId(e.target.dataset.index)
    let children = navigation.current.children
    for(let i = 0; i < children.length;i++){
      const child = children[i];
      child.classList.remove('active')
    }
    e.target.classList.add('active')
  }

    let planetImages = [moon, mars, europa, titan]
  return (
    <div className='pt-5 pb-10 lg:pb-0 lg:pt-0'>
      <h2 className='text-white text-center sm:pl-6 lg:pl-48 lg:text-2xl lg:mt-6 sm:text-left uppercase font-barlow tracking-widest text-lg mt-4 lg:mt-8'><span className='brightness-50 mr-2'>01</span> Pick your destination </h2>
      <div className='lg:flex lg:px-4 lg:justify-center'>
        <img src={planetImages[planetid]} alt='' className='w-[250px] p-4 lg:p-0 lg:scale-[60%] lg:basis-1/2' />
        <div className='text-white flex flex-col sm:mt-6 lg:mt-0 items-center lg:items-start justify-center lg:basis-1/2'>
          <div ref={navigation} className='destination--content--nav flex justify-center lg:text-lg lg:justify-start gap-4 sm:gap-10 sm:mt-4 uppercase'>
            <div className='cursor-pointer active' data-index={0} onClick={tabChange} >moon</div>
            <div className='cursor-pointer' data-index={1} onClick={tabChange}>mars</div>
            <div className='cursor-pointer' data-index={2} onClick={tabChange}>europa</div>
            <div className='cursor-pointer' data-index={3} onClick={tabChange}>titan</div>
          </div>
          <h1 className='text-center lg:text-left text-7xl lg:text-[120px] font-bellefair mt-4 sm:mt-6 uppercase'>{jsondata.destinations[planetid].name}</h1>
          <p className='p-6 tracking-wider lg:text-left text-[#D0D6F9] brightness-75 lg:px-0 lg:pr-80 text-center sm:px-14'>{jsondata.destinations[planetid].description}</p>
          <hr className='bg-[#D0D6F9] lg:mt-6  sm:mt-10 w-[80%] brightness-50' />
          <div className='sm:flex mt-6 sm:items-center sm:gap-20 lg:gap-24 mb-4'>
            <div className='text-center lg:text-left'>
              <p className=''>AVG. DISTANCE</p>
              <h2 className='text-4xl pt-2 font-bellefair uppercase'>{jsondata.destinations[planetid].distance}</h2>
            </div>
            <div className='text-center lg:text-left mt-4 sm:mt-0'>
              <p>EST. TRAVEL TIME</p>
              <h2 className='text-4xl font-bellefair pt-2 uppercase'>{jsondata.destinations[planetid].travel}</h2>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Main