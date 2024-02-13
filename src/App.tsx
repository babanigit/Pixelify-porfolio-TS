import React, { useState } from "react";
// import logo from "./logo.svg";



import { ThemeProvider } from "styled-components";
import { themes } from "./assets/theme";

import Main from "./conteners/Main";

function App() {
  const [themeState, setThemeState] = useState("light");

  return (
    <>
      <div>
        <ThemeProvider theme={themes[themeState]}>
          <Main   theme={themes[themeState]} setTheme={setThemeState}/>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
