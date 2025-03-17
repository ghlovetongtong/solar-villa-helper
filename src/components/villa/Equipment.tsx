
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Group } from "three";

interface EquipmentProps {
  onHover: (info: string | null) => void;
}

export function Inverter({ onHover }: EquipmentProps) {
  const ref = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state, delta) => {
    if (ref.current && hovered) {
      ref.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group 
      ref={ref} 
      position={[2, 0, 2]} 
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
        <boxGeometry args={[0.5, 0.8, 0.3]} />
        <meshStandardMaterial color="#4A5568" />
      </mesh>
      {/* Control panel */}
      <mesh position={[0, 0.1, 0.16]}>
        <boxGeometry args={[0.3, 0.2, 0.01]} />
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
    </group>
  );
}

export function Meter({ onHover }: EquipmentProps) {
  const ref = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state, delta) => {
    if (ref.current && hovered) {
      ref.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group 
      ref={ref} 
      position={[-2, 0, 2]} 
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
        <meshStandardMaterial color="#2D3748" />
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
    </group>
  );
}

export function StorageSystem({ onHover }: EquipmentProps) {
  const ref = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state, delta) => {
    if (ref.current && hovered) {
      ref.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group 
      ref={ref} 
      position={[-2, 0, -2]} 
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
        <boxGeometry args={[0.8, 1.2, 0.5]} />
        <meshStandardMaterial color="#1A365D" />
      </mesh>
      {/* Battery indicator */}
      <mesh position={[0, 0, 0.26]}>
        <boxGeometry args={[0.4, 0.7, 0.01]} />
        <meshStandardMaterial color="#1a202c" />
      </mesh>
      {/* Power level */}
      <mesh position={[0, -0.15, 0.27]} scale={[0.35, 0.1, 0.01]}>
        <boxGeometry />
        <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={hovered ? 2 : 0.5} />
      </mesh>
      <mesh position={[0, -0.05, 0.27]} scale={[0.35, 0.1, 0.01]}>
        <boxGeometry />
        <meshStandardMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={hovered ? 2 : 0.5} />
      </mesh>
      <mesh position={[0, 0.05, 0.27]} scale={[0.35, 0.1, 0.01]}>
        <boxGeometry />
        <meshStandardMaterial color="#eab308" emissive="#eab308" emissiveIntensity={hovered ? 2 : 0.5} />
      </mesh>
      <mesh position={[0, 0.15, 0.27]} scale={[0.35, 0.1, 0.01]}>
        <boxGeometry />
        <meshStandardMaterial color="#94a3b8" emissive="#94a3b8" emissiveIntensity={hovered ? 1 : 0.2} />
      </mesh>
    </group>
  );
}

export function OffGridController({ onHover }: EquipmentProps) {
  const ref = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state, delta) => {
    if (ref.current && hovered) {
      ref.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group 
      ref={ref} 
      position={[2, 0, -2]} 
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
        <meshStandardMaterial color="#2B6CB0" />
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
    </group>
  );
}
