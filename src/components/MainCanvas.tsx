'use client';

import { Canvas } from '@react-three/fiber';
import { ReactNode, useEffect, useState } from 'react';
import * as THREE from 'three';

const MainCanvas = ({ children }: { children: ReactNode }) => {
  const [aspect, setAspect] = useState<number | undefined>(undefined);

  useEffect(() => {
    setAspect(window.innerWidth / window.innerHeight);

    const resize = () => {
      setAspect(window.innerWidth / window.innerHeight);
    };
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <Canvas
      id="canvas"
      gl={{ antialias: true }}
      shadows="soft"
      camera={{
        fov: 30,
        aspect: aspect,
        near: 0.01,
        far: 1000,
        position: [0, 3, 5],
      }}
      scene={{ background: new THREE.Color(0xabcdef) }}
    >
      {children}
    </Canvas>
  );
};

export default MainCanvas;
