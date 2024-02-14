
import React from 'react'
import { ThemeDataType } from '../../assets/theme'
interface Iprops {
  theme:ThemeDataType;
}

const Certificate = ({theme}:Iprops) => {
  return (
    <div className=' h-24 w-screen bg-red-700'>Certificate</div>
  )
}

export default Certificate