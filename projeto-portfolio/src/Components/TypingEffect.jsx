import { useState, useEffect } from 'react';
import './TypingEffect.css';

const TypingEffect = () => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const phrases = [
    "Desenvolvedor",
    "Front-end",
    "JavaScript",
    "React",
    "HTML e CSS",
    "Design Responsivo",
    "Criador de Experiências",
  ];

  const typingSpeed = 100; // Velocidade da digitação em ms
  const deletingSpeed = 90; // Velocidade da deleção em ms
  const pauseBetweenPhrases = 1500; // Pausa entre frases em ms

  useEffect(() => {
    let typingTimeout;
    let deletingTimeout;

    if (isDeleting) {
      deletingTimeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));

        if (text.length === 0) {
          clearTimeout(deletingTimeout);
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }, deletingSpeed);
    } else {
      typingTimeout = setTimeout(() => {
        setText((prev) => phrases[phraseIndex].slice(0, prev.length + 1));

        if (text === phrases[phraseIndex]) {
          clearTimeout(typingTimeout);
          setIsDeleting(true);
        }
      }, typingSpeed);
    }

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(deletingTimeout);
    };
  }, [text, phraseIndex, isDeleting, phrases]);

  useEffect(() => {
    if (text.length === 0) {
      const pauseTimeout = setTimeout(() => {
        setIsDeleting(false);
      }, pauseBetweenPhrases);

      return () => clearTimeout(pauseTimeout);
    }
  }, [text.length]);

  return (
    <div className="typing-effect">
      <span>{text}</span>
      <span className="cursor">|</span> {/* Cursor piscante */}
    </div>
  );
};

export default TypingEffect;
