import React, {useState} from 'react'
import logo from '../../assets/shared/logo.svg'
import { Link } from 'react-router-dom'

function Navbar() {
    
    const [drawer, setDrawer] = useState(false)

    

  return (
    <div className='p-3 sm:p-0 sm:pl-6 lg:pl-14 lg:pt-10 flex items-center relative justify-between'>
        <Link to={`/`} ><img src={logo} alt='' className='w-[30px] sm:w-[40px]'/></Link>
        <div className='sm:hidden relative'>
            <button type='button' className='relative w-10 h-10 z-20 text-gray-500 rounded-sm focus:outline-none' onClick={() => setDrawer(!drawer)}>
                <span className='sr-only'>Open Main Menu</span>
                <div className="absolute block w-5 transform -translate-x-1/2 
                -translate-y-1/2 left-1/2 top-1/2">
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-5 bg-white transform transition duration-500 ease-in-out ${
                    drawer ? "rotate-45" : "-translate-y-1.5"
                  }`}></span>
                <span
                  aria-hidden="true"
                  className={`block absolute  h-0.5 w-5 bg-white transform transition duration-500 ease-in-out ${
                    drawer && "opacity-0"
                  }`}></span>
                <span
                  aria-hidden="true"
                  className={`block absolute  h-0.5 w-5 bg-white transform  transition duration-500 ease-in-out ${
                    drawer ? "-rotate-45" : "translate-y-1.5"
                  }`}></span>
              </div>
            </button>
            <div aria-hidden='true' aria-checked={!drawer} className='fixed top-0 right-0 backdrop-blur-lg bg-white/10 h-screen transform transition-all duration-300 ease-in-out w-[70%] aria-checked:translate-x-full' 
            tabIndex='-1'>
              <ul className='mt-24 pl-8 text-white space-y-5'>
                <li className='uppercase font-barlow hover:border-r-[4px] hover:border-r-white hover:brightness-50'>
                  <Link to={`/`} ><span className='font-bold text-white mr-2 '>00</span> home</Link>
                </li>
                <li className='uppercase font-barlow border-r-[4px] border-r-white'>
                  <Link to={`/destination`}><span className='font-bold text-white mr-2'>01</span> destination</Link>
                </li>
                <li className='uppercase font-barlow hover:border-r-[4px] hover:border-r-white hover:brightness-50'>
                  <Link to={`/crew`}><span className='font-bold text-white mr-2'>02</span> crew</Link>
                </li>
                <li className='uppercase font-barlow hover:border-r-[4px] hover:border-r-white hover:brightness-50'>
                  <Link to={`/technology`}><span className='font-bold text-white mr-2'>03</span> technology</Link>
                </li>
              </ul>
            </div>
        </div>
        <div className='hidden sm:flex bg-white/10 h-20 backdrop-blur-2xl'>
            <ul className='mt-16 sm:mt-0 p-8 sm:p-0 sm:px-8 lg:px-32  items-center flex w-full h-full text-white space-x-8 lg:justify-around lg:gap-8'>
                <li className='uppercase font-barlow w-full h-full hover:border-b-2 hover:border-b-white hover:brightness-50 '>
                  <Link to={`/`} className='flex items-center h-full'><span className='font-bold sm:hidden lg:flex text-white mr-2'>00</span> home</Link>
                </li>
                <li className='uppercase font-barlow  w-full h-full border-b-2 border-b-white '>
                  <Link to={`/destination`} className='flex items-center h-full'><span className='font-bold sm:hidden lg:flex text-white mr-2'>01</span> destination</Link>
                </li>
                <li className='uppercase font-barlow  w-full h-full hover:border-b-2 hover:border-b-white hover:brightness-50 '>
                  <Link to={`/crew`} className='flex items-center h-full'><span className='font-bold sm:hidden lg:flex text-white mr-2'>02</span> crew</Link>
                </li>
                <li className='uppercase font-barlow  w-full h-full hover:border-b-2 hover:border-b-white hover:brightness-50 '>
                  <Link to={`/technology`} className='flex items-center h-full'><span className='font-bold lg:flex sm:hidden text-white mr-2'>03</span> technology</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar