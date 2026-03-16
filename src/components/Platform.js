import React from 'react';
import * as THREE from 'three';

function Platform() {
  const neonBlue = 0x00aaff;

  return (
    <group position={[0, -0.4, 0]}>

      <mesh position={[0, -0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.7, 5.0, 64]} />
        <meshBasicMaterial color={neonBlue} transparent opacity={0.1} side={THREE.DoubleSide} blending={THREE.AdditiveBlending} depthWrite={false} />
      </mesh>

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
