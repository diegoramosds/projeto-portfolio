import './Footer.css';

import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';



const Footer = () => {
  return (
    <footer>
      <div className='icons-footer'>
        <h2>Minhas redes</h2>
        <a href="https://github.com/diegoramosds" 
        target="_blank" rel="noopener noreferrer" 
        aria-label="Visite meu GitHub">
        <FaGithub/></a>

        <a href="https://www.linkedin.com/in/diego-rds/"
         target="_blank" rel="noopener noreferrer"
          aria-label="Visite meu LinkedIn">
            <FaLinkedin/></a>
            
            <a href="mailto:diegoramos370@gmail.com" 
            target="_blank" rel="noopener noreferrer"
            aria-label="Mande um email">
              <MdEmail/></a>

              <a href="https://www.instagram.com/_diegoo_66/" 
              target="_blank" rel="noopener noreferrer"
               aria-label="Visite meu Instagram">
                <FaInstagram/></a>
      </div>
         <h3>Portfólio Dev!</h3>
         <p>Diego Ramos &copy; 2024</p>
    </footer>
  )
}

export default Footer