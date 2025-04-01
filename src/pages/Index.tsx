
import { SolarVillaScene } from "@/components/SolarVillaScene";
import { Suspense } from "react";

const Index = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Suspense fallback={<LoadingPlaceholder />}>
        <SolarVillaScene />
      </Suspense>
    </div>
  );
};

const LoadingPlaceholder = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full border-4 border-blue-200 border-t-blue-500 animate-spin mb-4"></div>
        <h3 className="text-xl font-medium text-gray-900 mb-2">加载中...</h3>
        <p className="text-gray-500">正在准备3D可视化...</p>
      </div>
    </div>
  );
};

export default Index;
