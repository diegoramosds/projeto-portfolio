import { FaArrowCircleUp } from 'react-icons/fa';
import './BackToTop.css';
import { useEffect, useRef, useState } from 'react';

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const arrowRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    const debounceScroll = debounce(handleScroll, 100);

    window.addEventListener('scroll', debounceScroll);
    return () => {
      window.removeEventListener('scroll', debounceScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      ref={arrowRef}
      id="arrow-top"
      onClick={scrollToTop}
      style={{ display: isVisible ? 'block' : 'none' }}
      aria-label="Voltar para o início"
    >
      <FaArrowCircleUp title="Voltar para o início" />
    </div>
  );
}
function debounce(func, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}

export default BackToTop;
