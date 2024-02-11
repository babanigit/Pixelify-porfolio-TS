

import React from 'react'
import Header from '../../components/1header/Header';

import { ThemeDataType } from '../../assets/theme';

interface datatype {
    theme: ThemeDataType;
    setTheme: (value: string) => void;
  }

const HomePage = ({theme,setTheme}:datatype) => {

   

  return (
    <div>
              <Header theme={theme} setTheme={setTheme} />
      
    </div>
  )
}

export default HomePage