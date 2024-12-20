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
          <pointsMaterial color="#535353" size={1.5} sizeAttenuation={false}/>
        </points>
      );
    }

export default function ParticleBackground() {
  return (
    <div style={{ position: 'absolute', width: '100%', height: '80%', zIndex: -10,
     background:  "linear-gradient(-10deg, #000 0%, #00050%"}}>
      <Canvas
        camera={{ position: [50, 50,1000], fov: 70 }}
      >
        <ambientLight />
        <Particles />
      </Canvas>
    </div>
  );
}
