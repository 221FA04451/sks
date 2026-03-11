import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Platform() {
  const outerRingRef = useRef();
  
  const neonBlue = 0x00aaff;
  const darkCore = 0x020815;

  useFrame((state) => {
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });
  
  return (
    <group position={[0, -0.4, 0]}>
      {/* Thick Base Tier */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[2.5, 2.7, 0.3, 64]} />
        <meshStandardMaterial color={0x020510} roughness={0.5} metalness={0.8} />
      </mesh>
      
      {/* Base Glowing Edge */}
      <mesh position={[0, 0.155, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.45, 2.5, 64]} />
        <meshBasicMaterial color={neonBlue} transparent opacity={0.6} side={THREE.DoubleSide} blending={THREE.AdditiveBlending} />
      </mesh>

      {/* Middle Tier */}
      <mesh position={[0, 0.25, 0]}>
        <cylinderGeometry args={[2.0, 2.2, 0.2, 64]} />
        <meshStandardMaterial color={darkCore} roughness={0.4} metalness={0.7} />
      </mesh>
      
      {/* Middle Glowing Edge */}
      <mesh position={[0, 0.355, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.9, 2.0, 64]} />
        <meshBasicMaterial color={neonBlue} transparent opacity={0.8} side={THREE.DoubleSide} blending={THREE.AdditiveBlending} />
      </mesh>
      
      {/* Top Core Platform Surface */}
      <mesh position={[0, 0.36, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.9, 64]} />
        <meshBasicMaterial color={neonBlue} transparent opacity={0.15} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>

      {/* Rotating Outer Ring Elements */}
      <group position={[0, 0.1, 0]} ref={outerRingRef}>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[3.0, 3.1, 64, 1, 0, Math.PI * 1.5]} />
          <meshBasicMaterial color={0x00ccff} transparent opacity={0.8} side={THREE.DoubleSide} blending={THREE.AdditiveBlending} depthWrite={false} />
        </mesh>
        
        {/* Ring Nodes */}
        {[0, 1, 2].map((i) => (
          <mesh 
            key={i} 
            position={[Math.cos(i * Math.PI*2/3) * 3.05, 0, Math.sin(i * Math.PI*2/3) * 3.05]}
            rotation={[0, -i * Math.PI*2/3, 0]}
          >
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshBasicMaterial color={0xffffff} transparent opacity={0.9} blending={THREE.AdditiveBlending} depthWrite={false} />
          </mesh>
        ))}
      </group>

      {/* Ambient Platform Underglow */}
      <mesh position={[0, -0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.7, 5.0, 64]} />
        <meshBasicMaterial color={neonBlue} transparent opacity={0.1} side={THREE.DoubleSide} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>

      {/* Upward Teleport Beam Cylinder */}
      <mesh position={[0, 2.5, 0]}>
        <cylinderGeometry args={[2.0, 2.0, 5, 64, 1, true]} />
        <meshBasicMaterial
          color={neonBlue}
          transparent={true}
          opacity={0.05}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      
      {/* Upward Light Lines */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh key={i} position={[Math.cos((i * Math.PI)/4) * 1.95, 2.5, Math.sin((i * Math.PI)/4) * 1.95]}>
          <cylinderGeometry args={[0.01, 0.03, 5, 8]} />
          <meshBasicMaterial color={0x88ccff} transparent opacity={0.2} blending={THREE.AdditiveBlending} depthWrite={false} />
        </mesh>
      ))}
    </group>
  );
}

export default Platform;
