import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import HumanBody from './components/HumanBody';
import Platform from './components/Platform';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Pharmacokinetics from './components/Pharmacokinetics';

function App() {
  return (
    <div className="w-full min-h-screen bg-black text-white scroll-smooth flex flex-col">
      <Header />
      
      <section className="relative w-full h-[calc(100vh-88px)] overflow-hidden">
        <Canvas className="w-full h-full">
          <PerspectiveCamera makeDefault position={[0, 4, 10]} />
          <ambientLight intensity={1.5} color="#88ffff" />
          <pointLight position={[0, 5, 5]} intensity={3.0} color="#1e90ff" />
          <pointLight position={[0, -5, -5]} intensity={2.0} color="#00ffff" />
          <directionalLight position={[5, 3, 5]} intensity={1.5} color="#ffffff" />
          <Suspense fallback={null}>
            <HumanBody />
            <group position={[0, -3.0, 0]}>
              <Platform />
            </group>
          </Suspense>
          <OrbitControls 
            enablePan={false}
            enableZoom={false}
            minDistance={3}
            maxDistance={15}
            maxPolarAngle={Math.PI / 2 + 0.1}
            autoRotate={true}
            autoRotateSpeed={0.8}
          />
        </Canvas>
      </section>

      <section className="w-full py-5 flex flex-col items-center justify-center border-t border-white/5">
        <div className="text-[#00ccff] text-[10px] tracking-[0.5em] uppercase mb-4 opacity-50">Advanced_Medical</div>
        <h2 className="text-4xl font-light tracking-tighter mb-8 text-center max-w-2xl px-8">
          Revolutionizing drug simulation through holographic digital twins.
        </h2>
        <div className="w-24 h-[1px] bg-[#00ccff]/30 animate-pulse"></div>
      </section>

      <Pharmacokinetics />

      <Footer />
    </div>
  );
}

export default App;
