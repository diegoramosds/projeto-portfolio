import { useEffect, useState } from "react";

import "./NavBar.css";
import { FaBars, FaTimes } from "react-icons/fa";

import DarkMode from "../DarkMode/DarkMode";

function Header() {
  function scrollToHome() {
    closeMenu();
    const skillsElement = document.getElementById("home");
    skillsElement.scrollIntoView({ behavior: "smooth" });
  }
  function scrollToAbout() {
    closeMenu();
    const skillsElement = document.getElementById("about");
    skillsElement.scrollIntoView({ behavior: "smooth" });
  }
  function scrollToSkills() {
    closeMenu();
    const skillsElement = document.getElementById("skills");
    skillsElement.scrollIntoView({ behavior: "smooth" });
  }
  function scrollToProjects() {
    closeMenu();
    const skillsElement = document.getElementById("projects");
    skillsElement.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToContact() {
    closeMenu();
    const skillsElement = document.getElementById("contact");
    skillsElement.scrollIntoView({ behavior: "smooth" });
  }
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.pageYOffset > 5);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
    } else {
      document.body.style.overflowY = "auto";
      document.body.style.position = "";
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflowY = "auto";
    document.body.style.position = "";
  };

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <div className={`header-container ${scroll ? "header-box" : ""}`}>
        <div className="header-background">
          <p className="name-nav">
            <a onClick={scrollToHome}>
              Diego<span>.</span>
            </a>
          </p>

          {isOpen && <div className="overlay" onClick={closeMenu}></div>}

          {!isOpen && (
            <div className="icons-nav">
              <DarkMode />
              <div className="hamburger open-modal" onClick={toggleMenu}>
                <FaBars className="icon rotate" />
              </div>
            </div>
          )}

          <div
            className={`overlay ${isOpen ? "open" : ""}`}
            onClick={closeMenu}
          >
            <div className="hamburger close-modal" onClick={toggleMenu}>
              <FaTimes className="icon rotate" />
            </div>
            <nav>
              <a
                onClick={scrollToHome}
                className={`custom-link cont ${activeSection === "home" ? "active" : ""}`}
              >
                Início
              </a>
              <a
                onClick={scrollToAbout}
                className={`custom-link cont ${activeSection === "about" ? "active" : ""}`}
              >
                Sobre
              </a>
              <a
                onClick={scrollToSkills}
                className={`custom-link skill ${activeSection === "skills" ? "active" : ""}`}
              >
                Habilidades
              </a>
              <a
                onClick={scrollToProjects}
                className={`custom-link project ${activeSection === "projects" ? "active" : ""}`}
              >
                Projetos
              </a>
              <a
                onClick={scrollToContact}
                className={`custom-link project ${activeSection === "contact" ? "active" : ""}`}
              >
                Contato
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
