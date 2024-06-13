import { ReactNode, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Text, useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';

type DonutProps = {
  url: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  children?: ReactNode;
};
const Donut = ({ url, position, children, rotation, scale = 1 }: DonutProps) => {
  const donutRef = useRef<THREE.Group | null>(null);
  const { scene } = useGLTF(url);

  useFrame(() => {
    if (donutRef.current) {
      donutRef.current.rotation.y -= 0.05;
    }
  });

  return (
    <group>
      <primitive
        ref={donutRef}
        object={scene}
        scale={scale}
        position={position}
        rotation={rotation}
      />
      {children}
    </group>
  );
};

export default Donut;
