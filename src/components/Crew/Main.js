import React, {useState, useRef} from 'react'
import data from '../../data.json'
import anous from '../../assets/crew/image-anousheh-ansari.webp'
import douglas from '../../assets/crew/image-douglas-hurley.webp'
import mark from '../../assets/crew/image-mark-shuttleworth.webp'
import victor from '../../assets/crew/image-victor-glover.webp'

function Main() {

  const [jsondata, setJsonData] = useState(data)
  const [crewid, setCrewId] = useState(0)
  const navigation = useRef()

  function tabChange(e){
    setCrewId(e.target.dataset.index)
    let children = navigation.current.children
    for(let i = 0; i < children.length;i++){
      const child = children[i];
      child.classList.remove('activecrew')
    }
    e.target.classList.add('activecrew')
  }

  let crewImages = [douglas, mark, victor, anous]

  return (
    <div className=' text-white items-center pt-5 pb-10 sm:pb-0'>
        <h2 className='text-white text-center sm:text-left sm:pl-6 lg:pl-28 uppercase font-barlow lg:text-2xl tracking-widest text-lg mt-4'><span className='brightness-50 mr-2'>02</span> Meet your crew </h2>
        <div className='sm:flex sm:flex-col-reverse lg:flex-row-reverse lg:items-center lg:px-28 lg:justify-center'>
            <div className='sm:flex sm:flex-col-reverse lg:basis-1/2'>
              <div className='sm:mt-4 lg:mt-0'>
                  <div className='text-white flex flex-col sm:mt-6 lg:mt-0 items-center justify-center'>
                      <img src={crewImages[crewid]} alt='' className='w-[250px] lg:mt-16 lg:w-[450px]  h-full p-3 sm:p-0' />
                  </div>
                      <div className='h-[0.5px] w-[90%] sm:hidden -mt-3 brightness-50  bg-gray-200' ></div>
              </div>
              <div>
                  <div ref={navigation} className='destination--content--nav lg:hidden flex justify-center gap-4 uppercase mt-6'>
                    <div className='cursor-pointer activecrew h-3 rounded-full bg-gray-500 w-3 ' data-index={0} onClick={tabChange} ></div>
                    <div className='cursor-pointer h-3 rounded-full bg-gray-500 w-3 ' data-index={1} onClick={tabChange} ></div>
                    <div className='cursor-pointer h-3 rounded-full bg-gray-500 w-3 ' data-index={2} onClick={tabChange} ></div>
                    <div className='cursor-pointer h-3 rounded-full bg-gray-500 w-3 ' data-index={3} onClick={tabChange} ></div>
                  </div>
              </div>
            </div>
            <div className='lg:basis-1/2 '>
                <div>
                  <h3 className='text-center text-lg lg:text-left lg:text-2xl text-[#D0D6F9] brightness-75 font-bellefair mt-10 uppercase'>{jsondata.crew[crewid].role}</h3>
                  <h1 className='text-3xl lg:text-5xl lg:text-left text-center pt-2 sm:mt-1 mt-3 font-bellefair uppercase'>{jsondata.crew[crewid].name}</h1>
                  <p className='text-center lg:text-left mt-4 text-[18px] lg:text-[20px] px-3 lg:px-0 lg:mt-8 lg:pr-48 tracking-wider text-[#D0D6F9]  sm:px-20 '>{jsondata.crew[crewid].bio}</p>
                </div>
                <div>
                  <div ref={navigation} className='destination--content--nav hidden lg:mt-24 lg:mb-6 lg:flex justify-start gap-4 uppercase mt-6'>
                    <div className='cursor-pointer activecrew h-3 rounded-full bg-gray-500 w-3 ' data-index={0} onClick={tabChange} ></div>
                    <div className='cursor-pointer h-3 rounded-full bg-gray-500 w-3 ' data-index={1} onClick={tabChange} ></div>
                    <div className='cursor-pointer h-3 rounded-full bg-gray-500 w-3 ' data-index={2} onClick={tabChange} ></div>
                    <div className='cursor-pointer h-3 rounded-full bg-gray-500 w-3 ' data-index={3} onClick={tabChange} ></div>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Main