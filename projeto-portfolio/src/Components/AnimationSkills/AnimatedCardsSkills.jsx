import './AnimationSkills.css';  // Importa o arquivo CSS

import Marquee from "react-fast-marquee";
import { FaCss3, FaGit, FaGithub, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from 'react-icons/ri';


function AnimatedCards() {
  return (
    <Marquee gradient={false} speed={100} pauseOnHover={true}>
      <div className="card">
        <FaHtml5 />
        <h6>Html</h6>
      </div>

      <div className="card">
        <FaCss3 />
        <h6>Css</h6>
      </div>
      <div className="card">
        <FaJs />
        <h6>JavaScript</h6>
      </div>

      <div className="card">
        <FaReact />
        <h6>React</h6>
      </div>

      <div className="card">
        <FaGit />
        <h6>Git</h6>
      </div>

      <div className="card">
        <FaGithub />
        <h6>GitHub</h6>
      </div>

      <div className="card">
        <RiTailwindCssFill />
        <h6>TailwindCss</h6>
      </div>
    </Marquee>
  );
}

export default AnimatedCards;
