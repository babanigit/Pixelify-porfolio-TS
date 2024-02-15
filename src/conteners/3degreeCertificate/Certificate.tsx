
import React from 'react'
import { ThemeDataType } from '../../assets/theme'
interface Iprops {
  theme:ThemeDataType;
}

const Certificate = ({theme}:Iprops) => {
  return (
    <div className=' h-screen w-screen bg-red-100 grid grid-flow-col grid-cols-4 place-items-center'>
      <div className=' grid col-span-3 bg-blue-200 w-[60%] h-[40%] justify-center items-center'>
        hello1
      </div>
      <div>
        hello2
      </div>
   </div>
  )
}

export default Certificate