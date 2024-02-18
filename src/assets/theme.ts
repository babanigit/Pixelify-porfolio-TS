// Theme Presets

export interface ThemeDataType {
  name: string;
  body: string;
  text: string;
  // dark?: string; // Optional property
}

const lightTheme: ThemeDataType = {
  name: "light",
  body: "#D8D8D8",
  text: "#373737",
};

const darkTheme: ThemeDataType = {
  name: "dark",
  body: "#373737",
  text: "#D8D8D8",
};

export const themes: { [key: string]: ThemeDataType } = {
  light: lightTheme,
  dark: darkTheme,
};
