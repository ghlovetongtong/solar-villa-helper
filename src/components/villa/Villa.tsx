
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

export default function Villa({ onHover }: { onHover: (info: string | null) => void }) {
  const group = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);
  
  // Subtle animation when hovered
  useFrame((_, delta) => {
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
      {/* Foundation/base platform */}
      <mesh position={[0, -0.05, 0]} receiveShadow>
        <boxGeometry args={[16, 0.1, 12]} />
        <meshStandardMaterial color="#e0e0e0" roughness={0.8} />
      </mesh>
      
      {/* Main building - Left part (2 stories) */}
      <mesh position={[-3, 1.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[8, 3, 8]} />
        <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.1} />
      </mesh>
      
      {/* Tall middle section */}
      <mesh position={[0, 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[3, 4, 6]} />
        <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.1} />
      </mesh>
      
      {/* Garage - right section */}
      <mesh position={[5, 1, 1]} castShadow receiveShadow>
        <boxGeometry args={[6, 2, 5]} />
        <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.1} />
      </mesh>
      
      {/* Roofs - triangular for main buildings */}
      <PitchedRoof position={[-3, 3.05, 0]} width={8.4} height={1.6} depth={8.4} />
      <PitchedRoof position={[0, 4.05, 0]} width={3.4} height={1.2} depth={6.4} />
      
      {/* Flat roof for garage with balcony/terrace */}
      <mesh position={[5, 2.05, 1]} castShadow>
        <boxGeometry args={[6.2, 0.1, 5.2]} />
        <meshStandardMaterial color="#d4d4d4" roughness={0.5} metalness={0.1} />
      </mesh>
      
      {/* Terrace railing */}
      <Railing position={[5, 2.3, -1.1]} width={6} />
      <Railing position={[2, 2.3, 1]} rotation={[0, Math.PI/2, 0]} width={4} />
      <Railing position={[8, 2.3, 1]} rotation={[0, Math.PI/2, 0]} width={4} />
      
      {/* Windows - Main building front - ground floor */}
      <WindowWithBlinds position={[-5, 1, 4.01]} size={[1.6, 1.6, 0.1]} />
      <WindowWithBlinds position={[-2, 1, 4.01]} size={[1.6, 1.6, 0.1]} />
      
      {/* Windows - Main building front - first floor */}
      <WindowWithBlinds position={[-5, 2.5, 4.01]} size={[1.6, 1.2, 0.1]} />
      <WindowWithBlinds position={[-2, 2.5, 4.01]} size={[1.6, 1.2, 0.1]} />
      
      {/* Windows - Tall middle section */}
      <WindowWithBlinds position={[0, 1, 3.01]} size={[1.6, 1.8, 0.1]} />
      <WindowWithBlinds position={[0, 3, 3.01]} size={[1.6, 1.8, 0.1]} />
      
      {/* Windows - Side windows */}
      <WindowWithBlinds position={[-7.01, 1, 0]} rotation={[0, Math.PI/2, 0]} size={[1.6, 1.6, 0.1]} />
      <WindowWithBlinds position={[-7.01, 2.5, 0]} rotation={[0, Math.PI/2, 0]} size={[1.6, 1.2, 0.1]} />
      <WindowWithBlinds position={[-7.01, 1, 2]} rotation={[0, Math.PI/2, 0]} size={[1.6, 1.6, 0.1]} />
      <WindowWithBlinds position={[-7.01, 2.5, 2]} rotation={[0, Math.PI/2, 0]} size={[1.6, 1.2, 0.1]} />
      
      {/* Windows - Back side */}
      <WindowWithBlinds position={[-5, 1, -4.01]} size={[1.6, 1.6, 0.1]} />
      <WindowWithBlinds position={[-2, 1, -4.01]} size={[1.6, 1.6, 0.1]} />
      <WindowWithBlinds position={[-5, 2.5, -4.01]} size={[1.6, 1.2, 0.1]} />
      <WindowWithBlinds position={[-2, 2.5, -4.01]} size={[1.6, 1.2, 0.1]} />
      
      {/* Garage door */}
      <GarageDoor position={[5, 0.8, 3.51]} />
      
      {/* Main entrance door with small roof overhang */}
      <EntranceDoor position={[0, 0, 3.01]} />
      
      {/* Entrance path/steps */}
      <mesh position={[0, -0.5, 4.5]} receiveShadow>
        <boxGeometry args={[2, 0.1, 3]} />
        <meshStandardMaterial color="#d4d4d4" roughness={0.7} />
      </mesh>
      
      {/* Decorative elements - garden, bushes, etc. */}
      <ModernBush position={[-6, -0.5, 4.5]} scale={0.5} />
      <ModernBush position={[-3, -0.5, 4.5]} scale={0.5} />
      <ModernBush position={[3, -0.5, 4.5]} scale={0.4} />
      <ModernBush position={[6, -0.5, 4.5]} scale={0.6} />
      <ModernBush position={[-7, -0.5, 0]} scale={0.5} />
      <ModernBush position={[-7, -0.5, -4]} scale={0.5} />
    </group>
  );
}

function PitchedRoof({ position, width, height, depth }: { 
  position: [number, number, number], 
  width: number, 
  height: number, 
  depth: number 
}) {
  return (
    <group position={position}>
      {/* Roof base */}
      <mesh castShadow>
        <boxGeometry args={[width, 0.1, depth]} />
        <meshStandardMaterial color="#333333" roughness={0.6} metalness={0.4} />
      </mesh>
      
      {/* Pitched roof - front triangle */}
      <mesh position={[0, height/2, depth/2]} castShadow>
        <cylinderGeometry args={[0.001, width/2, height, 3, 1, false, Math.PI, Math.PI]} rotation={[0, Math.PI/2, Math.PI/2]} />
        <meshStandardMaterial color="#333333" roughness={0.6} metalness={0.4} />
      </mesh>
      
      {/* Pitched roof - back triangle */}
      <mesh position={[0, height/2, -depth/2]} castShadow>
        <cylinderGeometry args={[0.001, width/2, height, 3, 1, false, 0, Math.PI]} rotation={[0, Math.PI/2, Math.PI/2]} />
        <meshStandardMaterial color="#333333" roughness={0.6} metalness={0.4} />
      </mesh>
      
      {/* Pitched roof - left face */}
      <mesh position={[-width/4, height/2, 0]} rotation={[Math.PI/4 - 0.1, 0, 0]} castShadow>
        <boxGeometry args={[width/2, Math.sqrt(height*height + (depth/2)*(depth/2)), 0.1]} />
        <meshStandardMaterial color="#333333" roughness={0.6} metalness={0.4} />
      </mesh>
      
      {/* Pitched roof - right face */}
      <mesh position={[width/4, height/2, 0]} rotation={[-(Math.PI/4 - 0.1), 0, 0]} castShadow>
        <boxGeometry args={[width/2, Math.sqrt(height*height + (depth/2)*(depth/2)), 0.1]} />
        <meshStandardMaterial color="#333333" roughness={0.6} metalness={0.4} />
      </mesh>
    </group>
  );
}

function WindowWithBlinds({ position, size, rotation = [0, 0, 0] }: { 
  position: [number, number, number], 
  size: [number, number, number],
  rotation?: [number, number, number]
}) {
  const [hover, setHover] = useState(false);
  
  return (
    <group position={position} rotation={rotation}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}>
      {/* Window frame */}
      <mesh castShadow>
        <boxGeometry args={[size[0] + 0.1, size[1] + 0.1, 0.08]} />
        <meshStandardMaterial color="#444444" roughness={0.5} metalness={0.5} />
      </mesh>
      
      {/* Window glass */}
      <mesh position={[0, 0, 0.03]} castShadow>
        <boxGeometry args={[size[0] - 0.1, size[1] - 0.1, 0.02]} />
        <meshStandardMaterial 
          color="#2a6aa0" 
          roughness={0}
          metalness={0.8}
          transparent={true}
          opacity={0.7}
          envMapIntensity={2}
        />
      </mesh>
      
      {/* Window dividers/frames */}
      <mesh position={[0, 0, 0.05]}>
        <boxGeometry args={[0.05, size[1] - 0.1, 0.04]} />
        <meshStandardMaterial color="#444444" roughness={0.5} metalness={0.5} />
      </mesh>
      
      {/* Horizontal dividers/blinds */}
      {Array(6).fill(0).map((_, i) => (
        <mesh key={i} position={[0, size[1]/2 - 0.2 - i * (size[1]-0.2)/5, 0.05]}>
          <boxGeometry args={[size[0] - 0.2, 0.05, 0.04]} />
          <meshStandardMaterial color="#444444" roughness={0.5} metalness={0.5} />
        </mesh>
      ))}
    </group>
  );
}

function EntranceDoor({ position }: { position: [number, number, number] }) {
  const [hover, setHover] = useState(false);
  
  return (
    <group position={position}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}>
      {/* Door frame */}
      <mesh castShadow>
        <boxGeometry args={[1.8, 2.5, 0.3]} />
        <meshStandardMaterial color="#333333" roughness={0.5} metalness={0.2} />
      </mesh>
      
      {/* Door */}
      <mesh position={[0, 0, 0.18]} castShadow>
        <boxGeometry args={[1.5, 2.3, 0.05]} />
        <meshStandardMaterial 
          color="#666666" 
          roughness={0.4} 
          metalness={0.6}
          emissive={hover ? "#777777" : "#000000"}
          emissiveIntensity={hover ? 0.5 : 0}
        />
      </mesh>
      
      {/* Door handle */}
      <mesh position={[0.6, 0, 0.23]} castShadow>
        <boxGeometry args={[0.1, 0.5, 0.05]} />
        <meshStandardMaterial color="#aaaaaa" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Small roof over door */}
      <mesh position={[0, 1.4, 0.5]} castShadow>
        <boxGeometry args={[2.2, 0.1, 1]} />
        <meshStandardMaterial color="#333333" roughness={0.6} metalness={0.4} />
      </mesh>
      
      {/* Support for small roof */}
      <mesh position={[-0.9, 1.15, 0.8]} castShadow>
        <boxGeometry args={[0.05, 0.5, 0.05]} />
        <meshStandardMaterial color="#aaaaaa" metalness={0.7} roughness={0.3} />
      </mesh>
      
      <mesh position={[0.9, 1.15, 0.8]} castShadow>
        <boxGeometry args={[0.05, 0.5, 0.05]} />
        <meshStandardMaterial color="#aaaaaa" metalness={0.7} roughness={0.3} />
      </mesh>
    </group>
  );
}

function GarageDoor({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Garage door frame */}
      <mesh castShadow>
        <boxGeometry args={[4.5, 2.1, 0.2]} />
        <meshStandardMaterial color="#555555" roughness={0.5} metalness={0.3} />
      </mesh>
      
      {/* Garage door panels */}
      {Array(3).fill(0).map((_, col) => 
        Array(4).fill(0).map((_, row) => (
          <mesh 
            key={`${col}-${row}`} 
            position={[(col-1)*1.4, (row-1.5)*0.5, 0.11]}
            castShadow
          >
            <boxGeometry args={[1.3, 0.45, 0.05]} />
            <meshStandardMaterial color="#777777" roughness={0.4} metalness={0.5} />
          </mesh>
        ))
      )}
    </group>
  );
}

function Railing({ position, width, rotation = [0, 0, 0] }: { 
  position: [number, number, number], 
  width: number,
  rotation?: [number, number, number]
}) {
  return (
    <group position={position} rotation={rotation}>
      {/* Top rail */}
      <mesh position={[0, 0.3, 0]}>
        <boxGeometry args={[width, 0.05, 0.05]} />
        <meshStandardMaterial color="#ffffff" metalness={0.5} roughness={0.5} />
      </mesh>
      
      {/* Bottom rail */}
      <mesh position={[0, 0.05, 0]}>
        <boxGeometry args={[width, 0.05, 0.05]} />
        <meshStandardMaterial color="#ffffff" metalness={0.5} roughness={0.5} />
      </mesh>
      
      {/* Vertical posts */}
      {Array(Math.ceil(width) * 4).fill(0).map((_, i) => (
        <mesh key={i} position={[-width/2 + 0.2 + i * width/(Math.ceil(width) * 4), 0.15, 0]}>
          <boxGeometry args={[0.02, 0.6, 0.02]} />
          <meshStandardMaterial color="#ffffff" metalness={0.5} roughness={0.5} />
        </mesh>
      ))}
    </group>
  );
}

function ModernBush({ position, scale = 1 }: { position: [number, number, number], scale?: number }) {
  return (
    <group position={position} scale={scale}>
      {/* Creating a more geometric, modern looking bush */}
      <mesh castShadow>
        <boxGeometry args={[1.2, 1, 1.2]} />
        <meshStandardMaterial color="#3a7041" roughness={0.8} />
      </mesh>
      <mesh position={[0, 0.6, 0]} castShadow>
        <boxGeometry args={[0.9, 0.4, 0.9]} />
        <meshStandardMaterial color="#3a7041" roughness={0.8} />
      </mesh>
    </group>
  );
}
