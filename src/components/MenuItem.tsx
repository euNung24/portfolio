import { createContext, ReactNode, useEffect, useState } from 'react';
import { Text } from '@react-three/drei';
import { useRouter } from 'next/navigation';

type MenuItemProps = {
  title: string;
  position?: [number, number, number];
  children?: ReactNode;
};

export const MenuItemContext = createContext({ isHover: false });
const MenuItem = ({ title, position, children }: MenuItemProps) => {
  const router = useRouter();
  const [isHover, setHover] = useState(false);

  const onPointerEnter = () => {
    setHover(true);
  };

  const onPointerOut = () => {
    setHover(false);
  };

  const movePage = () => {
    const [first, ...others] = title.split(' ');
    const pathname = first.toLowerCase() + others.join('');
    router.push(pathname);
  };

  useEffect(() => {
    const bodyClassList = document.body.classList;
    isHover ? bodyClassList.add('pointer') : bodyClassList.remove('pointer');

    return () => {
      bodyClassList.remove('pointer');
    };
  }, [isHover]);

  return (
    <MenuItemContext.Provider value={{ isHover }}>
      <group
        onPointerEnter={onPointerEnter}
        onPointerOut={onPointerOut}
        onClick={movePage}
      >
        {children}
        <Text
          color={isHover ? '#444b6e' : '#000000'}
          fontSize={0.3}
          position={position}
          anchorX="center"
          anchorY="middle"
        >
          {title}
        </Text>
      </group>
    </MenuItemContext.Provider>
  );
};

export default MenuItem;
