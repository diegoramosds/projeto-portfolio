import { useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa';

import './DarkMode.css';
const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (darkMode) {
          document.body.classList.remove('dark-mode');
        } else {
          document.body.classList.add('dark-mode');
        }
      };
  return (
    <div className="dark_mode" onClick={toggleDarkMode}>
       {darkMode ? <FaSun title='Modo claro' className='model_sun'/>  : <FaMoon title='Modo escuro' className='model_moon'/>}
    </div>
  )
}

export default DarkMode;