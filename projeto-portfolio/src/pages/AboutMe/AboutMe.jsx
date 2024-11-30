import './AboutMe.css';

import profileImage  from "../../img/foto-perfil.png"

import 'aos/dist/aos.css';

const AboutMe = () => { 

  return (
    <div className='about-text' id='about'>
      <div className='text-details' data-aos="fade-right">
      <h2><span>&lt;&gt;</span>Olá, Me chamo DIEGO!<span>&lt;/&gt;</span></h2>
        <p>Atualmente, estou me aprofundando no desenvolvimento <strong className='important-name'> Front-end</strong>, com foco em práticas 
          modernas e consumo de <strong className='important-name'> APIs </strong> para criar interfaces dinâmicas e interativas. Estou cursando 
          <strong className='important-name'> Análise e Desenvolvimento de Sistemas </strong> , o que tem sido uma ótima oportunidade para construir 
          uma base sólida em programação e estrutura de dados, além de explorar aspectos fundamentais 
          do <strong className='important-name'>desenvolvimento de software</strong>. Paralelamente, tenho aproveitado diversos recursos e
          <strong className='important-name'> cursos online</strong>,
           que me permitem explorar novas tecnologias, <strong className='important-name'>frameworks </strong> 
          e técnicas avançadas, expandindo 
          constantemente meus conhecimentos e aprimorando minhas habilidades na área.</p>
      </div>
        <div className='image-container'>
          <img src={profileImage} alt="Foto de perfil"/>
        </div>
         <div className='about-memory'>

           <div className='memory-details' data-aos="fade-right" >
           <h6>Meu Primeiro Contato com a Programação</h6>

            <p>Comecei na programação focando em algoritmos e lógica, explorando 
              <strong className='important-name'> HTML e CSS</strong> para
               construir as primeiras páginas e entender como tudo funcionava na 
               <strong className='important-name'> web</strong> .</p>
            </div>
           <div className='memory-details' data-aos="fade-up" >
          
            <h6>Aprofundando em HTML, CSS e JavaScript</h6>

            <p>Aprofundei meus conhecimentos em <strong className='important-name'> HTML e CSS</strong>, e então 
            acabei evoluindo para o <strong className='important-name'>JavaScript</strong>,
              que abriu portas para criar interações mais dinâmicas e funcionais.</p>
           </div>
           <div className='memory-details' data-aos="fade-left">
           <h6>React e Carreira no Front-End</h6>

            <p>Após dominar o <strong className='important-name'>JavaScript</strong>, iniciei estudos em
            <strong className='important-name'> React</strong>  e decidi ingressar 
              na faculdade de <strong className='important-name'>Análise e Desenvolvimento de Sistemas </strong> 
              com foco contínuo em <strong className='important-name'> front-end</strong>.</p>
            </div>
         </div>
         
         <p><a href="/cv-diego_ramos.pdf" target="_blank" rel="noopener noreferrer">
          DOWLOAD CV</a></p>
       
         </div>

    
  )
}

export default AboutMe