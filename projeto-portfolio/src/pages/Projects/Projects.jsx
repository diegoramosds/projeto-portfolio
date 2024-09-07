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

          <div  className="img-item"  data-aos="fade-right" data-aos-delay="100">
              <img src={reactblog} alt="projeto-agenda"/>
              <h3>MiniBlog</h3>
                <span>Este projeto foi construído com React, aproveitando sua flexibilidade e eficiência para criar 
                  uma experiência de usuário 
                  fluida e dinâmica. Utilizei Firebase para gerenciamento de autenticação e banco de dados, garantindo 
                  uma integração robusta e segura. As interações do blog são gerenciadas com axios para requisições API e o 
                  roteamento é realizado com React Router, o que permite uma navegação fluida entre as páginas.</span> 
                <span>Tecnologias Utilizadas: JavaScript: React:  vite: firebase: axios:</span> 
                <a href="https://github.com/diegoramosds/projeto-blog" target='blank'>Projeto completo Aqui</a>
                <div className="animation-element right" data-aos="fade-up">✨</div>
            </div>
          <div  className="img-item"  data-aos="fade-left" data-aos-delay="105">
              <img src={reactViagens} alt="projeto-agenda"/>
              <h3>Viagens</h3>
                <span>Este projeto é uma aplicação web de detalhes de viagem feito no evento NLW da ROCKETSEAT onde implementei algumas
                   funções na tripDetails e responsividade, onde os usuários podem gerenciar links importantes relacionados a uma viagem 
                   específica. O objetivo é
                  proporcionar uma maneira fácil e organizada de armazenar e acessar links relevantes durante o planejamento e execução de viagens.</span> 
                <span>Tecnologias Utilizadas: JavaScript: React: Tailwind CSS: TypeScript:  SQLite:</span> 
                <a href="https://github.com/diegoramosds/projeto-viagens" target='blank'>Projeto completo Aqui</a>
                <div className="animation-element left" data-aos="fade-up">✨</div>
            </div>



            <div  className="img-item"  data-aos="fade-right" data-aos-delay="110">
              <img src={reactLoja} alt="projeto-agenda"/>
              <h3>Loja Online</h3>
                <span>Este projeto simula uma loja online de roupas com funcionalidades de carrinho de compras,
                a aplicação permite aos usuários adicionar produtos ao carrinho, 
                ajustar a quantidade de cada item e removê-los conforme necessário.
                 A gestão do estado do carrinho é realizada com a biblioteca Redux, assegurando 
                 uma experiência de usuário dinâmica e responsiva.</span> 
                <span>Tecnologias Utilizadas: JavaScript: React: HTML e CSS: </span> 
                <a href="https://github.com/diegoramosds/projeto-loja" target='blank'>Projeto completo Aqui</a>
                <div className="animation-element" data-aos="fade-up">✨</div>
            </div>



            <div className="img-item" data-aos="fade-left" data-aos-delay="115">
             <img src={reactAluno} alt="projeto-agenda" />
             <h3>Gerenciamento de Alunos</h3>
              <span>O projeto consiste em uma aplicação web para gerenciamento de informações de alunos, 
                oferecendo funcionalidades como adicionar, editar e excluir registros, 
                bem como a capacidade de trocar a foto do aluno. Desenvolvida 
                utilizando React no frontend e Node.js no backend, para armazenar e gerenciar os dados dos alunos. </span> 
                <span>Tecnologias Utilizadas: JavaScript, React, HTML e CSS, Node </span> 
                <a href="https://github.com/diegoramosds/projeto-alunos" target='blank'>Projeto completo Aqui </a>
                <div className="animation-element" data-aos="fade-up">✨</div>
            </div>
           
            <div  className="img-item" data-aos="fade-right" data-aos-delay="120">
             <img src={reactAgenda} alt="projeto-agenda" />
             <h3>Agenda de Contatos</h3>
              <span>A aplicação permite a criação de contas de usuários, adição de contatos associados a essas contas 
                e remoção automática dos contatos quando excluídos pelo usuário, garantindo consistência com o banco de dados MongoDB. </span> 
                <span>Tecnologias Utilizadas: JavaScript, React, HTML e CSS, Node, Express,WEBPACK, MONGODB, EJS </span> 
                <a href="https://github.com/diegoramosds/projeto-agenda" target='blank'>Projeto completo Aqui</a>
                <div className="animation-element" data-aos="fade-up">✨</div>
            </div>

            <div  className="img-item" data-aos="fade-left" data-aos-delay="125">
             <img  src={reactParticipantes} alt="projeto-agenda" />
             <h3>Lista de Participantes</h3>
                <span>Este projeto é uma lista de participantes de um evento, desenvolvida em React.
                   Ele permite aos usuários buscar participantes, navegar pelas páginas 
                   de resultados e visualizar detalhes de cada participante, incluindo código, 
                   nome, e-mail, data de inscrição e data de check-in, quando disponível.</span> 
                <span>Tecnologias Utilizadas: TypeScript, JavaScript, React, Vite, Lucide React</span>
                <a href="https://github.com/diegoramosds/projeto-participantes" target='blank'>Projeto completo Aqui</a>
                <div className="animation-element" data-aos="fade-up">✨</div>
            </div>
    
          </div>
        </div>
      <div id="arrow-top" onClick={scrollToTop}></div>
    </>
  )
}

export default Projects;
