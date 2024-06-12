import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

const RecordPlayer = () => {
  const recordPlayerRef = useRef<THREE.Group | null>(null);
  const { scene, nodes } = useGLTF('/models/cartoon_record_player.glb');

  useEffect(
    function initGLTFSetting() {
      scene.traverse(obj => {
        // if ('isMesh' in obj) {
        obj.castShadow = true;
        obj.receiveShadow = true;
        // }
      });
    },
    [scene],
  );

  return (
    <primitive
      ref={recordPlayerRef}
      object={scene}
      rotation-y={(-Math.PI * 2) / 3}
      position={[-0.7, -1, -0.4]}
    />
  );
};

export default RecordPlayer;
