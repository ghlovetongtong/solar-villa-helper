
import { useState } from "react";
import { Group } from "three";
import { Text } from "@react-three/drei";

interface EquipmentProps {
  onHover: (info: string | null) => void;
}

export function Inverter({ onHover }: EquipmentProps) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <group 
      position={[2.5, 0.5, 4.05]} // Positioned against the front wall
      rotation={[0, Math.PI, 0]} // Rotated to face outward from the wall
      scale={hovered ? 1.05 : 1}
      onPointerOver={() => {
        setHovered(true);
        onHover("Inverter: Converts DC power from solar panels to AC power for home use");
      }}
      onPointerOut={() => {
        setHovered(false);
        onHover(null);
      }}
    >
      <mesh>
        <boxGeometry args={[0.6, 0.8, 0.3]} />
        <meshStandardMaterial color="#f5f5f5" roughness={0.2} metalness={0.8} />
      </mesh>
      {/* Control panel */}
      <mesh position={[0, 0.1, 0.16]}>
        <boxGeometry args={[0.4, 0.3, 0.01]} />
        <meshStandardMaterial color="#202020" />
      </mesh>
      {/* Indicator lights */}
      <mesh position={[0, 0.25, 0.16]} scale={[0.05, 0.05, 0.05]}>
        <sphereGeometry />
        <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={hovered ? 2 : 0.5} />
      </mesh>
      <mesh position={[0.1, 0.25, 0.16]} scale={[0.05, 0.05, 0.05]}>
        <sphereGeometry />
        <meshStandardMaterial color="#eab308" emissive="#eab308" emissiveIntensity={hovered ? 2 : 0.5} />
      </mesh>
      
      {/* Power line */}
      <mesh position={[0, -0.5, 0.1]} rotation={[Math.PI/2, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 1, 8]} />
        <meshStandardMaterial color="#444444" />
      </mesh>
    </group>
  );
}

export function Meter({ onHover }: EquipmentProps) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <group 
      position={[0, 0.8, 4.05]} // Positioned on the front wall, to the right of the door
      rotation={[0, Math.PI, 0]} // Rotated to face outward from the wall
      scale={hovered ? 1.05 : 1}
      onPointerOver={() => {
        setHovered(true);
        onHover("Smart Meter: Monitors power consumption and solar energy production");
      }}
      onPointerOut={() => {
        setHovered(false);
        onHover(null);
      }}
    >
      <mesh>
        <boxGeometry args={[0.4, 0.6, 0.2]} />
        <meshStandardMaterial color="#f5f5f5" roughness={0.2} metalness={0.8} />
      </mesh>
      {/* Display screen */}
      <mesh position={[0, 0, 0.11]}>
        <boxGeometry args={[0.25, 0.25, 0.01]} />
        <meshStandardMaterial color="#0c4a6e" emissive="#0c4a6e" emissiveIntensity={hovered ? 0.5 : 0.2} />
      </mesh>
      {/* Indicator light */}
      <mesh position={[0, 0.2, 0.11]} scale={[0.04, 0.04, 0.04]}>
        <sphereGeometry />
        <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={hovered ? 2 : 0.5} />
      </mesh>
      
      <Text 
        position={[0, 0, 0.12]}
        fontSize={0.05}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {hovered ? "8.5 kWh" : "SOLAR"}
      </Text>
    </group>
  );
}

export function StorageSystem({ onHover }: EquipmentProps) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <group 
      position={[-7.05, 0.8, 0]} // Positioned against the left wall
      rotation={[0, Math.PI/2, 0]} // Rotated to face outward from the wall
      scale={hovered ? 1.05 : 1}
      onPointerOver={() => {
        setHovered(true);
        onHover("Energy Storage System: Stores excess solar power for use when the sun isn't shining");
      }}
      onPointerOut={() => {
        setHovered(false);
        onHover(null);
      }}
    >
      <mesh>
        <boxGeometry args={[0.8, 1.2, 0.3]} />
        <meshStandardMaterial color="#f5f5f5" roughness={0.2} metalness={0.8} />
      </mesh>
      {/* Battery indicator */}
      <mesh position={[0, 0, 0.16]}>
        <boxGeometry args={[0.5, 0.8, 0.01]} />
        <meshStandardMaterial color="#1a202c" />
      </mesh>
      {/* Power level */}
      <mesh position={[0, -0.25, 0.17]} scale={[0.35, 0.1, 0.01]}>
        <boxGeometry />
        <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={hovered ? 2 : 0.5} />
      </mesh>
      <mesh position={[0, -0.1, 0.17]} scale={[0.35, 0.1, 0.01]}>
        <boxGeometry />
        <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={hovered ? 2 : 0.5} />
      </mesh>
      <mesh position={[0, 0.05, 0.17]} scale={[0.35, 0.1, 0.01]}>
        <boxGeometry />
        <meshStandardMaterial color="#eab308" emissive="#eab308" emissiveIntensity={hovered ? 2 : 0.5} />
      </mesh>
      <mesh position={[0, 0.2, 0.17]} scale={[0.35, 0.1, 0.01]}>
        <boxGeometry />
        <meshStandardMaterial color="#94a3b8" emissive="#94a3b8" emissiveIntensity={hovered ? 1 : 0.2} />
      </mesh>
      
      <Text 
        position={[0, 0.4, 0.16]}
        fontSize={0.08}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {hovered ? "76%" : "BATTERY"}
      </Text>
    </group>
  );
}

export function OffGridController({ onHover }: EquipmentProps) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <group 
      position={[-7.05, 0.5, 2.5]} // Positioned against the left wall, further back
      rotation={[0, Math.PI/2, 0]} // Rotated to face outward from the wall
      scale={hovered ? 1.05 : 1}
      onPointerOver={() => {
        setHovered(true);
        onHover("Off-Grid Controller: Manages power flow between solar panels, storage, and home appliances");
      }}
      onPointerOut={() => {
        setHovered(false);
        onHover(null);
      }}
    >
      <mesh>
        <boxGeometry args={[0.6, 0.8, 0.3]} />
        <meshStandardMaterial color="#f5f5f5" roughness={0.2} metalness={0.8} />
      </mesh>
      {/* Digital display */}
      <mesh position={[0, 0.1, 0.16]}>
        <boxGeometry args={[0.4, 0.3, 0.01]} />
        <meshStandardMaterial color="#0c4a6e" emissive="#0c4a6e" emissiveIntensity={hovered ? 0.5 : 0.2} />
      </mesh>
      {/* Control buttons */}
      {[-0.15, 0, 0.15].map((x, i) => (
        <mesh key={i} position={[x, -0.2, 0.16]} scale={[0.08, 0.08, 0.02]}>
          <cylinderGeometry args={[1, 1, 1, 16]} />
          <meshStandardMaterial color={["#b91c1c", "#0369a1", "#15803d"][i]} />
        </mesh>
      ))}
      
      <Text 
        position={[0, 0.1, 0.17]}
        fontSize={0.06}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {hovered ? "AUTO MODE" : "CONTROLLER"}
      </Text>
      
      {/* Connecting wires with glowing effect */}
      <mesh position={[0.3, -0.5, 0.1]} rotation={[Math.PI/2, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.6, 8]} />
        <meshStandardMaterial color="#3CFF00" emissive="#3CFF00" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}
