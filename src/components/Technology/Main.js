import React, {useState, useRef} from 'react'
import data from '../../data.json'
import launchdk from '../../assets/technology/image-launch-vehicle-landscape.webp'
import launch from '../../assets/technology/image-launch-vehicle-portrait.webp'
import spacedk from '../../assets/technology/image-space-capsule-landscape.webp'
import space from '../../assets/technology/image-space-capsule-portrait.webp'
import portdk from '../../assets/technology/image-spaceport-landscape.webp'
import port from '../../assets/technology/image-spaceport-portrait.webp'



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
        <h2 className='text-white text-center sm:text-left lg:text-2xl sm:pl-6 lg:mt-8 lg:pl-[5rem] uppercase font-barlow tracking-widest text-lg mt-4'><span className='brightness-50 mr-2'>03</span> Space launch 101 </h2>
        <div className='lg:flex lg:flex-row-reverse lg:justify-items-stretch'>
          <div className='lg:basis-1/2 lg:justify-self-end'>
            <div className='text-white sm:mt-8 sm:p-0 mt-4 lg:flex lg:justify-end'>
              <picture>
                <source media="(min-width:1024px)" srcSet={techImages[techid]} />
                <img src={techImagesDk[techid]} alt='' className='w-full h-full lg:h-[530px] lg:w-[515px]' />
              </picture>
            </div>
            <div ref={navigation} className='destination--content--nav lg:hidden font-bellefair flex justify-center gap-4 uppercase sm:mt-8 mt-6'>
              <div className='cursor-pointer activetech border-[1px] px-[12px] py-[3px] rounded-full ' data-index={0} onClick={tabChange} >1</div>
              <div className='cursor-pointer border-[1px] px-[11px] py-[3px] rounded-full ' data-index={1} onClick={tabChange} >2</div>
              <div className='cursor-pointer border-[1px] px-[11px] py-[3px] rounded-full ' data-index={2} onClick={tabChange} >3</div>
            </div>
          </div>
          <div className='lg:basis-1/2  lg:pl-[5rem] lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-20'>
          <div ref={navigation} className='destination--content--nav font-bellefair hidden  lg:flex flex-col justify-center gap-4 uppercase sm:mt-8 mt-6'>
              <div className='cursor-pointer text-3xl activetech border-[1px] px-[12px] lg:px-[16px] lg:py-[3px] py-[3px] rounded-full ' data-index={0} onClick={tabChange} >1</div>
              <div className='cursor-pointer text-3xl border-[1px] px-[11px] py-[3px] lg:px-[14px] lg:py-[3px] rounded-full ' data-index={1} onClick={tabChange} >2</div>
              <div className='cursor-pointer text-3xl border-[1px] px-[11px] py-[3px] lg:px-[14px] lg:py-[3px] rounded-full ' data-index={2} onClick={tabChange} >3</div>
          </div>
          <div>
            <h2 className='text-center lg:text-left text-[#D0D6F9] sm:mt-14 font-bellefair mt-6 uppercase'>The terminology ...</h2>
            <h1 className='text-3xl lg:text-5xl text-center lg:text-left mt-3 font-bellefair uppercase'>{jsondata.technology[techid].name}</h1>
            <p className='text-center mt-4 lg:text-lg lg:text-left text-[18px] lg:px-0 lg:pr-28 px-3 sm:px-24 tracking-wider text-[#D0D6F9] '>{jsondata.technology[techid].description}</p>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Main