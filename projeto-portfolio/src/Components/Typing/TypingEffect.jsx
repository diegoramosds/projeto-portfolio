import { useState, useEffect, useRef } from 'react';
import './TypingEffect.css';

const TypingEffect = () => {
  const [text, setText] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const typingSpeed = 60;
  const isMounted = useRef(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const phrases = [
    "Olá me chamo Diego",
  ];

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (isCompleted) return;
    const currentPhrase = phrases[0];
    let timeout;

    const updateText = () => {
      if (!isMounted.current) return;

      setText((prev) => currentPhrase.slice(0, prev.length + 1));

      if (text === currentPhrase) {
        setIsCompleted(true); 
      }

      timeout = setTimeout(updateText, typingSpeed);
    };

    timeout = setTimeout(updateText, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isCompleted, phrases]);

  return (
    <div className="typing-effect">
      <span>{text}</span>
      <span className="cursor" ></span>
    </div>
  );
};

export default TypingEffect;
