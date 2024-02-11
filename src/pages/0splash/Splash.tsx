

import React from 'react'
import { ThemeDataType } from '../../assets/theme';

interface datatype {
    theme: ThemeDataType;
    setTheme: (value: string) => void;
  }

const Splash = ({theme,setTheme}:datatype) => {
  return (
    <div>Splash</div>
  )
}

export default Splash