
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Group } from "three";
import { Text } from "@react-three/drei";

export default function SolarPanels({ onHover }: { onHover: (info: string | null) => void }) {
  const group = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);
  
  // Generate random efficiency percentages for the panels
  const efficiencies = [75, 80, 82, 85, 90, 92, 88, 85, 80, 78, 90, 82];

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
      {/* Left roof solar panels - flat on the roof */}
      <group position={[-3, 3.2, 0]}>
        {Array(3).fill(0).map((_, row) => 
          Array(4).fill(0).map((_, col) => {
            const panelIndex = row * 4 + col;
            const efficiency = efficiencies[panelIndex];
            
            return (
              <group key={`left-${row}-${col}`} position={[(col - 1.5) * 1.25, 0, (row - 1) * 1.25]}>
                <mesh castShadow>
                  <boxGeometry args={[1.2, 0.06, 1.2]} />
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
                  position={[0, 0.04, 0]}
                  rotation={[-Math.PI/2, 0, 0]}
                  fontSize={0.15}
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
      
      {/* Middle section solar panels - flat on the roof */}
      <group position={[0, 4.2, 0]}>
        {Array(2).fill(0).map((_, row) => 
          Array(2).fill(0).map((_, col) => {
            const panelIndex = row * 2 + col + 6;
            const efficiency = efficiencies[panelIndex];
            
            return (
              <group key={`middle-${row}-${col}`} position={[(col - 0.5) * 1.25, 0, (row - 0.5) * 1.25]}>
                <mesh castShadow>
                  <boxGeometry args={[1.2, 0.06, 1.2]} />
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
                  position={[0, 0.04, 0]}
                  rotation={[-Math.PI/2, 0, 0]}
                  fontSize={0.15}
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
      
      {/* Flat roof solar panels - on garage */}
      <group position={[5, 2.11, 1]}>
        {Array(2).fill(0).map((_, row) => 
          Array(2).fill(0).map((_, col) => {
            const panelIndex = row * 2 + col + 10;
            const efficiency = efficiencies[panelIndex % efficiencies.length];
            
            return (
              <group key={`flat-${row}-${col}`} position={[(col - 0.5) * 1.25, 0, (row - 0.5) * 1.25]}>
                <mesh castShadow>
                  <boxGeometry args={[1.2, 0.05, 1.2]} />
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
                  position={[0, 0.03, 0]}
                  rotation={[-Math.PI/2, 0, 0]}
                  fontSize={0.15}
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
