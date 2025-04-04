import "./Home.css";

import { HiChevronDoubleDown } from "react-icons/hi";
import { Link } from "react-router-dom";

function scrollToAbout() {
  const goDown = document.getElementById("about");
  goDown.scrollIntoView({ behavior: "smooth" });
}
function scrollToProjects() {
  const goDown = document.getElementById("projects");
  goDown.scrollIntoView({ behavior: "smooth" });
}
function scrollToContact() {
  const goDown = document.getElementById("contact");
  goDown.scrollIntoView({ behavior: "smooth" });
}

function Home() {
  return (
    <div className="main-home" id="home">
      <div className="text-container">
        <h6>Desenvolvedor Front-end</h6>
        <h1>Criando experiências digitais impactantes</h1>
        <p>
          Desenvolvedor front-end focado em criar interfaces intuitivas e
          experiências de usuário excepcionais. Transformando ideias em produtos
          digitais de alta qualidade.
        </p>
        <div className="button-container">
          <Link onClick={scrollToProjects}>
            {" "}
            <button className="button-projects">
              <span></span>Ver projetos
            </button>
          </Link>
          <Link onClick={scrollToContact}>
            {" "}
            <button className="button-contact">Entrar em contato</button>
          </Link>
        </div>
      </div>
      <div className="go-down">
        <HiChevronDoubleDown onClick={scrollToAbout} />
      </div>
    </div>
  );
}

export default Home;
