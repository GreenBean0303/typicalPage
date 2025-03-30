import './MainHeader.css';
import Navigation from './Navigation';
import { useContext } from 'react';
import ThemeContext from '../../store/theme-content';

const MainHeader = (props) => {
  const themeCtx = useContext(ThemeContext);

  return (
    <header className={`main-header ${themeCtx.theme}`}>
      <h1>A Typical Page</h1>
      <Navigation onLogout={props.onLogout} />
      <button onClick={themeCtx.toggleTheme}>Toggle Theme</button>
    </header>
  );
};

export default MainHeader;
