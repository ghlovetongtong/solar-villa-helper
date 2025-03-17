import { useRef, useState } from "react";
import { Group } from "three";
import { Text } from "@react-three/drei";

export default function SolarPanels({ onHover }: { onHover: (info: string | null) => void }) {
  const group = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);
  
  // Generate random efficiency percentages for the panels
  const efficiencies = Array(200).fill(0).map(() => Math.floor(Math.random() * 20) + 75); // 75% to 95%

  return (
    <group
      ref={group}
      onPointerOver={() => {
        setHovered(true);
        onHover("Smart solar panels with real-time efficiency monitoring");
      }}
      onPointerOut={() => {
        setHovered(false);
        onHover(null);
      }}
    >
      {/* Only keeping the garage roof panels which have a white/light colored roof */}
      {/* Flat roof for garage with solar panels */}
      <group position={[5, 2.06, 1]} rotation={[0, 0, 0]}>
        {Array(10).fill(0).map((_, row) => 
          Array(10).fill(0).map((_, col) => {
            const panelIndex = row * 10 + col;
            const efficiency = efficiencies[panelIndex % efficiencies.length];
            
            return (
              <group key={`garage-${row}-${col}`} position={[(col - 4.5) * 0.58, 0.01, (row - 4.5) * 0.56]}>
                <mesh castShadow>
                  <boxGeometry args={[0.55, 0.01, 0.53]} />
                  <meshStandardMaterial 
                    color="#112233" 
                    metalness={0.8}
                    roughness={0.2}
                    emissive={hovered ? "#104060" : "#000033"}
                    emissiveIntensity={hovered ? 0.5 : 0.2}
                  />
                </mesh>
                
                {/* Efficiency text overlay */}
                <Text 
                  position={[0, 0.015, 0]}
                  rotation={[-Math.PI/2, 0, 0]}
                  fontSize={0.06}
                  color="#3CEFA3"
                  anchorX="center"
                  anchorY="middle"
                  characters="0123456789%"
                >
                  {`${efficiency}%`}
                </Text>
              </group>
            );
          })
        )}
      </group>
    </group>
  );
}
