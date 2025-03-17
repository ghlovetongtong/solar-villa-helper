
import { useRef, useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, PerspectiveCamera, Html, Sky, Cloud, useHelper } from "@react-three/drei";
import Villa from "./villa/Villa";
import SolarPanels from "./villa/SolarPanels";
import { Inverter, Meter, StorageSystem, OffGridController } from "./villa/Equipment";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import { DirectionalLightHelper, HemisphereLightHelper } from "three";
import { cn } from "@/lib/utils";

export function SolarVillaScene() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showIntro, setShowIntro] = useState(true);
  const controlsRef = useRef<any>(null);
  const directionalLightRef = useRef<THREE.DirectionalLight>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="absolute top-0 left-0 right-0 z-10 p-4 sm:p-6">
        <div className="mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-between"
          >
            <div className="flex items-center mb-4 sm:mb-0">
              <Badge variant="outline" className="bg-white/80 backdrop-blur-sm font-medium px-3 py-1">
                Solar Villa Visualization
              </Badge>
            </div>
            
            <div className="flex space-x-4 items-center">
              <Badge className="bg-blue-500/80 hover:bg-blue-600/80 text-white backdrop-blur-sm transition-colors cursor-pointer">
                System Information
              </Badge>
              <Badge className="bg-white/80 hover:bg-white backdrop-blur-sm transition-colors cursor-pointer">
                Components
              </Badge>
            </div>
          </motion.div>
        </div>
      </div>
      
      {activeTooltip && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 bg-white/80 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg"
        >
          <p className="text-sm font-medium text-gray-900">{activeTooltip}</p>
        </motion.div>
      )}

      {isLoading && (
        <div className="loading-screen">
          <div className="w-12 h-12 rounded-full border-4 border-blue-200 border-t-blue-500 animate-spin mb-4"></div>
          <h3 className="text-xl font-medium text-gray-900 mb-2">Loading Solar Villa</h3>
          <p className="text-gray-500">Preparing 3D visualization...</p>
        </div>
      )}
      
      {showIntro && !isLoading && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 backdrop-blur-sm"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white/90 backdrop-blur-md rounded-lg max-w-lg p-6 mx-4"
          >
            <h2 className="text-2xl font-bold mb-3 text-gray-900">Interactive Solar Villa</h2>
            <p className="text-gray-700 mb-4">
              Explore our 3D model of a solar-powered villa. Hover over components to learn more. Click and drag to rotate, scroll to zoom.
            </p>
            <div className="flex justify-end">
              <button 
                onClick={() => setShowIntro(false)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Explore Now
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      <div className={cn(
        "scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 transition-opacity duration-300",
        showIntro || isLoading ? "opacity-0" : "opacity-80"
      )}>
        <span className="bg-black/40 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
          Click and drag to rotate • Scroll to zoom
        </span>
      </div>

      <Canvas className="scene-canvas" shadows>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[10, 5, 10]} fov={35} />
          <OrbitControls 
            ref={controlsRef}
            enablePan={false}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 2}
            minDistance={5}
            maxDistance={20}
          />
          
          <ambientLight intensity={0.5} />
          <hemisphereLight intensity={0.5} color="#b1e1ff" groundColor="#509e4f" />
          
          <directionalLight 
            ref={directionalLightRef}
            position={[10, 10, 5]} 
            intensity={1.5} 
            castShadow 
            shadow-mapSize={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          
          <Villa onHover={setActiveTooltip} />
          <SolarPanels onHover={setActiveTooltip} />
          <Inverter onHover={setActiveTooltip} />
          <Meter onHover={setActiveTooltip} />
          <StorageSystem onHover={setActiveTooltip} />
          <OffGridController onHover={setActiveTooltip} />
          
          <mesh 
            rotation={[-Math.PI / 2, 0, 0]} 
            position={[0, -1.05, 0]} 
            receiveShadow
          >
            <planeGeometry args={[40, 40]} />
            <meshStandardMaterial 
              color="#5a8d55" 
              roughness={0.9}
              metalness={0.1}
            />
          </mesh>
          
          <mesh 
            rotation={[-Math.PI / 2, 0, 0]} 
            position={[4, -1.03, 2]} 
            receiveShadow
          >
            <planeGeometry args={[6, 4]} />
            <meshStandardMaterial 
              color="#c8c8c9" 
              roughness={0.9}
              metalness={0.1}
            />
          </mesh>
          
          <mesh 
            rotation={[-Math.PI / 2, 0, 0]} 
            position={[-5, -1.02, -6]} 
            receiveShadow
          >
            <planeGeometry args={[4, 3]} />
            <meshStandardMaterial 
              color="#7ba36f" 
              roughness={0.8}
              metalness={0.1}
            />
          </mesh>
          
          <Sky distance={450000} sunPosition={[10, 8, 5]} inclination={0.5} azimuth={0.25} />
          
          <Cloud position={[-10, 15, -10]} args={[3, 2]} opacity={0.8} speed={0.4} />
          <Cloud position={[10, 10, -10]} args={[4, 2]} opacity={0.7} speed={0.2} />
          <Cloud position={[5, 12, 10]} args={[3.5, 1.8]} opacity={0.75} speed={0.3} />
          
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
}
