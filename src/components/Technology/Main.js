import React, {useState, useRef} from 'react'
import data from '../../data.json'
import launchdk from '../../assets/technology/image-launch-vehicle-landscape.jpg'
import launch from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import spacedk from '../../assets/technology/image-space-capsule-landscape.jpg'
import space from '../../assets/technology/image-space-capsule-portrait.jpg'
import portdk from '../../assets/technology/image-spaceport-landscape.jpg'
import port from '../../assets/technology/image-spaceport-portrait.jpg'



function Main() {

  const [jsondata, setJsonData] = useState(data)
  const [techid, setTechId] = useState(0)
  const navigation = useRef()

  let techImagesDk = [launchdk, portdk, spacedk]
  let techImages = [launch, port, space]

  function tabChange(e){
    setTechId(e.target.dataset.index)
    let children = navigation.current.children
    for(let i = 0; i < children.length;i++){
      const child = children[i];
      child.classList.remove('activetech')
    }
    e.target.classList.add('activetech')
  }

  return (
    <div className=' text-white items-center pt-5 pb-10'>
        <h2 className='text-white text-center sm:text-left sm:pl-6 uppercase font-barlow tracking-widest text-lg mt-4'><span className='brightness-50 mr-2'>03</span> Space launch 101 </h2>
        <div className='text-white sm:mt-8 sm:p-0 mt-4'>
            <img src={techImagesDk[techid]} alt='' className='w-full h-full' />
        </div>
        <div ref={navigation} className='destination--content--nav font-bellefair flex justify-center gap-4 uppercase sm:mt-8 mt-6'>
          <div className='cursor-pointer activetech border-[1px] px-[12px] py-[3px] rounded-full ' data-index={0} onClick={tabChange} >1</div>
          <div className='cursor-pointer border-[1px] px-[11px] py-[3px] rounded-full ' data-index={1} onClick={tabChange} >2</div>
          <div className='cursor-pointer border-[1px] px-[11px] py-[3px] rounded-full ' data-index={2} onClick={tabChange} >3</div>
        </div>
        <h2 className='text-center text-[#D0D6F9] sm:mt-14 font-bellefair mt-6 uppercase'>The terminology ...</h2>
        <h1 className='text-3xl text-center mt-3 font-bellefair uppercase'>{jsondata.technology[techid].name}</h1>
        <p className='text-center mt-4 text-[18px] px-3 sm:px-24 tracking-wider text-[#D0D6F9] '>{jsondata.technology[techid].description}</p>
    </div>
  )
}

export default Main