import './Projects.css';

import reactLoja from '../../img/React.png';
import reactAluno from '../../img/ReactAlunos.png';
import reactAgenda from '../../img/projeto-agenda.png';
import reactParticipantes from '../../img/reactParticipantes.png';
import reactViagens from '../../img/reactviagens.png';
import reactblog from '../../img/reactblog.png';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Projects() {

  
  useEffect(() => {
    const handleScroll = () => {
      var arrowTop = document.getElementById('arrow-top');
      if (window.pageYOffset > 300) {
        arrowTop.style.display = 'block';
      } else {
        arrowTop.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);


  
  return (
    <>
        <div id='projects' >
          <h2>Meus Projetos</h2>
          <div className='projetos-container'>

          <div  className="img-item" data-aos="fade-right" >
              <img src={reactblog} alt="Projeto-Blog" />
              <h3>MiniBlog</h3>
                <span>Este projeto foi construído com React, utilizando Firebase para autenticação e banco de dados. 
                  O axios gerencia as requisições API e o React Router é responsável pela navegação entre as páginas, 
                  garantindo uma experiência de usuário fluida e segura</span> 
                <ul>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>vite</li>
                  <li>firebase</li>
                  <li>axios</li>
                </ul> 

                 <a href="https://github.com/diegoramosds/projeto-blog" target='blank'>Projeto completo Aqui</a> 

            </div>
          <div  className="img-item" data-aos="fade-left">
              <img src={reactViagens} alt="Projeto-Viagens"/>
              <h3>Viagens</h3>
                <span>
               Este projeto é uma aplicação web de detalhes de viagem desenvolvida no evento NLW da Rocketseat, 
               com funcionalidades para gerenciar links importantes de forma organizada 
               e responsiva durante o planejamento e execução de viagens.</span> 
    

                <ul>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Tailwind CSS</li>
                  <li>TypeScript</li>
                  <li>SQLite</li>
                </ul> 
                <a href="https://github.com/diegoramosds/projeto-loja" target='blank'>Projeto completo Aqui</a>
            </div>



            <div  className="img-item" data-aos="fade-right">
              <img src={reactLoja} alt="Projeto-Loja"/>
              <h3>Loja Online</h3>
                <span>Este projeto é uma loja online de roupas onde os usuários podem adicionar, ajustar 
                  e remover produtos do carrinho.
                   A gestão do carrinho é feita com Redux para uma experiência dinâmica e responsiva.</span> 
                
                <ul>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Tailwind CSS</li>
                  <li>TypeScript</li>
                </ul> 
                <a href="https://github.com/diegoramosds/projeto-loja" target='blank'>Projeto completo Aqui</a>
                
            </div>



            <div className="img-item" data-aos="fade-left">
             <img src={reactAluno} alt="Projeto-Aluno" />
             <h3>Gerenciamento de Alunos</h3>
              <span>O projeto é uma aplicação web para gerenciamento de informações de alunos, permitindo adicionar,
                 editar, excluir registros e trocar a foto do aluno. 
                Foi desenvolvido com React no frontend e Node.js no backend para gerenciamento de dados. </span> 
      
                <ul>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>HTML</li>
                  <li>Node</li>
                </ul>
                <a href="https://github.com/diegoramosds/projeto-alunos" target='blank'>Projeto completo Aqui </a>
                
            </div>
           
            <div  className="img-item" data-aos="fade-right">
             <img src={reactAgenda} alt="Projeto-Agenda" />
             <h3>Agenda de Contatos</h3>
              <span>A aplicação permite a criação de contas de usuários, adição de contatos associados a essas contas 
                e remoção automática dos contatos quando excluídos pelo usuário, garantindo consistência 
                com o banco de dados MongoDB. </span> 
                
                <ul>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>HTML</li>
                  <li>Node</li>
                  <li>Express</li>
                  <li>MONGODB</li>
                  <li>EJS</li>
                </ul>

                <a href="https://github.com/diegoramosds/projeto-agenda" target='blank'>Projeto completo Aqui</a>    
            </div>

            <div  className="img-item" data-aos="fade-left">
             <img  src={reactParticipantes} alt="Projeto-Participantes" />
             <h3>Lista de Participantes</h3>
                <span>Este projeto, desenvolvido em React, é uma lista de participantes de um evento. 
                  Permite aos usuários buscar participantes, navegar pelas páginas de resultados e 
                  visualizar detalhes como código, nome, e-mail,
                   data de inscrição e data de check-in, quando disponível.</span> 
               

                <ul>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>React</li>
                  <li>Node</li>
                  <li>Vite</li>
                  <li>Lucide React</li>
                </ul>

                <a href="https://github.com/diegoramosds/projeto-participantes" target='blank'>Projeto completo Aqui</a> 
            </div>
    
          </div>
        </div>
      <div id="arrow-top" onClick={scrollToTop}></div>
    </>
  )
}

export default Projects;
