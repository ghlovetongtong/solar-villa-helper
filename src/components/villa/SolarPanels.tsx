
import { useRef, useState } from "react";
import { Group } from "three";
import { Text } from "@react-three/drei";

export default function SolarPanels({ onHover }: { onHover: (info: string | null) => void }) {
  const group = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);
  
  // Generate random efficiency percentages for the panels
  const efficiencies = Array(30).fill(0).map(() => Math.floor(Math.random() * 20) + 75); // 75% to 95%

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
      <group position={[-3, 3.25, 0]} rotation={[0, 0, 0]}>
        {Array(4).fill(0).map((_, row) => 
          Array(5).fill(0).map((_, col) => {
            const panelIndex = row * 5 + col;
            const efficiency = efficiencies[panelIndex];
            
            return (
              <group key={`left-${row}-${col}`} position={[(col - 2) * 1.0, 0, (row - 1.5) * 1.0]}>
                <mesh castShadow>
                  <boxGeometry args={[0.95, 0.06, 0.95]} />
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
                  fontSize={0.12}
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
      <group position={[0, 4.25, 0]} rotation={[0, 0, 0]}>
        {Array(3).fill(0).map((_, row) => 
          Array(2).fill(0).map((_, col) => {
            const panelIndex = row * 2 + col + 20;
            const efficiency = efficiencies[panelIndex % efficiencies.length];
            
            return (
              <group key={`middle-${row}-${col}`} position={[(col - 0.5) * 0.95, 0, (row - 1) * 0.95]}>
                <mesh castShadow>
                  <boxGeometry args={[0.9, 0.06, 0.9]} />
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
                  fontSize={0.12}
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
      <group position={[5, 2.15, 1]} rotation={[0, 0, 0]}>
        {Array(3).fill(0).map((_, row) => 
          Array(4).fill(0).map((_, col) => {
            const panelIndex = row * 4 + col + 10;
            const efficiency = efficiencies[panelIndex % efficiencies.length];
            
            return (
              <group key={`flat-${row}-${col}`} position={[(col - 1.5) * 0.95, 0, (row - 1) * 0.95]}>
                <mesh castShadow>
                  <boxGeometry args={[0.9, 0.05, 0.9]} />
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
                  fontSize={0.12}
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
      
      {/* Front roof slope solar panels */}
      <group position={[-3, 4.25, 3.7]} rotation={[-Math.PI/6, 0, 0]}>
        {Array(3).fill(0).map((_, row) => 
          Array(5).fill(0).map((_, col) => {
            const panelIndex = row * 5 + col + 1;
            const efficiency = efficiencies[panelIndex % efficiencies.length];
            
            return (
              <group key={`front-${row}-${col}`} position={[(col - 2) * 0.95, 0, (row - 1) * 0.95]}>
                <mesh castShadow>
                  <boxGeometry args={[0.9, 0.06, 0.9]} />
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
                  fontSize={0.12}
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
      
      {/* Back roof slope solar panels */}
      <group position={[-3, 4.25, -3.7]} rotation={[Math.PI/6, 0, 0]}>
        {Array(3).fill(0).map((_, row) => 
          Array(5).fill(0).map((_, col) => {
            const panelIndex = row * 5 + col + 5;
            const efficiency = efficiencies[panelIndex % efficiencies.length];
            
            return (
              <group key={`back-${row}-${col}`} position={[(col - 2) * 0.95, 0, (row - 1) * 0.95]}>
                <mesh castShadow>
                  <boxGeometry args={[0.9, 0.06, 0.9]} />
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
                  fontSize={0.12}
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
      
      {/* Middle front roof slope solar panels */}
      <group position={[0, 5.25, 2.7]} rotation={[-Math.PI/6, 0, 0]}>
        {Array(2).fill(0).map((_, row) => 
          Array(2).fill(0).map((_, col) => {
            const panelIndex = row * 2 + col + 15;
            const efficiency = efficiencies[panelIndex % efficiencies.length];
            
            return (
              <group key={`middle-front-${row}-${col}`} position={[(col - 0.5) * 0.95, 0, (row - 0.5) * 0.95]}>
                <mesh castShadow>
                  <boxGeometry args={[0.9, 0.06, 0.9]} />
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
                  fontSize={0.12}
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
      
      {/* Middle back roof slope solar panels */}
      <group position={[0, 5.25, -2.7]} rotation={[Math.PI/6, 0, 0]}>
        {Array(2).fill(0).map((_, row) => 
          Array(2).fill(0).map((_, col) => {
            const panelIndex = row * 2 + col + 19;
            const efficiency = efficiencies[panelIndex % efficiencies.length];
            
            return (
              <group key={`middle-back-${row}-${col}`} position={[(col - 0.5) * 0.95, 0, (row - 0.5) * 0.95]}>
                <mesh castShadow>
                  <boxGeometry args={[0.9, 0.06, 0.9]} />
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
                  fontSize={0.12}
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
