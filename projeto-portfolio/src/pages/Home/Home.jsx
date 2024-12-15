import './Home.css';

//Components
import TypingEffect from '../../Components/Typing/TypingEffect';

// Icons
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import ParticleBackground from '../../Components/Particles';

function Home() {
  function scrollToAbout() {
    const skillsElement = document.getElementById('about');
    skillsElement.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className='main-home'>
      <div className='particle'>
        <ParticleBackground />
      </div>

      <div className='all-texts'>
        <div className='text-container'>
          <h1>Desenvolvedor &nbsp;<strong className='important-name'>Front-end</strong> </h1>
          <p>Transformando ideias em experiências digitais</p>
        </div>
        <div className='typing'>
          <h2><TypingEffect /></h2>
        </div>
        <div className='about-home about'>
          <p onClick={scrollToAbout}>Saiba mais</p>
        </div>
      </div>
      <div className='icons-about'>
        <div className='icons'>
          <p><a href="https://github.com/diegoramosds"target="_blank"rel="noopener noreferrer" aria-label="Visite meu GitHub">
          <FaGithub />Github</a></p>
          <p><a href="https://www.linkedin.com/in/diego-rds/" target="_blank"rel="noopener noreferrer"  aria-label="Visite meu LinkedIn">
          <FaLinkedin />LinkedIn</a></p>
          <p><a href="/cv-diego_ramos.pdf" rel="noopener noreferrer" target="_blank"  aria-label="Baixar Curriculo">
          <FaFileDownload />Curriculo</a></p>
          </div>
        </div>
    </div>
  );
}

export default Home;
