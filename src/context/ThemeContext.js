import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GlobalStyles from '../GlobalStyles';

const ThemeContext = createContext();

// Define custom theme colors
const themeOptions = {
  light: createTheme({ palette: { mode: 'light' } }),
  dark: createTheme({ palette: { mode: 'dark' } }),
  teal: createTheme({ palette: { mode: 'light', primary: { main: '#17B8A6' } } }),
  sky: createTheme({ palette: { mode: 'light', primary: { main: '#38bdf8' } } }),
  pink: createTheme({ palette: { mode: 'light', primary: { main: '#F50057' } } }),
  magenta: createTheme({ palette: { mode: 'light', primary: { main: '#f50ae3' } } }),
};

export const CustomThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('preferredTheme');
    if (storedTheme && themeOptions[storedTheme]) {
      setThemeName(storedTheme);
    }
  }, []);

  const theme = useMemo(() => themeOptions[themeName], [themeName]);

  const toggleTheme = (newTheme) => {
    if (themeOptions[newTheme]) {
      setThemeName(newTheme);
      localStorage.setItem('preferredTheme', newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
