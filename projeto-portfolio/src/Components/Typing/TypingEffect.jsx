import { useState, useEffect } from 'react';
import './TypingEffect.css';

const TypingEffect = () => {
  const [text, setText] = useState('');
  const phrase = "Olá me chamo Diego";

  useEffect(() => {
    let index = 0;
    let lastTime = 0;

    const typeText = (timestamp) => {
      if (timestamp - lastTime > 60) { // Controla a fluidez (ajuste o valor "50")
        setText(phrase.slice(0, index + 1));
        index++;
        lastTime = timestamp;
      }

      if (index <= phrase.length) {
        requestAnimationFrame(typeText);
      }
    };

    requestAnimationFrame(typeText);

    return () => {}; // Limpa a animação (não necessário aqui)
  }, [phrase]);

  return (
    <div className="typing-effect">
      <span>{text}</span>
    </div>
  );
};

export default TypingEffect;
