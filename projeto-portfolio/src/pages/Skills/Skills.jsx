
import { FaChartLine, FaLaptopCode } from 'react-icons/fa';
import './Skills.css';
import{ Component } from 'react';

class Skills extends Component {
  constructor() {
    super();
    this.state = {
      iconItemClassName: 'icon-item',
    };
  }


  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <>
          <section >
            <div className='icons-container'>
              <div  id='skills' className='details-skills'>
                <span><FaLaptopCode className='icon-skills'/></span>
                <h2>Desenvolvedor Frontend</h2>
                <p>Gosto de programar coisas do zero e gosto de dar vida a ideias no navegador.</p>
                <div className='information-skills'>
                  <h3>Conhecimentos</h3>
                  <ul>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>Html</li>
                    <li>Css</li>
                    <li>Tailwind Css</li>
                  </ul>
                </div>
              </div>
              <div className='details-skills'>
                <span><FaChartLine className='icon-skills'/></span>
                <h2>Aprendizado</h2>
                <p>Alem de estudar front-end venho estudando outras coisas relacinados ao front-end que uso em cursos e projetos </p>
                <div className='information-skills'>
                  <h3>Outros Conhecimentos</h3>
                  <ul>
                    <li>Typescript</li>
                    <li>Gimp</li>
                    <li>Github</li>
                    <li>Git</li>
                    <li>Vs code</li>
                  </ul>
                </div>
              </div>
                <div className='details-text'>
                  <p> Concluí vários cursos oferecidos pelo Curso em Vídeo e pela Udemy, que me proporcionaram um conhecimenti 
                      em desenvolvimento web. Além disso, participei de eventos online promovidos pela Rocketseat, 
                      onde pude me aprofundar em tecnologias modernas e práticas do mercado. Também cursei módulos 
                      no SENAI, que acrescentaram um conhecimento prático e aplicado ao meu currículo.</p>
                </div>
            </div>
          
          </section>
      </>
    );
  }
}
export default Skills;
