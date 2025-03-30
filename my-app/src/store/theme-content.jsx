// src/store/theme-context.jsx
import { createContext, useState } from 'react';

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {}
});

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState('light');

  const toggleThemeHandler = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: toggleThemeHandler }}>
      <div className={theme}>{props.children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
