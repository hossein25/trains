import React from 'react';
import { Helmet } from 'react-helmet';
import NameBox from './components/NameBox';
import ThemeSwitcher from './components/ThemeSwitcher';
import Styles from './data/Styles';
import ThemeProvider, { useThemeContext } from './providers/ThemeProvider';

const StyleTag = () => {
  const themeMode = useThemeContext();
  return (
    <Helmet>
      <style>{Styles(themeMode)}</style>
    </Helmet>
  );
};

function App() {
  return (
    <ThemeProvider>
      <StyleTag />
      <NameBox />
      <ThemeSwitcher />
    </ThemeProvider>
  );
}

export default App;
