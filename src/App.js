import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import HumanBody from './components/HumanBody';
import LoadingScreen from './components/LoadingScreen';

function App() {
  return (
    <div className="w-full h-screen bg-black relative">
      <Canvas className="w-full h-full">
        <PerspectiveCamera makeDefault position={[0, 4, 10]} />
        
        {/* Brightened Lighting for clarity */}
        <ambientLight intensity={1.5} color="#88ffff" />
        <pointLight position={[0, 5, 5]} intensity={3.0} color="#1e90ff" />
        <pointLight position={[0, -5, -5]} intensity={2.0} color="#00ffff" />
        <directionalLight position={[5, 3, 5]} intensity={1.5} color="#ffffff" />
        
        {/* 3D Models */}
        <Suspense fallback={null}>
          <HumanBody />
        </Suspense>
        
        {/* Controls */}
        <OrbitControls 
          enablePan={false}
          minDistance={3}
          maxDistance={15}
          maxPolarAngle={Math.PI / 2 + 0.1}
          autoRotate={true}
          autoRotateSpeed={0.8}
        />
      </Canvas>
      
      <LoadingScreen />
    </div>
  );
}

export default App;
