/* eslint-disable react/no-unknown-property */
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function Particles() {
    const starsRef = useRef();
    useFrame(() => {
        if (starsRef.current) {
          const positions = starsRef.current.attributes.position.array;
          const time = Date.now() * 0.001;
          for (let i = 0; i < positions.length; i += 5) {
            positions[i + 1] = Math.sin(time + positions[i] * 0.1) * 50;
          }
          starsRef.current.attributes.position.needsUpdate = true;
        }
      });
    
      const stars = new Array(1000).fill().map(() => [
        (Math.random() * 2 - 1) * 900,
        (Math.random() * 3 - 1) * 900,
        (Math.random() * 3 - 1) * 900
      ]);
    
      return (
        <points>
          <bufferGeometry ref={starsRef}>
            <bufferAttribute
              attach="attributes-position"
              array={new Float32Array(stars.flat())}
              count={stars.length}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial color="#e2e2e2e1" size={0} />
          
        </points>
      );
    }

export default function ParticleBackground() {
  return (
    <div style={{ position: 'absolute', width: '100%', height: '100%', zIndex: -1, 
     background:  "linear-gradient(-20deg, #000 0%, #000 50%"}}>
      <Canvas
        camera={{ position: [50, 50,1000], fov: 70 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight />
        <Particles />
      </Canvas>
    </div>
  );
}
