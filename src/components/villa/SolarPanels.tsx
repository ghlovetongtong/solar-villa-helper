
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Group } from "three";

export default function SolarPanels({ onHover }: { onHover: (info: string | null) => void }) {
  const group = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);
  
  // Subtle animation for solar panels
  useFrame((state, delta) => {
    if (group.current && hovered) {
      group.current.children.forEach((child, i) => {
        // @ts-ignore
        child.material.emissive.set(hovered ? "#104060" : "#000000");
      });
    }
  });

  return (
    <group
      ref={group}
      position={[0, 2.2, 0]}
      onPointerOver={() => {
        setHovered(true);
        onHover("High-efficiency solar panels providing clean energy to the villa");
      }}
      onPointerOut={() => {
        setHovered(false);
        onHover(null);
      }}
    >
      {/* Create a grid of solar panels on the roof */}
      {Array(3).fill(0).map((_, row) => 
        Array(4).fill(0).map((_, col) => (
          <mesh 
            key={`${row}-${col}`} 
            position={[(col - 1.5) * 0.8, 0.05, (row - 1) * 0.8]}
            rotation={[0, 0, 0]}
          >
            <boxGeometry args={[0.7, 0.05, 0.7]} />
            <meshStandardMaterial 
              color="#2C5282" 
              metalness={0.8}
              roughness={0.2}
              emissive="#000000"
            />
          </mesh>
        ))
      )}
    </group>
  );
}
