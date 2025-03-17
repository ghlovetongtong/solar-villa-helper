
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, Mesh, Vector2 } from "three";
import { useTexture } from "@react-three/drei";

export default function Villa({ onHover }: { onHover: (info: string | null) => void }) {
  const group = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);
  
  // Subtle animation when hovered
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
      {/* Villa foundation */}
      <mesh position={[0, -0.1, 0]} receiveShadow>
        <boxGeometry args={[4.2, 0.2, 3.2]} />
        <meshStandardMaterial color="#8E9196" roughness={0.8} />
      </mesh>
      
      {/* Villa base/first floor */}
      <mesh position={[0, 0.65, 0]} castShadow receiveShadow>
        <boxGeometry args={[4, 1.5, 3]} />
        <meshStandardMaterial color="#EBE6E2" roughness={0.6} metalness={0.1} />
      </mesh>
      
      {/* Villa second floor */}
      <mesh position={[0, 1.75, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.5, 1, 2.5]} />
        <meshStandardMaterial color="#F1F0FB" roughness={0.5} metalness={0.1} />
      </mesh>
      
      {/* Roof */}
      <mesh position={[0, 2.2, 0]} castShadow>
        <boxGeometry args={[4, 0.15, 3]} />
        <meshStandardMaterial color="#403E43" roughness={0.4} metalness={0.3} />
      </mesh>

      {/* Decorative roof trim */}
      <mesh position={[0, 2.28, 0]} castShadow>
        <boxGeometry args={[4.1, 0.05, 3.1]} />
        <meshStandardMaterial color="#2D2D30" roughness={0.4} metalness={0.3} />
      </mesh>
      
      {/* Windows - First floor */}
      {/* Front windows */}
      <Window position={[1.5, 0.5, 1.501]} size={[0.8, 0.8, 0.05]} />
      <Window position={[-1.5, 0.5, 1.501]} size={[0.8, 0.8, 0.05]} />
      
      {/* Side windows */}
      <Window position={[-2.001, 0.5, 0.4]} size={[0.05, 0.8, 0.8]} rotation={[0, Math.PI/2, 0]} />
      <Window position={[2.001, 0.5, 0.4]} size={[0.05, 0.8, 0.8]} rotation={[0, Math.PI/2, 0]} />
      <Window position={[-2.001, 0.5, -0.7]} size={[0.05, 0.8, 0.8]} rotation={[0, Math.PI/2, 0]} />
      <Window position={[2.001, 0.5, -0.7]} size={[0.05, 0.8, 0.8]} rotation={[0, Math.PI/2, 0]} />
      
      {/* Windows - Second floor */}
      <Window position={[1.2, 1.75, 1.251]} size={[0.7, 0.7, 0.05]} />
      <Window position={[-1.2, 1.75, 1.251]} size={[0.7, 0.7, 0.05]} />
      
      {/* Back windows */}
      <Window position={[1.2, 0.5, -1.501]} size={[0.8, 0.8, 0.05]} />
      <Window position={[-1.2, 0.5, -1.501]} size={[0.8, 0.8, 0.05]} />
      
      {/* Door */}
      <Door position={[0, -0.25, 1.501]} />
      
      {/* Balcony for second floor */}
      <mesh position={[0, 1.3, 1.4]} castShadow>
        <boxGeometry args={[2.5, 0.05, 0.5]} />
        <meshStandardMaterial color="#D0D1D5" roughness={0.7} />
      </mesh>
      
      {/* Balcony railings */}
      <Railing position={[0, 1.5, 1.65]} />
      
      {/* Garden decorations */}
      <Bush position={[1.8, -0.5, 2]} scale={0.3} />
      <Bush position={[-1.8, -0.5, 2]} scale={0.3} />
      <Bush position={[2.5, -0.6, 0]} scale={0.4} />
      <Bush position={[-2.5, -0.6, 0]} scale={0.4} />
    </group>
  );
}

// Component for windows with frame
function Window({ position, size, rotation = [0, 0, 0] }: { 
  position: [number, number, number], 
  size: [number, number, number],
  rotation?: [number, number, number]
}) {
  return (
    <group position={position} rotation={rotation}>
      {/* Window frame */}
      <mesh castShadow>
        <boxGeometry args={[size[0] + 0.1, size[1] + 0.1, 0.07]} />
        <meshStandardMaterial color="#6D6A6A" roughness={0.5} metalness={0.2} />
      </mesh>
      
      {/* Window glass */}
      <mesh position={[0, 0, 0.03]} castShadow>
        <boxGeometry args={[size[0] - 0.05, size[1] - 0.05, 0.02]} />
        <meshStandardMaterial 
          color="#33C3F0" 
          roughness={0.1} 
          metalness={0.9}
          transparent={true}
          opacity={0.6}
          envMapIntensity={2}
        />
      </mesh>
      
      {/* Window dividers */}
      <mesh position={[0, 0, 0.06]}>
        <boxGeometry args={[0.04, size[1] - 0.05, 0.03]} />
        <meshStandardMaterial color="#6D6A6A" roughness={0.5} />
      </mesh>
      <mesh position={[0, 0, 0.06]}>
        <boxGeometry args={[size[0] - 0.05, 0.04, 0.03]} />
        <meshStandardMaterial color="#6D6A6A" roughness={0.5} />
      </mesh>
    </group>
  );
}

// Component for the front door
function Door({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Door frame */}
      <mesh castShadow>
        <boxGeometry args={[1, 1.2, 0.1]} />
        <meshStandardMaterial color="#5D4037" roughness={0.7} />
      </mesh>
      
      {/* Door */}
      <mesh position={[0, 0, 0.06]} castShadow>
        <boxGeometry args={[0.8, 1, 0.05]} />
        <meshStandardMaterial color="#795548" roughness={0.6} metalness={0.1} />
      </mesh>
      
      {/* Door handle */}
      <mesh position={[0.3, 0, 0.12]} castShadow>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="#CFD8DC" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

// Component for balcony railings
function Railing({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Horizontal railings */}
      <mesh>
        <boxGeometry args={[2.5, 0.04, 0.04]} />
        <meshStandardMaterial color="#CFD8DC" metalness={0.5} roughness={0.5} />
      </mesh>
      
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[2.5, 0.04, 0.04]} />
        <meshStandardMaterial color="#CFD8DC" metalness={0.5} roughness={0.5} />
      </mesh>
      
      {/* Vertical railings */}
      {[-1.15, -0.85, -0.55, -0.25, 0.05, 0.35, 0.65, 0.95, 1.15].map((x, i) => (
        <mesh key={i} position={[x, 0.1, 0]}>
          <boxGeometry args={[0.03, 0.4, 0.03]} />
          <meshStandardMaterial color="#CFD8DC" metalness={0.5} roughness={0.5} />
        </mesh>
      ))}
    </group>
  );
}

// Component for decorative bushes
function Bush({ position, scale = 1 }: { position: [number, number, number], scale?: number }) {
  return (
    <group position={position} scale={scale}>
      <mesh castShadow>
        <sphereGeometry args={[0.5, 8, 8]} />
        <meshStandardMaterial color="#2D5830" roughness={0.8} />
      </mesh>
      <mesh position={[0.3, 0.1, 0]} castShadow>
        <sphereGeometry args={[0.4, 8, 8]} />
        <meshStandardMaterial color="#2D5830" roughness={0.8} />
      </mesh>
      <mesh position={[-0.2, 0.15, 0.2]} castShadow>
        <sphereGeometry args={[0.35, 8, 8]} />
        <meshStandardMaterial color="#2D5830" roughness={0.8} />
      </mesh>
    </group>
  );
}
