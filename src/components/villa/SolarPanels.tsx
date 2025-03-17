
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
      {/* Left roof flat solar panels - properly aligned with roof surface */}
      <group position={[-3, 3.05, 0]} rotation={[0, 0, 0]}>
        {Array(8).fill(0).map((_, row) => 
          Array(8).fill(0).map((_, col) => {
            const panelIndex = row * 8 + col;
            const efficiency = efficiencies[panelIndex];
            
            return (
              <group key={`left-${row}-${col}`} position={[(col - 3.5) * 0.85, 0, (row - 3.5) * 0.85]}>
                <mesh castShadow>
                  <boxGeometry args={[0.83, 0.03, 0.83]} />
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
                  fontSize={0.1}
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
      
      {/* Middle section solar panels - properly aligned with roof surface */}
      <group position={[0, 4.05, 0]} rotation={[0, 0, 0]}>
        {Array(6).fill(0).map((_, row) => 
          Array(4).fill(0).map((_, col) => {
            const panelIndex = row * 4 + col + 64;
            const efficiency = efficiencies[panelIndex % efficiencies.length];
            
            return (
              <group key={`middle-${row}-${col}`} position={[(col - 1.5) * 0.85, 0, (row - 2.5) * 0.85]}>
                <mesh castShadow>
                  <boxGeometry args={[0.83, 0.03, 0.83]} />
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
                  fontSize={0.1}
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
      
      {/* Flat roof solar panels - on garage, properly aligned */}
      <group position={[5, 2.1, 1]} rotation={[0, 0, 0]}>
        {Array(6).fill(0).map((_, row) => 
          Array(7).fill(0).map((_, col) => {
            const panelIndex = row * 7 + col + 88;
            const efficiency = efficiencies[panelIndex % efficiencies.length];
            
            return (
              <group key={`flat-${row}-${col}`} position={[(col - 3) * 0.85, 0, (row - 2.5) * 0.85]}>
                <mesh castShadow>
                  <boxGeometry args={[0.83, 0.03, 0.83]} />
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
                  fontSize={0.1}
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
      
      {/* Front roof solar panels - adjusted to follow the roof slope and fully cover it */}
      <group position={[-3, 4.31, 3.7]} rotation={[-Math.PI/6, 0, 0]}>
        {Array(8).fill(0).map((_, row) => 
          Array(8).fill(0).map((_, col) => {
            const panelIndex = row * 8 + col + 130;
            const efficiency = efficiencies[panelIndex % efficiencies.length];
            
            return (
              <group key={`front-${row}-${col}`} position={[(col - 3.5) * 0.85, 0, (row - 3.5) * 0.85]}>
                <mesh castShadow>
                  <boxGeometry args={[0.83, 0.03, 0.83]} />
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
                  fontSize={0.1}
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
      
      {/* Back roof solar panels - adjusted to follow the roof slope and fully cover it */}
      <group position={[-3, 4.31, -3.7]} rotation={[Math.PI/6, 0, 0]}>
        {Array(8).fill(0).map((_, row) => 
          Array(8).fill(0).map((_, col) => {
            const panelIndex = row * 8 + col + 30;
            const efficiency = efficiencies[panelIndex % efficiencies.length];
            
            return (
              <group key={`back-${row}-${col}`} position={[(col - 3.5) * 0.85, 0, (row - 3.5) * 0.85]}>
                <mesh castShadow>
                  <boxGeometry args={[0.83, 0.03, 0.83]} />
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
                  fontSize={0.1}
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
      
      {/* Middle front roof solar panels - adjusted to fully cover the front slope */}
      <group position={[0, 5.31, 2.7]} rotation={[-Math.PI/6, 0, 0]}>
        {Array(6).fill(0).map((_, row) => 
          Array(4).fill(0).map((_, col) => {
            const panelIndex = row * 4 + col + 15;
            const efficiency = efficiencies[panelIndex % efficiencies.length];
            
            return (
              <group key={`middle-front-${row}-${col}`} position={[(col - 1.5) * 0.85, 0, (row - 2.5) * 0.85]}>
                <mesh castShadow>
                  <boxGeometry args={[0.83, 0.03, 0.83]} />
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
                  fontSize={0.1}
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
      
      {/* Middle back roof solar panels - adjusted to fully cover the back slope */}
      <group position={[0, 5.31, -2.7]} rotation={[Math.PI/6, 0, 0]}>
        {Array(6).fill(0).map((_, row) => 
          Array(4).fill(0).map((_, col) => {
            const panelIndex = row * 4 + col + 19;
            const efficiency = efficiencies[panelIndex % efficiencies.length];
            
            return (
              <group key={`middle-back-${row}-${col}`} position={[(col - 1.5) * 0.85, 0, (row - 2.5) * 0.85]}>
                <mesh castShadow>
                  <boxGeometry args={[0.83, 0.03, 0.83]} />
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
                  fontSize={0.1}
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
