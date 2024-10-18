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
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <>
      <section id='projects'>
        <h2>Meus Projetos</h2>
        <div className='projetos-container'>
          <article className="img-item" data-aos="fade-right">
            <img src={reactblog} alt="Projeto-Blog" loading="lazy" />
            <div className='infodetails'>
            <h3>MiniBlog</h3>
              <p>Este projeto foi construído com React, utilizando Firebase para autenticação e banco de dados. O axios gerencia as requisições API e o React Router é responsável pela navegação entre as páginas, garantindo uma experiência de usuário fluida e segura</p>
              <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>vite</li>
                <li>firebase</li>
                <li>axios</li>  
              </ul>
            
            <a href="https://github.com/diegoramosds/projeto-blog" target='blank'>Projeto completo Aqui</a>
            </div>
          </article>

          <article className="img-item" data-aos="fade-left">
            <img src={reactViagens} alt="Projeto-Viagens" loading="lazy" />
            <div className='infodetails'>
            <h3>Viagens</h3>
              <p>Este projeto é uma aplicação web de detalhes de viagem desenvolvida no evento NLW da Rocketseat, com funcionalidades para gerenciar links importantes de forma organizada e responsiva durante o planejamento e execução de viagens.</p>
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>TypeScript</li>
              <li>SQLite</li>
            </ul>
            <a href="https://github.com/diegoramosds/projeto-loja" target='blank'>Projeto completo Aqui</a>
            </div>
            
          </article>

          <article className="img-item" data-aos="fade-right">
            <img src={reactLoja} alt="Projeto-Loja" loading="lazy" />
            <div className='infodetails'>
            <h3>Loja Online</h3>
              <p>Este projeto é uma loja online de roupas onde os usuários podem adicionar, ajustar e remover produtos do carrinho. A gestão do carrinho é feita com Redux para uma experiência dinâmica e responsiva.</p>
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>TypeScript</li>
            </ul>
            <a href="https://github.com/diegoramosds/projeto-loja" target='blank'>Projeto completo Aqui</a>
            </div>
            
          </article>

          <article className="img-item" data-aos="fade-left">
            <img src={reactAluno} alt="Projeto-Aluno" loading="lazy" />
            <div className='infodetails'>
            <h3>Gerenciamento de Alunos</h3>
              <p>O projeto é uma aplicação web para gerenciamento de informações de alunos, permitindo adicionar, editar, excluir registros e trocar a foto do aluno. Foi desenvolvido com React no frontend e Node.js no backend para gerenciamento de dados.</p>
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>HTML</li>
              <li>Node</li>
            </ul>
            <a href="https://github.com/diegoramosds/projeto-alunos" target='blank'>Projeto completo Aqui </a>
            </div>
            
          </article>

          <article className="img-item" data-aos="fade-right">
            <img src={reactAgenda} alt="Projeto-Agenda" loading="lazy" />
             
              <div className='infodetails'>
              <h3>Agenda de Contatos</h3>
                <p>A aplicação permite a criação de contas de usuários, adição de contatos associados a essas contas e remoção automática dos contatos quando excluídos pelo usuário, garantindo consistência com o banco de dados MongoDB.</p>
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
              
          </article>

          <article className="img-item" data-aos="fade-left">
            <img src={reactParticipantes} alt="Projeto-Participantes" loading="lazy" />
            <div className='infodetails'>
            <h3>Lista de Participantes</h3>

              <p>Este projeto, desenvolvido em React, é uma lista de participantes de um evento. Permite aos usuários buscar participantes, navegar pelas páginas de resultados e visualizar detalhes como código, nome, e-mail, data de inscrição e data de check-in, quando disponível.</p>
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
            
          </article>
        </div>
      </section>
    </>
  );
}

export default Projects;
