import './Skills.css';

import { Component } from 'react';

import 'aos/dist/aos.css';
import AnimatedCards from '../../Components/AnimationSkills/AnimatedCardsSkills';

class Skills extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <section >
        <div className='icons-container' id='skills'>
          <div className='text-skills'>
            <h1>Habilidades</h1>
            <p>Estou sempre em busca de novos <strong className='important-name'>conhecimentos</strong> e desafios. A cada dia, aprendo e me aprofundo em <strong className='important-name'>tecnologias </strong> 
              e ferramentas que me ajudam a criar <strong className='important-name'>soluções</strong>   melhores e mais eficientes.</p>
          </div>
          <div className='details-skills'>
              <AnimatedCards />
              </div>
                <div className='details-text' data-aos="fade-right">
                  <p> Concluí vários cursos oferecidos pelo <strong className='important-name'>Curso em Vídeo </strong> 
                    e pela <strong className='important-name'>Udemy</strong>, que me proporcionaram um conhecimento
                      em desenvolvimento. Além disso, participei de eventos online promovidos pela <strong className='important-name'>Rocketseat</strong>, 
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


