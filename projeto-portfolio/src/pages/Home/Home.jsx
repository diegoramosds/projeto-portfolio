import './Home.css';
import fotocontainer from '../../img/foto-perfil.png';
import ParticleBackground from '../../Components/Particles';

function Home() {
  return (
    <div className='edit'>
      <ParticleBackground />
     <img src={fotocontainer} className='imagem' alt="foto" />
    
      <span className='introduction'>Desenvolvedor Front-end</span>

      <div className='text-container'>
        <span>
        Como desenvolvedor web experiente, crio interfaces dinâmicas e 
        interativas que encantam os usuários com layouts responsivos e estilos visualmente atraentes.
        </span>
       
      </div>

    </div>
    
  );
}

export default Home;
