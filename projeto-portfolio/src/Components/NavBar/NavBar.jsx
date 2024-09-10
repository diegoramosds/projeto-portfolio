import { useState } from 'react';

import './NavBar.css';


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
      document.body.style.overflow = 'hidden'; // Remover rolagem
    } else {
      document.body.style.overflow = 'auto'; // Restaurar rolagem
    }
  };
  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflowY = 'auto'; // Restaurar rolagem
  };
  
    return (

      <div className="header-container">
         {isOpen && <div className="overlay" onClick={closeMenu}></div>}
         <div className="hamburger" onClick={toggleMenu}>
          &#9776; 
        </div>
        <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={closeMenu}>
        <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <span>D<strong className='important-name'>R</strong></span>
        <a  onClick={scrollToSkills} className="custom-link skill">Habilidades</a>
        <a onClick={scrollToProjects} className="custom-link project">Projetos</a>
        <a onClick={scrollToContact} className="custom-link cont">Contato</a>
        </nav>
        </div>

      </div>
      
    );
  }
  
  export default Header;
  