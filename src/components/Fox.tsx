import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useAnimations, useGLTF } from '@react-three/drei';

const Fox = () => {
  const foxRef = useRef<THREE.Group | null>(null);
  const { scene, animations } = useGLTF('/models/fox.glb');
  const { actions } = useAnimations(animations, foxRef);
  const [currentAnimation, setCurrentAnimation] = useState('Fox_Run_InPlace');

  useEffect(
    function initGLTFSetting() {
      scene.traverse(obj => {
        if ('isMesh' in obj) {
          obj.castShadow = true;
          obj.receiveShadow = true;
        }
      });
    },
    [scene],
  );

  useEffect(
    function foxAnimation() {
      const targetAction = actions[currentAnimation];
      targetAction?.play();

      return () => {
        actions[currentAnimation]?.reset().fadeOut(0.5).stop();
      };
    },
    [actions],
  );

  return (
    <primitive
      ref={foxRef}
      object={scene}
      scale={0.03}
      position={[-0.9, 0.05, 0.2]}
      rotation={[0, (Math.PI * 1.2) / 3, 0]}
    />
  );
};

export default Fox;
