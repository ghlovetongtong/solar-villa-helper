
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";
import { Inverter, Meter, StorageSystem, OffGridController } from "./Equipment";

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
        onHover("Modern energy-efficient villa with integrated solar system");
      }}
      onPointerOut={() => {
        setHovered(false);
        onHover(null);
      }}
    >
      {/* Foundation/base platform with more realistic concrete texture */}
      <mesh position={[0, -0.05, 0]} receiveShadow>
        <boxGeometry args={[16, 0.1, 12]} />
        <meshStandardMaterial color="#e0e0e0" roughness={0.8} />
      </mesh>
      
      {/* Main building - Left part (2 stories) - improved wall material */}
      <mesh position={[-3, 1.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[8, 3, 8]} />
        <meshStandardMaterial color="#f1f0fb" roughness={0.4} metalness={0.05} />
      </mesh>
      
      {/* Tall middle section with better material */}
      <mesh position={[0, 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[3, 4, 6]} />
        <meshStandardMaterial color="#f1f0fb" roughness={0.4} metalness={0.05} />
      </mesh>
      
      {/* Garage - right section with improved materials */}
      <mesh position={[5, 1, 1]} castShadow receiveShadow>
        <boxGeometry args={[6, 2, 5]} />
        <meshStandardMaterial color="#f1f0fb" roughness={0.4} metalness={0.05} />
      </mesh>
      
      {/* Main Building Roof - Left part - FLAT WITH SOLAR PANELS */}
      <FlatRoof position={[-3, 3.05, 0]} width={8.2} depth={8.2} />
      <SolarPanelsArray position={[-3, 3.16, 0]} width={7.8} depth={7.8} rows={4} columns={4} onHover={onHover} />
      
      {/* Middle Section Roof - FLAT WITH SOLAR PANELS */}
      <FlatRoof position={[0, 4.05, 0]} width={3.2} depth={6.2} />
      <SolarPanelsArray position={[0, 4.16, 0]} width={2.8} depth={5.8} rows={2} columns={3} onHover={onHover} />
      
      {/* Flat roof for garage with balcony/terrace */}
      <mesh position={[5, 2.05, 1]} castShadow>
        <boxGeometry args={[6.2, 0.1, 5.2]} />
        <meshStandardMaterial color="#d4d4d4" roughness={0.5} metalness={0.1} />
      </mesh>
      
      {/* Solar panels on garage roof */}
      <SolarPanelsArray position={[5, 2.16, 1]} width={5.8} depth={3.6} rows={3} columns={3} onHover={onHover} />
      
      {/* Terrace railing */}
      <Railing position={[5, 2.3, -1.1]} width={6} />
      <Railing position={[2, 2.3, 1]} rotation={[0, Math.PI/2, 0]} width={4} />
      <Railing position={[8, 2.3, 1]} rotation={[0, Math.PI/2, 0]} width={4} />
      
      {/* Windows with enhanced realism */}
      <EnhancedWindow position={[-5, 1, 4.01]} size={[1.6, 1.6, 0.1]} />
      <EnhancedWindow position={[-2, 1, 4.01]} size={[1.6, 1.6, 0.1]} />
      <EnhancedWindow position={[-5, 2.5, 4.01]} size={[1.6, 1.2, 0.1]} />
      <EnhancedWindow position={[-2, 2.5, 4.01]} size={[1.6, 1.2, 0.1]} />
      <EnhancedWindow position={[0, 1, 3.01]} size={[1.6, 1.8, 0.1]} />
      <EnhancedWindow position={[0, 3, 3.01]} size={[1.6, 1.8, 0.1]} />
      <EnhancedWindow position={[-7.01, 1, 0]} rotation={[0, Math.PI/2, 0]} size={[1.6, 1.6, 0.1]} />
      <EnhancedWindow position={[-7.01, 2.5, 0]} rotation={[0, Math.PI/2, 0]} size={[1.6, 1.2, 0.1]} />
      <EnhancedWindow position={[-7.01, 1, 2]} rotation={[0, Math.PI/2, 0]} size={[1.6, 1.6, 0.1]} />
      <EnhancedWindow position={[-7.01, 2.5, 2]} rotation={[0, Math.PI/2, 0]} size={[1.6, 1.2, 0.1]} />
      <EnhancedWindow position={[-5, 1, -4.01]} size={[1.6, 1.6, 0.1]} />
      <EnhancedWindow position={[-2, 1, -4.01]} size={[1.6, 1.6, 0.1]} />
      <EnhancedWindow position={[-5, 2.5, -4.01]} size={[1.6, 1.2, 0.1]} />
      <EnhancedWindow position={[-2, 2.5, -4.01]} size={[1.6, 1.2, 0.1]} />
      
      {/* Enhanced garage door */}
      <EnhancedGarageDoor position={[5, 0.8, 3.51]} />
      
      {/* Enhanced main entrance door with glass elements */}
      <EnhancedEntranceDoor position={[0, 0, 3.01]} />
      
      {/* Entrance path/steps with better texture */}
      <mesh position={[0, -0.5, 4.5]} receiveShadow>
        <boxGeometry args={[2, 0.1, 3]} />
        <meshStandardMaterial color="#c8c8c9" roughness={0.7} />
      </mesh>
      
      {/* Enhanced landscaping elements */}
      <RealisticBush position={[-6, -0.5, 4.5]} scale={0.5} />
      <RealisticBush position={[-3, -0.5, 4.5]} scale={0.6} variant={1} />
      <RealisticBush position={[3, -0.5, 4.5]} scale={0.4} />
      <RealisticBush position={[6, -0.5, 4.5]} scale={0.7} variant={2} />
      <RealisticBush position={[-7, -0.5, 0]} scale={0.5} variant={1} />
      <RealisticBush position={[-7, -0.5, -4]} scale={0.6} />
      
      {/* Swimming pool */}
      <mesh position={[-6, -0.45, -7]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[4, 3]} />
        <meshStandardMaterial color="#0ea5e9" roughness={0} metalness={0.2} transparent opacity={0.8} />
      </mesh>
      
      {/* Chimney */}
      <mesh position={[-6, 4, 0]} castShadow>
        <boxGeometry args={[0.6, 1.2, 0.6]} />
        <meshStandardMaterial color="#8E9196" roughness={0.8} />
      </mesh>
      
      {/* Solar equipment integrated with the villa */}
      <Inverter onHover={onHover} />
      <Meter onHover={onHover} />
      <StorageSystem onHover={onHover} />
      <OffGridController onHover={onHover} />
    </group>
  );
}

function FlatRoof({ position, width, depth }: { 
  position: [number, number, number], 
  width: number, 
  depth: number
}) {
  const roofColor = "#403E43"; // Dark gray roof color
  
  return (
    <mesh position={position} castShadow>
      <boxGeometry args={[width, 0.2, depth]} />
      <meshStandardMaterial color={roofColor} roughness={0.7} metalness={0.1} />
    </mesh>
  );
}

function SolarPanel({ position, onHover }: {
  position: [number, number, number],
  onHover: (info: string | null) => void
}) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <group 
      position={position}
      onPointerOver={() => {
        setIsHovered(true);
        onHover("Solar panel: Converts sunlight into electricity");
      }}
      onPointerOut={() => {
        setIsHovered(false);
        onHover(null);
      }}
    >
      {/* Panel frame */}
      <mesh castShadow>
        <boxGeometry args={[1.8, 0.05, 0.9]} />
        <meshStandardMaterial color="#222222" roughness={0.4} metalness={0.6} />
      </mesh>
      
      {/* Panel cells */}
      <mesh position={[0, 0.03, 0]} castShadow>
        <boxGeometry args={[1.7, 0.02, 0.8]} />
        <meshStandardMaterial 
          color={isHovered ? "#1e40af" : "#0c4a6e"} 
          roughness={0.1} 
          metalness={0.8}
          envMapIntensity={1.5}
        />
      </mesh>
      
      {/* Grid lines - horizontal */}
      {Array(4).fill(0).map((_, i) => (
        <mesh key={`h-${i}`} position={[0, 0.04, -0.3 + i * 0.2]}>
          <boxGeometry args={[1.7, 0.01, 0.01]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
      ))}
      
      {/* Grid lines - vertical */}
      {Array(6).fill(0).map((_, i) => (
        <mesh key={`v-${i}`} position={[-0.7 + i * 0.28, 0.04, 0]}>
          <boxGeometry args={[0.01, 0.01, 0.8]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
      ))}
    </group>
  );
}

function SolarPanelsArray({ position, width, depth, rows, columns, onHover }: {
  position: [number, number, number],
  width: number,
  depth: number,
  rows: number,
  columns: number,
  onHover: (info: string | null) => void
}) {
  const panelWidth = 1.8;
  const panelDepth = 0.9;
  const padding = 0.1;
  
  const startX = -width / 2 + panelWidth / 2 + padding;
  const startZ = -depth / 2 + panelDepth / 2 + padding;
  const stepX = (width - padding * 2) / (columns || 1);
  const stepZ = (depth - padding * 2) / (rows || 1);
  
  return (
    <group position={position}>
      {Array(rows).fill(0).map((_, rowIdx) => 
        Array(columns).fill(0).map((_, colIdx) => (
          <SolarPanel 
            key={`panel-${rowIdx}-${colIdx}`}
            position={[
              startX + colIdx * (stepX < panelWidth + padding ? panelWidth + padding : stepX), 
              0, 
              startZ + rowIdx * (stepZ < panelDepth + padding ? panelDepth + padding : stepZ)
            ]}
            onHover={onHover}
          />
        ))
      )}
    </group>
  );
}

function EnhancedWindow({ position, size, rotation = [0, 0, 0] }: { 
  position: [number, number, number], 
  size: [number, number, number],
  rotation?: [number, number, number]
}) {
  const [hover, setHover] = useState(false);
  
  return (
    <group position={position} rotation={rotation}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}>
      {/* Window frame with metallic finish */}
      <mesh castShadow>
        <boxGeometry args={[size[0] + 0.1, size[1] + 0.1, 0.08]} />
        <meshStandardMaterial color="#666666" roughness={0.2} metalness={0.8} />
      </mesh>
      
      {/* Window glass with more realistic material */}
      <mesh position={[0, 0, 0.03]} castShadow>
        <boxGeometry args={[size[0] - 0.1, size[1] - 0.1, 0.02]} />
        <meshStandardMaterial 
          color="#a3d7ff" 
          roughness={0}
          metalness={0.9}
          transparent={true}
          opacity={0.6}
          envMapIntensity={2}
        />
      </mesh>
      
      {/* Window dividers/frames */}
      <mesh position={[0, 0, 0.05]}>
        <boxGeometry args={[0.05, size[1] - 0.1, 0.04]} />
        <meshStandardMaterial color="#666666" roughness={0.2} metalness={0.8} />
      </mesh>
      
      {/* Horizontal dividers/blinds */}
      {Array(6).fill(0).map((_, i) => (
        <mesh key={i} position={[0, size[1]/2 - 0.2 - i * (size[1]-0.2)/5, 0.05]}>
          <boxGeometry args={[size[0] - 0.2, 0.05, 0.04]} />
          <meshStandardMaterial color="#666666" roughness={0.2} metalness={0.8} />
        </mesh>
      ))}
      
      {/* Window sill */}
      <mesh position={[0, -size[1]/2 - 0.05, 0.2]}>
        <boxGeometry args={[size[0] + 0.3, 0.1, 0.3]} />
        <meshStandardMaterial color="#d4d4d4" roughness={0.6} metalness={0.1} />
      </mesh>
    </group>
  );
}

function EnhancedEntranceDoor({ position }: { position: [number, number, number] }) {
  const [hover, setHover] = useState(false);
  
  return (
    <group position={position}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}>
      {/* Door frame with enhanced material */}
      <mesh castShadow>
        <boxGeometry args={[1.8, 2.5, 0.3]} />
        <meshStandardMaterial color="#555555" roughness={0.5} metalness={0.2} />
      </mesh>
      
      {/* Main door with wood-like material */}
      <mesh position={[0, 0, 0.18]} castShadow>
        <boxGeometry args={[1.5, 2.3, 0.05]} />
        <meshStandardMaterial 
          color="#885533" 
          roughness={0.7} 
          metalness={0.1}
          emissive={hover ? "#442211" : "#000000"}
          emissiveIntensity={hover ? 0.3 : 0}
        />
      </mesh>
      
      {/* Glass panel in door */}
      <mesh position={[0, 0.6, 0.19]} castShadow>
        <boxGeometry args={[0.8, 0.8, 0.06]} />
        <meshStandardMaterial 
          color="#a3d7ff" 
          roughness={0}
          metalness={0.9}
          transparent={true}
          opacity={0.7}
          envMapIntensity={1.5}
        />
      </mesh>
      
      {/* Door handle with chrome-like material */}
      <mesh position={[0.6, 0, 0.23]} castShadow>
        <boxGeometry args={[0.1, 0.5, 0.05]} />
        <meshStandardMaterial color="#dddddd" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Enhanced roof over door */}
      <mesh position={[0, 1.4, 0.5]} castShadow>
        <boxGeometry args={[2.2, 0.1, 1]} />
        <meshStandardMaterial color="#403E43" roughness={0.6} metalness={0.2} />
      </mesh>
      
      {/* Support for small roof */}
      <mesh position={[-0.9, 1.15, 0.8]} castShadow>
        <boxGeometry args={[0.05, 0.5, 0.05]} />
        <meshStandardMaterial color="#dddddd" metalness={0.8} roughness={0.2} />
      </mesh>
      
      <mesh position={[0.9, 1.15, 0.8]} castShadow>
        <boxGeometry args={[0.05, 0.5, 0.05]} />
        <meshStandardMaterial color="#dddddd" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Door steps */}
      <mesh position={[0, -1.4, 1]} castShadow receiveShadow>
        <boxGeometry args={[2, 0.2, 1.5]} />
        <meshStandardMaterial color="#c8c8c9" roughness={0.7} />
      </mesh>
    </group>
  );
}

function EnhancedGarageDoor({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Garage door frame with improved material */}
      <mesh castShadow>
        <boxGeometry args={[4.5, 2.1, 0.2]} />
        <meshStandardMaterial color="#555555" roughness={0.5} metalness={0.4} />
      </mesh>
      
      {/* Garage door panels with metallic finish */}
      {Array(3).fill(0).map((_, col) => 
        Array(4).fill(0).map((_, row) => (
          <mesh 
            key={`${col}-${row}`} 
            position={[(col-1)*1.4, (row-1.5)*0.5, 0.11]}
            castShadow
          >
            <boxGeometry args={[1.3, 0.45, 0.05]} />
            <meshStandardMaterial color="#a0a0a0" roughness={0.3} metalness={0.7} />
          </mesh>
        ))
      )}
      
      {/* Garage door tracks */}
      <mesh position={[-2.3, 0, -0.1]} castShadow>
        <boxGeometry args={[0.1, 2.1, 0.05]} />
        <meshStandardMaterial color="#555555" roughness={0.3} metalness={0.8} />
      </mesh>
      
      <mesh position={[2.3, 0, -0.1]} castShadow>
        <boxGeometry args={[0.1, 2.1, 0.05]} />
        <meshStandardMaterial color="#555555" roughness={0.3} metalness={0.8} />
      </mesh>
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
      {/* Top rail with metallic finish */}
      <mesh position={[0, 0.3, 0]}>
        <boxGeometry args={[width, 0.05, 0.05]} />
        <meshStandardMaterial color="#dddddd" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Bottom rail with metallic finish */}
      <mesh position={[0, 0.05, 0]}>
        <boxGeometry args={[width, 0.05, 0.05]} />
        <meshStandardMaterial color="#dddddd" metalness={0.7} roughness={0.3} />
      </mesh>
      
      {/* Vertical posts with metallic finish */}
      {Array(Math.ceil(width) * 4).fill(0).map((_, i) => (
        <mesh key={i} position={[-width/2 + 0.2 + i * width/(Math.ceil(width) * 4), 0.15, 0]}>
          <boxGeometry args={[0.02, 0.6, 0.02]} />
          <meshStandardMaterial color="#dddddd" metalness={0.7} roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
}

function RealisticBush({ position, scale = 1, variant = 0 }: { 
  position: [number, number, number], 
  scale?: number,
  variant?: number
}) {
  const bushColors = ["#3a7041", "#4c8652", "#2a5530"];
  const color = bushColors[variant % bushColors.length];
  
  return (
    <group position={position} scale={scale}>
      {/* Base of the bush */}
      <mesh castShadow>
        <sphereGeometry args={[0.8, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.7]} />
        <meshStandardMaterial color={color} roughness={0.9} />
      </mesh>
      
      {/* Additional foliage layers for realism */}
      <mesh position={[0.3, 0.3, 0]} castShadow>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial color={color} roughness={0.9} />
      </mesh>
      
      <mesh position={[-0.3, 0.2, 0.2]} castShadow>
        <sphereGeometry args={[0.6, 16, 16]} />
        <meshStandardMaterial color={color} roughness={0.9} />
      </mesh>
      
      <mesh position={[0, 0.4, -0.2]} castShadow>
        <sphereGeometry args={[0.55, 16, 16]} />
        <meshStandardMaterial color={color} roughness={0.9} />
      </mesh>
    </group>
  );
}
