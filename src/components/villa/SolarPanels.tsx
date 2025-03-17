
import { useRef, useState } from "react";
import { Group } from "three";
import { Text } from "@react-three/drei";

export default function SolarPanels({ onHover }: { onHover: (info: string | null) => void }) {
  const group = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);
  
  // Generate random efficiency percentages for the panels
  const efficiencies = Array(100).fill(0).map(() => Math.floor(Math.random() * 20) + 75); // 75% to 95%

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
      {/* Left roof flat solar panels - positioned higher to be on top of the roof */}
      <group position={[-3, 3.35, 0]} rotation={[0, 0, 0]}>
        {Array(5).fill(0).map((_, row) => 
          Array(6).fill(0).map((_, col) => {
            const panelIndex = row * 6 + col;
            const efficiency = efficiencies[panelIndex];
            
            return (
              <group key={`left-${row}-${col}`} position={[(col - 2.5) * 0.95, 0, (row - 2) * 0.95]}>
                <mesh castShadow>
                  <boxGeometry args={[0.93, 0.06, 0.93]} />
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
      
      {/* Middle section solar panels - positioned higher to be on top of the roof */}
      <group position={[0, 4.35, 0]} rotation={[0, 0, 0]}>
        {Array(4).fill(0).map((_, row) => 
          Array(3).fill(0).map((_, col) => {
            const panelIndex = row * 3 + col + 30;
            const efficiency = efficiencies[panelIndex % efficiencies.length];
            
            return (
              <group key={`middle-${row}-${col}`} position={[(col - 1) * 0.95, 0, (row - 1.5) * 0.95]}>
                <mesh castShadow>
                  <boxGeometry args={[0.93, 0.06, 0.93]} />
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
      
      {/* Flat roof solar panels - on garage, positioned higher */}
      <group position={[5, 2.25, 1]} rotation={[0, 0, 0]}>
        {Array(4).fill(0).map((_, row) => 
          Array(5).fill(0).map((_, col) => {
            const panelIndex = row * 5 + col + 42;
            const efficiency = efficiencies[panelIndex % efficiencies.length];
            
            return (
              <group key={`flat-${row}-${col}`} position={[(col - 2) * 0.93, 0, (row - 1.5) * 0.93]}>
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
      
      {/* Front roof solar panels - adjusted to follow the roof slope and fully cover it */}
      <group position={[-3, 4.3, 3.7]} rotation={[-Math.PI/6, 0, 0]}>
        {Array(5).fill(0).map((_, row) => 
          Array(6).fill(0).map((_, col) => {
            const panelIndex = row * 6 + col + 62;
            const efficiency = efficiencies[panelIndex % efficiencies.length];
            
            return (
              <group key={`front-${row}-${col}`} position={[(col - 2.5) * 0.93, 0, (row - 2) * 0.93]}>
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
      
      {/* Back roof solar panels - adjusted to follow the roof slope and fully cover it */}
      <group position={[-3, 4.3, -3.7]} rotation={[Math.PI/6, 0, 0]}>
        {Array(5).fill(0).map((_, row) => 
          Array(6).fill(0).map((_, col) => {
            const panelIndex = row * 6 + col + 30;
            const efficiency = efficiencies[panelIndex % efficiencies.length];
            
            return (
              <group key={`back-${row}-${col}`} position={[(col - 2.5) * 0.93, 0, (row - 2) * 0.93]}>
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
      
      {/* Middle front roof solar panels - adjusted to fully cover the front slope */}
      <group position={[0, 5.3, 2.7]} rotation={[-Math.PI/6, 0, 0]}>
        {Array(4).fill(0).map((_, row) => 
          Array(3).fill(0).map((_, col) => {
            const panelIndex = row * 3 + col + 15;
            const efficiency = efficiencies[panelIndex % efficiencies.length];
            
            return (
              <group key={`middle-front-${row}-${col}`} position={[(col - 1) * 0.93, 0, (row - 1.5) * 0.93]}>
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
      
      {/* Middle back roof solar panels - adjusted to fully cover the back slope */}
      <group position={[0, 5.3, -2.7]} rotation={[Math.PI/6, 0, 0]}>
        {Array(4).fill(0).map((_, row) => 
          Array(3).fill(0).map((_, col) => {
            const panelIndex = row * 3 + col + 19;
            const efficiency = efficiencies[panelIndex % efficiencies.length];
            
            return (
              <group key={`middle-back-${row}-${col}`} position={[(col - 1) * 0.93, 0, (row - 1.5) * 0.93]}>
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
