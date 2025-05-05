import { useState, createContext } from "react";

import { ThemeProvider } from "styled-components";
import { themes } from "./assets/theme";

import Main from "./conteners/Main";

interface SetThemeContextType {
  (value: string): void;
}

export const SetThemeContext = createContext<SetThemeContextType>(() => {});

const App = () => {
  const [themeState, setThemeState] = useState<string>("dark");

  return (
    <>
      <div>
        <ThemeProvider theme={themes[themeState]}>
          <SetThemeContext.Provider value={setThemeState}>
            <Main theme={themes[themeState]} />
          </SetThemeContext.Provider>
        </ThemeProvider>
      </div>
    </>
  );
};

export default App;
