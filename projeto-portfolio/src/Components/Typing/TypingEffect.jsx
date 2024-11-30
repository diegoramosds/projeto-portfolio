import { useState, useEffect, useRef } from 'react';
import './TypingEffect.css';

const TypingEffect = () => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 120;
  const deletingSpeed = 80;
  const pauseBetweenPhrases = 300;
  const isMounted = useRef(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const phrases = [
    "Desenvolvedor",
    "Front-end",
    "JavaScript",
    "React",
    "HTML e CSS",
    "Design Responsivo",
    "Git",
    "GitHub",
    "Criador de Experiências",
  ];

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeout;

    const updateText = () => {
      if (!isMounted.current) return;

      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));

        if (text === '') {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      } else {
        setText((prev) => currentPhrase.slice(0, prev.length + 1));

        if (text === currentPhrase) {
          timeout = setTimeout(() => setIsDeleting(true), pauseBetweenPhrases);
          return;
        }
      }

      timeout = setTimeout(updateText, isDeleting ? deletingSpeed : typingSpeed);
    };

    timeout = setTimeout(updateText, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, phrases]);

  return (
    <div className="typing-effect" translate="no">
      <span>{text}</span>
      <span className="cursor">|</span>
    </div>
  );
};

export default TypingEffect;
