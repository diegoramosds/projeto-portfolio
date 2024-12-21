import './Home.css';

//Components
import TypingEffect from '../../Components/Typing/TypingEffect';

// Icons
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import { HiChevronDoubleDown } from "react-icons/hi";
import ParticleBackground from '../../Components/Particles';

function scrollToAbout() {
  const goDown = document.getElementById('about');
  goDown.scrollIntoView({behavior: "smooth"})
}

function Home() {

  return (
    <div className='main-home'>
      <ParticleBackground />
        <div className='text-container'>
        <h1><TypingEffect /></h1>
        <p>Desenvolvedor <span className='important-name'>Front-end</span></p>
        </div>

      <div className='icons-about'>
          <p><a href="https://github.com/diegoramosds"target="_blank" rel="preload" aria-label="Visite meu GitHub">
          <FaGithub title='Acessar github'/></a></p>
          <p><a href="https://www.linkedin.com/in/diego-rds/" target="_blank" rel="preload"  aria-label="Visite meu LinkedIn">
          <FaLinkedin title='Acessar LinkedIn'/></a></p>
          <p><a href="/cv-diego_ramos.pdf" rel="preload" target="_blank"  aria-label="Baixar Curriculo">
          <FaFileDownload title='Acessar Curriculo'/></a></p>
      </div>
       <div className='go-down'>
       <HiChevronDoubleDown onClick={scrollToAbout}/>
       </div>
      </div>
      
  );
}

export default Home;
