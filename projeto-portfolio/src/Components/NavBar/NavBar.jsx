import { useState } from 'react';

import './NavBar.css';
import { FaBars, FaTimes  } from 'react-icons/fa';
import DarkMode from '../DarkMode/DarkMode';


function Header() {
  function scrollToSkills() {
    closeMenu();
    const skillsElement = document.getElementById('skills');
    skillsElement.scrollIntoView({ behavior: 'smooth' });
  }
  function scrollToProjects() {
    closeMenu();
    const skillsElement = document.getElementById('projects');
    skillsElement.scrollIntoView({ behavior: 'smooth' });
  }

  function scrollToContact() {
    closeMenu();
    const skillsElement = document.getElementById('contact');
    skillsElement.scrollIntoView({ behavior: 'smooth' });
  }

  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden'; 
      document.body.style.position = 'fixed';
    }  else {
     
      document.body.style.overflowY = 'auto';
      document.body.style.position = '';  
    }
  };
  
  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflowY = 'auto';  
    document.body.style.position = '';  
  }
    return (

      <div className="header-container">
        <div className='header-background'>
         <p><span><DarkMode/></span><strong className='important-name'>DR</strong></p>
         
          {isOpen && <div className="overlay" onClick={closeMenu}></div>}

          {isOpen ?  <div className="hamburger" onClick={toggleMenu}><FaTimes className="icon rotate"/> </div>
          : <div className="hamburger" onClick={toggleMenu}><FaBars className="icon rotate"/> </div>
          }
      
          <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={closeMenu}>
            <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
            <a  onClick={scrollToSkills} className="custom-link skill">Habilidades</a>
            <a onClick={scrollToProjects} className="custom-link project">Projetos</a>
            <a onClick={scrollToContact} className="custom-link cont">Contato</a>
            </nav>
          </div>
        </div>
 
      </div>
      
    );
  }
  
  export default Header;
  