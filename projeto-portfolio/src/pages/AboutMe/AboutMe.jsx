import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './AboutMe.css';
import { HiOutlineDownload } from 'react-icons/hi';

import { useEffect } from 'react';


import AOS from 'aos';
import 'aos/dist/aos.css';


const AboutMe = () => {

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);


  return (
    <div className='about-text'>
      <div className='text-details'  data-aos="fade-right">
      <h2>&lt;&gt;Olá, Me chamo DIEGO!&lt;/&gt;</h2>
        <p>Sou um desenvolvedor com habilidades em construção de layouts responsivos e estilos visualmente atraentes.
           Tenho aprendido sobre desenvolvimento de interfaces de usuário dinâmicas e interativas e consumo de api,
           atualmente estou cursando Análise e Desenvolvimento de Sistemas na faculdade. Paralelamente, tenho aproveitado diversas oportunidades 
            de aprendizado online para ampliar meus conhecimentos.</p>
      </div>
        <div className='icons-about'>
        <span  data-aos="fade-up" data-aos-delay="70"><a href="https://github.com/diegoramosds"target="_blank"><FaGithub title='Meu GitHub'/></a></span> 
        <span  data-aos="fade-up" data-aos-delay="90"><a href="https://www.linkedin.com/in/diego-rds/" target="_blank"><FaLinkedin title='Meu LinkedIn'/></a></span>
        <span   data-aos="fade-up" data-aos-delay="100"><a href="../../../public/cv-diego_ramos.pdf" target="_blank"><HiOutlineDownload title='Baixar Curriculo'/></a></span>
        </div>
    </div>
    
  )
}

export default AboutMe