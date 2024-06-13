import { ReactNode, useContext, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { MenuItemContext } from '@/components/MenuItem';

type DonutProps = {
  url: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
};
const Donut = ({ url, position, rotation, scale = 1 }: DonutProps) => {
  const { scene } = useGLTF(url);
  const donutRef = useRef<THREE.Group | null>(null);
  const { isHover } = useContext(MenuItemContext);

  useFrame(() => {
    if (donutRef.current && isHover) {
      donutRef.current.rotation.y -= 0.05;
    }
  });

  useEffect(() => {
    const bodyClassList = document.body.classList;
    isHover ? bodyClassList.add('pointer') : bodyClassList.remove('pointer');

    return () => {
      bodyClassList.remove('pointer');
    };
  }, [isHover]);

  return (
    <primitive
      ref={donutRef}
      object={scene}
      scale={scale}
      position={position}
      rotation={rotation}
    />
  );
};

export default Donut;
