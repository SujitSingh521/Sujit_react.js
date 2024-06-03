import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext'; 

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <button
        className={`theme-toggle-button ${theme === 'light' ? 'active' : ''}`}
        onClick={toggleTheme}
        disabled={theme === 'light'}
      >
        Light Mode
      </button>
      
      <button
        className={`theme-toggle-button ${theme === 'dark' ? 'active' : ''}`}
        onClick={toggleTheme}
        disabled={theme === 'dark'}
      >
        Dark Mode
      </button>
    </div>
  );
};

export default ThemeToggleButton;
