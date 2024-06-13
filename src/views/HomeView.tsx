'use client';

import MainCanvas from '@/components/MainCanvas';
import { Circle, OrbitControls, ScrollControls, Text } from '@react-three/drei';
import { lazy } from 'react';

const RecordPlayerComponent = lazy(() => import('@/components/RecordPlayer'));
const FoxComponent = lazy(() => import('@/components/Fox'));
const DonutComponent = lazy(() => import('@/components/Donut'));
const HomeView = () => {
  return (
    <MainCanvas>
      <ScrollControls pages={0} damping={0.25}>
        <group position-y={-0.5} position-x={-0.4}>
          <RecordPlayerComponent />
          <FoxComponent />
          <Circle
            castShadow={true}
            receiveShadow={true}
            args={[8, 32]}
            rotation-x={-Math.PI / 2}
            position-y={-0.6}
          >
            <meshStandardMaterial color="#fedcba" />
          </Circle>
        </group>
        <group position-x={-0.3}>
          <DonutComponent
            url="/models/maple_donut.glb"
            position={[0.85, 1.1, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={2.5}
          >
            <Text
              color="black"
              fontSize={0.3}
              position={[0.81 + 1.1, 1.1, 0]}
              anchorX="center"
              anchorY="middle"
            >
              About Me
            </Text>
          </DonutComponent>
          <DonutComponent
            url="/models/strawberry_donut.glb"
            scale={1.7}
            position={[0.9, 0.25, 0]}
            rotation={[Math.PI / 2 - 0.1, 0, 0.1]}
          >
            <Text
              color="black"
              fontSize={0.3}
              position={[0.9 + 0.8, 0.25, 0]}
              anchorX="center"
              anchorY="middle"
            >
              Work
            </Text>
          </DonutComponent>
          <DonutComponent
            url="/models/mint_donut.glb"
            position={[1, -0.7, 0]}
            rotation={[Math.PI / 2 - 0.1, 0, 0.1]}
            scale={0.003}
          >
            <Text
              color="black"
              fontSize={0.3}
              position={[1 + 1.3, -0.7, 0]}
              anchorX="center"
              anchorY="middle"
            >
              Side Projects
            </Text>
          </DonutComponent>
        </group>
        <directionalLight intensity={1} color="#ffffff" />
        <ambientLight intensity={2} color="#ffffff" />
        <pointLight
          position={[0, 2.5, 0]}
          intensity={20}
          castShadow={true}
          receiveShadow={true}
        />
        <OrbitControls />
      </ScrollControls>
    </MainCanvas>
  );
};

export default HomeView;
