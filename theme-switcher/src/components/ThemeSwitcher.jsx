import React from 'react';
import { THEME_TYPE } from '../constants';
import { useThemeContext, useSetThemeContext } from '../providers/ThemeProvider';

const ThemeSwitcher = () => {
  const themeMode = useThemeContext();
  const setTheme = useSetThemeContext();

  const handleThemeChange = (e) => {
    setTheme((pre) => (pre === THEME_TYPE.LIGHT ? THEME_TYPE.DARK : THEME_TYPE.LIGHT));
  };

  return (
    <div className="switch-container">
      <label className="switch">
        <input
          data-testid="theme-changer"
          type="checkbox"
          checked={themeMode === THEME_TYPE.DARK}
          onChange={handleThemeChange}
        />
        <span className="slider round"></span>
      </label>
      <span className="text-color bold">Dark mode</span>
    </div>
  );
};

export default ThemeSwitcher;
