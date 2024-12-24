import { useState } from 'react';

import './NavBar.css';
import { FaBars, FaGithub, FaLinkedin, FaTimes  } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import DarkMode from '../DarkMode/DarkMode';


function Header() {
  function scrollToAbout() {
    closeMenu();
    const skillsElement = document.getElementById('about');
    skillsElement.scrollIntoView({ behavior: 'smooth' });
  }
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

      <>
      <div className="header-container">
        <div className='header-background'>
         <div className='darkmode-container'>
          <DarkMode/>
           <p>
            <strong className='important-name'>DR</strong>
            </p>
         </div>

          {isOpen && <div className="overlay" onClick={closeMenu}></div>}

          {!isOpen && <div className="hamburger open-modal" onClick={toggleMenu}>
          <FaBars className="icon rotate"/> </div>
          }

          <div className={`overlay ${isOpen ? 'open' : ''}`} onClick={closeMenu}>
          <div className="hamburger close-modal" onClick={toggleMenu}>
          <FaTimes className="icon rotate"/> </div>
            <nav>
            <a onClick={scrollToAbout} className="custom-link cont">Sobre</a>
            <a  onClick={scrollToSkills} className="custom-link skill">Habilidades</a>
            <a onClick={scrollToProjects} className="custom-link project">Projetos</a>
            <a onClick={scrollToContact} className="custom-link mobile-contact">Entre em Contato</a>
            <h6>Acesse minhas redes</h6>
            <div className='icons-nav'>
              <a href="https://github.com/diegoramosds"target="_blank" rel="preload" aria-label="Visite meu GitHub">
                        <FaGithub title='Acessar github'/></a>
                        <a href="https://www.linkedin.com/in/diego-rds/" target="_blank" rel="preload"  aria-label="Visite meu LinkedIn">
                        <FaLinkedin title='Acessar LinkedIn'/></a>
                        <a href="mailto:diegoramos370@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Mande um email">
              <MdEmail/></a>
            </div>
            </nav>
          </div>
          <div className="contact">
            <a onClick={scrollToContact}>Entre em Contato</a>
          </div>
        </div>
    </div>
      </>
    );}
export default Header;
