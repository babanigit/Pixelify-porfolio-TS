

// Theme Presets

export interface ThemeDataType {
    name: string;
    body: string;
    text: string;
    // dark?: string; // Optional property
  }
  
  const lightTheme: ThemeDataType = {
    name: "light",
    body: "#FFFFFF",
    text: "#343434",
  };
  
  const darkTheme: ThemeDataType = {
    name: "dark",
    body: "#1D1D1D",
    text: "#FFFFFF",
  
  };
  
  export const themes: { [key: string]: ThemeDataType } = {
    light: lightTheme,
    dark: darkTheme,
  };
  