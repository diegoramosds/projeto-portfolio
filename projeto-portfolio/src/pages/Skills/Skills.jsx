import { FaChartLine, FaLaptopCode } from 'react-icons/fa';
import './Skills.css';
import { Component } from 'react';


import 'aos/dist/aos.css';

class Skills extends Component {
  
  constructor() {
    super();
  }

  // componentDidMount() {
  //   window.addEventListener('scroll', this.handleScroll);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.handleScroll);
  // }

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
                <p>Alem de front-end venho estudando coisas relacionados ao front-end que uso em cursos.</p>
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
                <div className='details-text' data-aos="fade-right">
                  <p> Concluí vários cursos oferecidos pelo <strong className='important-name'>Curso em Vídeo</strong> 
                    e pela <strong className='important-name'>Udemy</strong>, que me proporcionaram um conhecimenti 
                      em desenvolvimento web. Além disso, participei de eventos online promovidos pela <strong className='important-name'>Rocketseat</strong>, 
                      onde pude me aprofundar em tecnologias modernas e práticas do mercado. Também cursei 
                      no <strong className='important-name'>Senai</strong>, que acrescentaram um conhecimento prático e aplicado ao meu currículo.</p>
                </div>
            </div>
          
          </section>
      </>
    );
  }
}
export default Skills;
