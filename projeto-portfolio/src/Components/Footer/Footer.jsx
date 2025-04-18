import "./Footer.css";

import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  function scrollToHome() {
    const skillsElement = document.getElementById("home");
    skillsElement.scrollIntoView({ behavior: "smooth" });
  }
  function scrollToAbout() {
    const skillsElement = document.getElementById("about");
    skillsElement.scrollIntoView({ behavior: "smooth" });
  }
  function scrollToSkills() {
    const skillsElement = document.getElementById("skills");
    skillsElement.scrollIntoView({ behavior: "smooth" });
  }
  function scrollToProjects() {
    const skillsElement = document.getElementById("projects");
    skillsElement.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToContact() {
    const skillsElement = document.getElementById("contact");
    skillsElement.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <footer>
      <div className="main-footer">
        <div className="primary-footer">
          <div className="details-footer">
            <div className="text-footer">
              <h2 onClick={scrollToHome}>Diego ramos</h2>
              <p>Desenvolvendo experiências digitais extraordinárias</p>
            </div>
            <div className="footer-options">
              <a onClick={scrollToHome} className="custom-link cont">
                Inicio
              </a>
              <a onClick={scrollToAbout} className="custom-link cont">
                Sobre
              </a>
              <a onClick={scrollToSkills} className="custom-link skill">
                Habilidades
              </a>
              <a onClick={scrollToProjects} className="custom-link project">
                Projetos
              </a>
              <a onClick={scrollToContact} className="custom-link project">
                Contato
              </a>
            </div>
            <div className="social-medias-footer">
              <div className="icons-footer">
                <a href="https://github.com/diegoramosds" target="_blank">
                  <Github />
                </a>
                <a href="https://www.linkedin.com/in/diego-rds/" target="_blank">
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="created-by">
          © 2025 Diego Ramos. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
