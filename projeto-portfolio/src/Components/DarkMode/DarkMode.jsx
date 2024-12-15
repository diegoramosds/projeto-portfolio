import { useState, useEffect } from 'react';
import { FaCircleHalfStroke } from 'react-icons/fa6';
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
        <FaCircleHalfStroke title={darkMode ? "Modo escuro" : "Modo claro"} className="icon rotate" />
    </div>
  );
};

export default DarkMode;
