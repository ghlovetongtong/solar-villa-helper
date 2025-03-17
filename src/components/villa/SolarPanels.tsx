
import { useRef, useState } from "react";
import { Group } from "three";
import { Text } from "@react-three/drei";

export default function SolarPanels({ onHover }: { onHover: (info: string | null) => void }) {
  const group = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);
  
  // Generate random efficiency percentages for the panels
  const efficiencies = Array(300).fill(0).map(() => Math.floor(Math.random() * 20) + 75); // 75% to 95%

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
      {/* Main building - Left part - Front sloped roof panels */}
      <group position={[-3, 4.31, 3.7]} rotation={[-Math.PI/6, 0, 0]}>
        {Array(10).fill(0).map((_, row) => 
          Array(10).fill(0).map((_, col) => {
            const panelIndex = row * 10 + col;
            const efficiency = efficiencies[panelIndex];
            
            return (
              <group key={`front-${row}-${col}`} position={[(col - 4.5) * 0.82, 0.02, (row - 4.5) * 0.8]}>
                <mesh castShadow>
                  <boxGeometry args={[0.8, 0.02, 0.78]} />
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
                  position={[0, 0.02, 0]}
                  rotation={[-Math.PI/2, 0, 0]}
                  fontSize={0.08}
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
      
      {/* Main building - Left part - Back sloped roof panels */}
      <group position={[-3, 4.31, -3.7]} rotation={[Math.PI/6, 0, 0]}>
        {Array(10).fill(0).map((_, row) => 
          Array(10).fill(0).map((_, col) => {
            const panelIndex = 100 + row * 10 + col;
            const efficiency = efficiencies[panelIndex % efficiencies.length];
            
            return (
              <group key={`back-${row}-${col}`} position={[(col - 4.5) * 0.82, 0.02, (row - 4.5) * 0.8]}>
                <mesh castShadow>
                  <boxGeometry args={[0.8, 0.02, 0.78]} />
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
                  position={[0, 0.02, 0]}
                  rotation={[-Math.PI/2, 0, 0]}
                  fontSize={0.08}
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
      
      {/* Middle section - Front sloped roof panels */}
      <group position={[0, 5.31, 2.7]} rotation={[-Math.PI/6, 0, 0]}>
        {Array(8).fill(0).map((_, row) => 
          Array(5).fill(0).map((_, col) => {
            const panelIndex = 200 + row * 5 + col;
            const efficiency = efficiencies[panelIndex % efficiencies.length];
            
            return (
              <group key={`middle-front-${row}-${col}`} position={[(col - 2) * 0.82, 0.02, (row - 3.5) * 0.8]}>
                <mesh castShadow>
                  <boxGeometry args={[0.8, 0.02, 0.78]} />
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
                  position={[0, 0.02, 0]}
                  rotation={[-Math.PI/2, 0, 0]}
                  fontSize={0.08}
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
      
      {/* Middle section - Back sloped roof panels */}
      <group position={[0, 5.31, -2.7]} rotation={[Math.PI/6, 0, 0]}>
        {Array(8).fill(0).map((_, row) => 
          Array(5).fill(0).map((_, col) => {
            const panelIndex = 240 + row * 5 + col;
            const efficiency = efficiencies[panelIndex % efficiencies.length];
            
            return (
              <group key={`middle-back-${row}-${col}`} position={[(col - 2) * 0.82, 0.02, (row - 3.5) * 0.8]}>
                <mesh castShadow>
                  <boxGeometry args={[0.8, 0.02, 0.78]} />
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
                  position={[0, 0.02, 0]}
                  rotation={[-Math.PI/2, 0, 0]}
                  fontSize={0.08}
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
      
      {/* Flat roof for garage with solar panels */}
      <group position={[5, 2.06, 1]} rotation={[0, 0, 0]}>
        {Array(7).fill(0).map((_, row) => 
          Array(8).fill(0).map((_, col) => {
            const panelIndex = 280 + row * 8 + col;
            const efficiency = efficiencies[panelIndex % efficiencies.length];
            
            return (
              <group key={`garage-${row}-${col}`} position={[(col - 3.5) * 0.8, 0.015, (row - 3) * 0.78]}>
                <mesh castShadow>
                  <boxGeometry args={[0.78, 0.02, 0.76]} />
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
                  fontSize={0.08}
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
