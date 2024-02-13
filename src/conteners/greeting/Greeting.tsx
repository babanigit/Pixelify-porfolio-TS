


import React from 'react'
import { ThemeDataType } from '../../assets/theme'
import FeelingProud from './FeelingProud';

interface dataType {
  theme: ThemeDataType;
}

const Greeting = (theme: dataType ) => {
  return (
    <>
    <div className=' h-screen w-screen grid grid-cols-3 gap-3  '>

      <div className=' h-full w-full  grid  items-center  col-span-2  gap-2 justify-center grid-flow-col'>

      I'm  <div className=' text-5xl font-bold' >Aniket Panchal.</div> Developer <div className=' text-3xl font-bold' >and</div> digital Artist.
      </div>

      <div className=' h-full w-full grid justify-center items-center  col-span-1'> 
      <FeelingProud theme={theme} />
      </div>

    </div>
    
    </>
  )
}

export default Greeting