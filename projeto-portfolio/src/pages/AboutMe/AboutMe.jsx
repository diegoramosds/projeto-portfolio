import "./AboutMe.css";

import profileImage from "../../img/foto-perfil.png";

import { Code, Lightbulb, Users } from "lucide-react";

const AboutMe = () => {

  return (
    <div className="about-main" id="about">
      <div className="text-details">
        <div className="primary-about">
          <div className="primary-img">
            <img src={profileImage} alt="" />
          </div>
          <div className="primary-text">
            <h6>Sobre mim</h6>
            <h1>Combinando tecnologia e criatividade</h1>
            <p>
              Sou um desenvolvedor front-end apaixonado por criar experiências
              digitais bonitas e funcionais. Com foco em usabilidade e design
              centrado no usuário, trabalho para entregar projetos que sejam
              tanto esteticamente agradáveis quanto tecnicamente robustos.
            </p>
          </div>
        </div>
        <div className="about-details">
          <div className="about-card">
            <span>
              <Code />
            </span>
            <h3>Desenvolvimento</h3>
            <p>
              Especializado em desenvolvimento front-end com React, TypeScript e
              outras tecnologias modernas para criar aplicações web responsivas
              e performáticas.
            </p>
          </div>

          <div className="about-card">
            <span>
              <Lightbulb />
            </span>
            <h3>Solução de Problemas</h3>
            <p>
              Abordagem analítica e criativa para resolver desafios técnicos e
              de design, sempre buscando a melhor solução para cada problema
              específico.
            </p>
          </div>

          <div className="about-card">
            <span>
              <Users />
            </span>
            <h3>Colaboração</h3>
            <p>
              Experiência em trabalhar em ambientes colaborativos, comunicando
              ideias efetivamente e integrando feedback para melhorar o
              resultado final.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
