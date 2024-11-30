import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import computer from '../img/mouse.json';

function AnimatedIcon() {
  const containerRef = useRef(null); 

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: computer,
    });

    
    return () => {
      animation.destroy();
    };
  }, []); 

  return <div ref={containerRef} style={{ width: 80, height: 50 }}></div>;
}

export default AnimatedIcon;
