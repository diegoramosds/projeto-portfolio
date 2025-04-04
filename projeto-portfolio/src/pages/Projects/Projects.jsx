import "./Projects.css";

import donitelas from "../../img/donitelas.png";
import reactLoja from "../../img/React.png";
import reactAluno from "../../img/ReactAlunos.png";
import reactAgenda from "../../img/projeto-agenda.png";
import reactParticipantes from "../../img/reactParticipantes.png";
import reactViagens from "../../img/reactviagens.png";
import reactBlog from "../../img/reactblog.png";
import reactSecretWord from "../../img/secret.png";
import reactInOrbit from "../../img/in.orbit.png";

import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";

const projects = [
  {
    id: 1,
    nome: "DONITELAS",
    descricao:
      "Este projeto de site foi desenvolvido para a Donitelas, uma empresa especializada em instalação e manutenção de telas, cercas e grades de segurança.",
    tecnologias: [
      "JavaScript",
      "React",
      "Vite",
      "Bootstrap",
      "HTML e CSS",
      "SCSS",
    ],
    imagem: donitelas,
    links: {
      projeto: "https://donitelas.site",
      codigo: "https://github.com/diegoramosds/projeto-donitelas",
    },
  },
  {
    id: 2,
    nome: "MiniBlog",
    descricao:
      "Criação e edição de postagens. Permite aos usuários adicionar e modificar conteúdo. Garantia de que apenas usuários autorizados possam criar e editar postagens.",
    tecnologias: ["JavaScript", "React", "Vite", "Firebase", "Axios"],
    imagem: reactBlog,
    links: {
      projeto: "https://miniblog-ashen.vercel.app/",
      codigo: "https://github.com/diegoramosds/projeto-blog",
    },
  },
  {
    id: 3,
    nome: "Plann.er",
    descricao:
      "Detalhes de viagem desenvolvida no evento NLW da Rocketseat, gerencia informações importantes de forma organizada durante o planejamento de viagens.",
    tecnologias: [
      "JavaScript",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "SQLite",
    ],
    imagem: reactViagens,
    links: {
      projeto: "https://github.com/diegoramosds/projeto-viagens",
      codigo: "https://github.com/diegoramosds/projeto-viagens",
    },
  },
  {
    id: 4,
    nome: "Redux Shopping",
    descricao:
      "Loja online de roupas onde os usuários podem adicionar, ajustar e remover produtos do carrinho.",
    tecnologias: ["JavaScript", "React", "Tailwind CSS", "TypeScript"],
    imagem: reactLoja,
    links: {
      projeto: "https://github.com/diegoramosds/projeto-loja",
      codigo: "https://github.com/diegoramosds/projeto-loja",
    },
  },
  {
    id: 5,
    nome: "Gerenciamento de Alunos",
    descricao:
      "Gerenciamento de informações de alunos, permitindo adicionar, editar, excluir registros e trocar a foto do aluno.",
    tecnologias: ["JavaScript", "React", "Node"],
    imagem: reactAluno,
    links: {
      projeto: "https://projeto-alunos.vercel.app/",
      codigo: "https://github.com/diegoramosds/projeto-alunos",
    },
  },
  {
    id: 6,
    nome: "Agenda de Contatos",
    descricao:
      "A aplicação permite a criação de contas de usuários, adição de contatos associados a essas contas e remoção automática dos contatos quando excluídos pelo usuário.",
    tecnologias: ["JavaScript", "React", "Node", "Express", "MongoDB", "EJS"],
    imagem: reactAgenda,
    links: {
      projeto: "https://github.com/diegoramosds/projeto-agenda",
      codigo: "https://github.com/diegoramosds/projeto-agenda",
    },
  },
  {
    id: 7,
    nome: "Lista de Participantes",
    descricao:
      "Lista de participantes de um evento, permite aos usuários buscar participantes, navegar pelas páginas de resultados e visualizar detalhes da busca.",
    tecnologias: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node",
      "Vite",
      "Lucide React",
    ],
    imagem: reactParticipantes,
    links: {
      projeto: "https://github.com/diegoramosds/projeto-participantes",
      codigo: "https://github.com/diegoramosds/projeto-participantes",
    },
  },
  {
    id: 8,
    nome: "In.Orbit",
    descricao:
      "Gestão de metas semanais feita em um evento da Rocketseat. A aplicação possui funcionalidades como a criação, acompanhamento e conclusão de metas semanais.",
    tecnologias: ["TypeScript", "React", "PostgreSQL", "Node"],
    imagem: reactInOrbit,
    links: {
      projeto: "https://github.com/diegoramosds/projeto-in.orbit",
      codigo: "https://github.com/diegoramosds/projeto-in.orbit",
    },
  },
  {
    id: 9,
    nome: "SecretWord",
    descricao:
      "Jogo onde o jogador deve descobrir uma palavra secreta com base em uma dica de categoria. Verifica letras adivinhadas, controla tentativas e permite reiniciar após o término.",
    tecnologias: ["JavaScript", "React", "HTML", "CSS"],
    imagem: reactSecretWord,
    links: {
      projeto: "https://secretword-cyan.vercel.app/",
      codigo: "https://github.com/diegoramosds/projeto-secret_word",
    },
  },
];

function Projects() {
  const [showMoreProjects, setShowMoreProjects] = useState(3);
  const [expanded, setExpanded] = useState(false);

  const handleProjects = () => {
    setShowMoreProjects((prev) => (prev < projects.length ? prev + 3 : 3));
  };

  return (
    <>
      <section id="projects" className="main-project">
        <div className="projects-container">
          <div className="primary">
            <h6>Projetos</h6>
            <h1>Trabalhos selecionados</h1>
            <p>
              Uma seleção dos projetos mais recentes e relevantes que
              desenvolvei, demonstrando minhas habilidades e experiência em
              desenvolvimento front-end.
            </p>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={showMoreProjects}
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { when: "afterChildren" },
              }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="projects-primary"
              onAnimationComplete={() => setExpanded(false)}
            >
              {projects.slice(0, showMoreProjects).map((project) => (
                <div className="img-item" key={project.id}>
                  <img src={project.imagem} alt="" />
                  <div className="infodetails">
                    {project.tecnologias.map((tecnologia, i) => (
                      <div key={i} className="technologies-used">
                        <ul>
                          <li>{tecnologia}</li>
                        </ul>
                      </div>
                    ))}
                    <div className="details-project">
                      <h3>{project.nome}</h3>
                      <p>{project.descricao}</p>
                    </div>
                    <div className="redirect-project">
                      <a
                        href={project.links.projeto}
                        rel="preload"
                        target="blank"
                      >
                        <ExternalLink /> Ver projeto
                      </a>
                      <a
                        href={project.links.codigo}
                        rel="preload"
                        target="blank"
                      >
                        <Github /> Ver código
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <button
            className="expand-projects"
            onClick={handleProjects}
            disabled={expanded}
          >
            {showMoreProjects < projects.length ? (
              <>
                Exibir mais projetos <ChevronDown />
              </>
            ) : (
              <>
                Exibir menos projetos <ChevronUp />
              </>
            )}
          </button>
        </div>
      </section>
    </>
  );
}

export default Projects;
