
import { useRef, useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, PerspectiveCamera, Html } from "@react-three/drei";
import Villa from "./villa/Villa";
import SolarPanels from "./villa/SolarPanels";
import { Inverter, Meter, StorageSystem, OffGridController } from "./villa/Equipment";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

// Install framer-motion
import { cn } from "@/lib/utils";

export function SolarVillaScene() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showIntro, setShowIntro] = useState(true);
  const controlsRef = useRef<any>(null);

  // Simulate loading time (in a real app, this would be actual model loading)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // Hide intro after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Top header */}
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
      
      {/* Active tooltip */}
      {activeTooltip && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 info-tooltip"
        >
          <p className="text-sm font-medium text-gray-900">{activeTooltip}</p>
        </motion.div>
      )}

      {/* Loading screen */}
      {isLoading && (
        <div className="loading-screen">
          <div className="w-12 h-12 rounded-full border-4 border-blue-200 border-t-blue-500 animate-spin mb-4"></div>
          <h3 className="text-xl font-medium text-gray-900 mb-2">Loading Solar Villa</h3>
          <p className="text-gray-500">Preparing 3D visualization...</p>
        </div>
      )}
      
      {/* Intro overlay */}
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

      {/* Instructions */}
      <div className={cn(
        "scroll-indicator",
        showIntro || isLoading ? "opacity-0" : "opacity-80"
      )}>
        <span className="bg-black/40 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
          Click and drag to rotate • Scroll to zoom
        </span>
      </div>

      {/* 3D Canvas */}
      <Canvas className="scene-canvas">
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[8, 5, 8]} fov={40} />
          <OrbitControls 
            ref={controlsRef}
            enablePan={false}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 2}
            minDistance={5}
            maxDistance={15}
          />
          
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
          
          {/* Villa and all components */}
          <Villa onHover={setActiveTooltip} />
          <SolarPanels onHover={setActiveTooltip} />
          <Inverter onHover={setActiveTooltip} />
          <Meter onHover={setActiveTooltip} />
          <StorageSystem onHover={setActiveTooltip} />
          <OffGridController onHover={setActiveTooltip} />
          
          {/* Ground plane */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.05, 0]} receiveShadow>
            <planeGeometry args={[30, 30]} />
            <meshStandardMaterial color="#8da9a6" />
          </mesh>
          
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
}
