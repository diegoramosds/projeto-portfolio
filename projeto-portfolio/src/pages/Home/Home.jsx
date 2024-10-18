import './Home.css';

//Components
import ParticleBackground from '../../Components/Particles';
import TypingEffect from '../../Components/TypingEffect';

// Icons
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import { HiOutlineDownload } from 'react-icons/hi';

function Home() {

  
  return (
    <div className='main-home'>
    <ParticleBackground />
    
      <p className='introduction'>Desenvolvedor &nbsp;<strong className='important-name'>Front-end</strong> </p>

      <div className='text-container'>
        <p>
        Como desenvolvedor web experiente, crio interfaces dinâmicas e 
        interativas que encantam os usuários com layouts responsivos e estilos visualmente atraentes.
        </p>
      </div>
      <div className='typing'>
        <h2><TypingEffect /></h2>
      
      </div>
      <div className='icons-about'>
        <p><a href="https://github.com/diegoramosds"target="_blank"rel="noopener noreferrer">
        <FaGithub title='Meu GitHub'/></a></p> 

        <p><a href="https://www.linkedin.com/in/diego-rds/" target="_blank"rel="noopener noreferrer" >
        <FaLinkedin title='Meu LinkedIn'/></a></p>

        <p><a href="/cv-diego_ramos.pdf" target="_blank" rel="noopener noreferrer">
        <FaFileDownload title='Baixar Curriculo'/></a></p>
        </div>
    </div>
    
  );
}

export default Home;
