
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, Mesh } from "three";

export default function Villa({ onHover }: { onHover: (info: string | null) => void }) {
  const group = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);

  // In a real application, you would need a real model here
  // For demo purposes, we'll create a simple house shape
  
  // Pulse animation when hovered
  useFrame((state, delta) => {
    if (group.current && hovered) {
      group.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group 
      ref={group} 
      position={[0, -1, 0]} 
      scale={1}
      onPointerOver={() => {
        setHovered(true);
        onHover("Modern villa with energy-efficient design and solar integration");
      }}
      onPointerOut={() => {
        setHovered(false);
        onHover(null);
      }}
    >
      {/* Villa base */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[4, 1.5, 3]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>
      
      {/* Villa second floor */}
      <mesh position={[0, 1.25, 0]}>
        <boxGeometry args={[3.5, 1, 2.5]} />
        <meshStandardMaterial color="#e0e0e0" />
      </mesh>
      
      {/* Roof */}
      <mesh position={[0, 2.1, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[4, 0.2, 3]} />
        <meshStandardMaterial color="#d0d0d0" />
      </mesh>
      
      {/* Windows */}
      <mesh position={[1.5, 0.5, 0]}>
        <boxGeometry args={[0.1, 0.8, 1]} />
        <meshStandardMaterial color="#a0d0ff" opacity={0.7} transparent />
      </mesh>
      
      <mesh position={[-1.5, 0.5, 0]}>
        <boxGeometry args={[0.1, 0.8, 1]} />
        <meshStandardMaterial color="#a0d0ff" opacity={0.7} transparent />
      </mesh>
      
      <mesh position={[0, 0.5, 1.4]}>
        <boxGeometry args={[1, 0.8, 0.1]} />
        <meshStandardMaterial color="#a0d0ff" opacity={0.7} transparent />
      </mesh>
      
      {/* Door */}
      <mesh position={[0, -0.25, 1.5]}>
        <boxGeometry args={[0.8, 1, 0.1]} />
        <meshStandardMaterial color="#8b5a2b" />
      </mesh>
    </group>
  );
}
