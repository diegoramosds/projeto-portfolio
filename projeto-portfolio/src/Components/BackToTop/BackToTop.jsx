import './BackToTop.css';



import { useEffect } from 'react';

function BackToTop() {

  
  useEffect(() => {
    const handleScroll = () => {
      var arrowTop = document.getElementById('arrow-top');
      if (window.pageYOffset > 300) {
        arrowTop.style.display = 'block';
      } else {
        arrowTop.style.display = 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  
  return (
    <>
    <div id="arrow-top" onClick={scrollToTop}></div>
    </>
  )
}

export default BackToTop;
