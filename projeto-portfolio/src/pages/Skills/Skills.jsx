import "./Skills.css";

import { Component } from "react";

import "aos/dist/aos.css";

import {
  Code2,
  FileCode,
  Braces,
  PaintBucket,
  SquareGanttChart,
  Boxes,
  GitBranch,
  Github,
  Globe,
  PenTool,
  Server,
  Terminal,
} from "lucide-react";

class Skills extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <section>
          <div className="main-skills" id="skills">
            <div className="primary">
              <h6 className="bg-pulse">Habilidades</h6>
              <h1>Competências Técnicas</h1>
              <p className="bg-pulse-bottom">
                Tecnologias e ferramentas que domino para criar soluções
                digitais de alta qualidade, com foco em performance e
                experiência do usuário.
              </p>
            </div>

            <div className="list-skills">
              <div className="card-skills">
                <h3>
                  <Code2 /> Front-end
                </h3>

                <div className="hard-skills">
                  <ul>
                    <li>
                      <FileCode /> HTML5
                    </li>
                    <li>
                      <PaintBucket /> CSS
                    </li>
                    <li>
                      <Braces /> JavaScript
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <SquareGanttChart /> React
                    </li>
                    <li>
                      <Braces /> TypeScript
                    </li>
                    <li>
                      <Boxes /> Tailwind CSS
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-skills">
                <h3>
                  <Code2 /> Tenho desenvolvido
                </h3>

                <div className="hard-skills">
                  <ul>
                    <li>
                      <Github /> GitHub
                    </li>
                    <li>
                      <GitBranch /> Git
                    </li>
                    <li>
                      <Globe /> Responsividade
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Server /> APIs RESTful
                    </li>
                    <li>
                      <PenTool /> Figma
                    </li>
                    <li>
                      <Terminal /> Node.js
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Skills;
