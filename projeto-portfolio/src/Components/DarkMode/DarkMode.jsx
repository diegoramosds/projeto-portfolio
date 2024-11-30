import { useState, useEffect } from 'react';
import { FaLightbulb, FaMoon } from 'react-icons/fa';
import './DarkMode.css';

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="dark_mode" onClick={toggleDarkMode}>
      {darkMode ? (
        <FaMoon title="Modo claro" className="icon rotate" />
      ) : (
        <FaLightbulb title="Modo escuro" className="icon rotate" />
      )}
    </div>
  );
};

export default DarkMode;
