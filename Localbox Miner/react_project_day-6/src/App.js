import React,{useContext} from 'react';
import {ThemeProvider, ThemeContext} from './components/ThemeContext';
import ThemeToggleButton from './components/ThemeToggleButton';
import './App.css';

const App = () => {
  const { theme } = useContext(ThemeContext);

  const appStyle = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme === 'light' ? '#f0f0f0' : '#222',
    color: theme === 'light' ? '#000' : '#fff',
    transition: 'all 0.3s ease',
    padding: '20px',
  };

  return (
    <div style={appStyle}>
      <h1>Theme Toggle Application</h1>
      <p>This is a simple application to demonstrate theme toggling using React Context API.</p>
      <ThemeToggleButton />
      <p>Additional Text Content</p>
      <p>More Text Content</p>
    </div>
  );
};

const ThemedApp = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default ThemedApp;
