


import React from 'react'
import HeaderPart1 from '../../components/1header/HeaderPart1';
import Headerpart2 from '../../components/1header/Headerpart2';
import HeaderPart3 from '../../components/1header/HeaderPart3';

import { ThemeDataType } from '../../assets/theme'
interface Iprops {
    theme:ThemeDataType;
    setTheme:(value:string)=>void;
}
const Contact = ({theme,setTheme}:Iprops) => {
  return (
    <>
    <div>
    <div>
        <HeaderPart1 theme={theme} />
        <Headerpart2 theme={theme} setTheme={setTheme} />
        <HeaderPart3 theme={theme} />
      </div>
    </div>
    </>
  )
}

export default Contact