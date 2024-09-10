import './AboutMe.css';

import profileImage  from "../../img/foto-perfil.png"

import 'aos/dist/aos.css';

const AboutMe = () => {

  return (
    <div className='about-text' data-aos="fade-right" data-aos-delay="100">
      <div className='text-details'>
      <h2><span>&lt;&gt;</span>Olá, Me chamo DIEGO!<span>&lt;/&gt;</span></h2>
        <p>Sou um desenvolvedor com habilidades em construção de layouts responsivos e estilos visualmente atraentes.
           Tenho aprendido sobre desenvolvimento de interfaces de usuário dinâmicas e interativas e consumo de api,
           atualmente estou cursando <strong className='important-name'>Análise e Desenvolvimento de Sistemas</strong> na faculdade. Paralelamente, tenho aproveitado diversas oportunidades 
            de aprendizado online para ampliar meus conhecimentos.</p>
      </div>
        <div className='image-container'>
          <img src={profileImage} alt="Foto de perfil"/>
        </div>
    </div>
    
  )
}

export default AboutMe