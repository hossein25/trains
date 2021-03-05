import React, { createContext, useContext, useState } from 'react';
import { THEME_TYPE } from '../constants';

const ThemeContext = createContext(THEME_TYPE.LIGHT);

const SetThemeContext = createContext(() => {});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEME_TYPE.LIGHT);

  return (
    <ThemeContext.Provider value={theme}>
      <SetThemeContext.Provider value={setTheme}>{children}</SetThemeContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useThemeContext = () => useContext(ThemeContext);
export const useSetThemeContext = () => useContext(SetThemeContext);
