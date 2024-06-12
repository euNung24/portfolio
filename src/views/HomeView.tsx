'use client';

import MainCanvas from '@/components/MainCanvas';
import { Circle, OrbitControls, ScrollControls } from '@react-three/drei';
import { lazy } from 'react';

const RecordPlayerComponent = lazy(() => import('@/components/RecordPlayer'));
const FoxComponent = lazy(() => import('@/components/Fox'));

const HomeView = () => {
  return (
    <MainCanvas>
      <ScrollControls pages={0} damping={0.25}>
        <group>
          <RecordPlayerComponent />
          <FoxComponent />
        </group>
        <directionalLight intensity={1} color="#ffffff" />
        <ambientLight intensity={2} color="#ffffff" />
        <pointLight
          position={[0, 2.5, 0]}
          intensity={20}
          castShadow={true}
          receiveShadow={true}
        />
        <Circle
          castShadow={true}
          receiveShadow={true}
          args={[8, 32]}
          rotation-x={-Math.PI / 2}
          position-y={-0.6}
        >
          <meshStandardMaterial color="#abcdef" />
        </Circle>
        <OrbitControls />
      </ScrollControls>
    </MainCanvas>
  );
};

export default HomeView;
