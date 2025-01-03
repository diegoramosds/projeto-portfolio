import './Projects.css';

import donitelas from '../../img/donitelas.png';
import reactLoja from '../../img/React.png';
import reactAluno from '../../img/ReactAlunos.png';
import reactAgenda from '../../img/projeto-agenda.png';
import reactParticipantes from '../../img/reactParticipantes.png';
import reactViagens from '../../img/reactviagens.png';
import reactBlog from '../../img/reactblog.png';
import reactSecretWord from '../../img/secret.png';
import reactInOrbit from '../../img/in.orbit.png';

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
            <img src={donitelas} alt="Projeto-Blog" loading="lazy" />
            <div className='infodetails'>
            <h3>DONITELAS</h3>
              <p>Este projeto de site foi desenvolvido para a Donitelas, uma empresa especializada 
                em instalação e manutenção de telas, cercas e grades de segurança.</p>
              <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>vite</li>
                <li>Bootstrap</li>
                <li>Html e css</li>  
                <li>Scss</li>  
              </ul>
            <a href="https://github.com/diegoramosds/projeto-donitelas" target='blank'>Projeto completo Aqui</a>
            </div>
          </article>
          <article className="img-item" data-aos="fade-left">
            <img src={reactBlog} alt="Projeto-Blog" loading="lazy" />
            <div className='infodetails'>
            <h3>MiniBlog</h3>
              <p>Criação e edição de postagens. Permite aos usuários adicionar e modificar conteúdo.
                  Garantia de que apenas usuários autorizados possam criar e editar postagens</p>
              <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>vite</li>
                <li>firebase</li>
                <li>axios</li>  
              </ul>
            
            <a href="https://github.com/diegoramosds/projeto-blog" rel="preload" target='blank'>Projeto completo Aqui</a>
            </div>
          </article>

          <article className="img-item" data-aos="fade-right">
            <img src={reactViagens} alt="Projeto-Viagens" loading="lazy" />
            <div className='infodetails'>
            <h3>Plann.er</h3>
              <p> Detalhes de viagem desenvolvida no evento NLW da 
                Rocketseat, gerencia informações importantes de forma organizada 
                 durante o planejamento de viagens</p>
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>TypeScript</li>
              <li>SQLite</li>
            </ul>
            <a href="https://github.com/diegoramosds/projeto-loja" rel="preload" target='blank'>Projeto completo Aqui</a>
            </div>
            
          </article>

          <article className="img-item" data-aos="fade-left">
            <img src={reactLoja} alt="Projeto-Loja" loading="lazy" />
            <div className='infodetails'>
            <h3>Redux Shopping</h3>
              <p>Loja online de roupas onde os usuários podem adicionar, ajustar e 
                remover produtos do carrinho</p>
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>TypeScript</li>
            </ul>
            <a href="https://github.com/diegoramosds/projeto-loja" rel="preload" target='blank'>Projeto completo Aqui</a>
            </div>
            
          </article>

          <article className="img-item" data-aos="fade-right">
            <img src={reactAluno} alt="Projeto-Aluno" loading="lazy" />
            <div className='infodetails'>
            <h3>Gerenciamento de Alunos</h3>
              <p>Gerenciamento de informações de alunos, permitindo 
                adicionar, editar, excluir registros e trocar a foto do aluno</p>
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node</li>
            </ul>
            <a href="https://github.com/diegoramosds/projeto-alunos" rel="preload" target='blank'>Projeto completo Aqui </a>
            </div>
            
          </article>

          <article className="img-item" data-aos="fade-left">
            <img src={reactAgenda} alt="Projeto-Agenda" rel="preload" loading="lazy" />
             
              <div className='infodetails'>
              <h3>Agenda de Contatos</h3>
                <p>A aplicação permite a criação de contas de usuários, adição de contatos associados 
                  a essas contas e remoção automática dos contatos quando excluídos pelo usuário</p>
              <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node</li>
                <li>Express</li>
                <li>MONGODB</li>
                <li>EJS</li>
              </ul>
              <a href="https://github.com/diegoramosds/projeto-agenda" rel="preload" target='blank'>Projeto completo Aqui</a>
              </div>
              
          </article>

          <article className="img-item" data-aos="fade-right">
            <img src={reactParticipantes} alt="Projeto-Participantes" loading="lazy" />
            <div className='infodetails'>
            <h3>Lista de Participantes</h3>

              <p>Lista de participantes de um evento,
                permite aos usuários buscar participantes, navegar pelas páginas de resultados e 
                visualizar detalhes da busca</p>
            <ul>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Node</li>
              <li>Vite</li>
              <li>Lucide React</li>
            </ul>
            <a href="https://github.com/diegoramosds/projeto-participantes" rel="preload" target='blank'>Projeto completo Aqui</a>
            </div>
            
          </article>

          
          <article className="img-item" data-aos="fade-left">
            <img src={reactInOrbit} alt="Projeto-InOrbit" loading="lazy" />
            <div className='infodetails'>
            <h3>In.Orbit</h3>
              <p>Gestão de metas semanais feita em um evento, da Rocketseat.
                 A aplicação possui funcionalidades como a criação, acompanhamento e conclusão de metas semanais</p>
            <ul>
              <li>Typescript</li>
              <li>React</li>
              <li>PostgreSQL</li>
              <li>Node</li>
            </ul>
            <a href="https://github.com/diegoramosds/projeto-in.orbit" rel="preload" target='blank'>Projeto completo Aqui </a>
            </div>
          </article>

          <article className="img-item" data-aos="fade-right">
            <img src={reactSecretWord} alt="Projeto-SecretWord" loading="lazy" />
            <div className='infodetails'>
            <h3>SecretWord</h3>
              <p>Jogo, onde o jogador deve descobrir
            uma palavra secreta com base em uma dica de categoria.
            verifica letras adivinhadas, controla tentativas e permite reiniciar após o término</p>
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>Html</li>
              <li>CSS</li>

            </ul>
            <a href="https://github.com/diegoramosds/projeto-secret_word" rel="preload" target='blank'>Projeto completo Aqui </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default Projects;
