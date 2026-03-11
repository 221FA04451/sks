import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const HologramShader = {
  uniforms: {
    c: { value: 0.1 },
    p: { value: 3.5 },
    glowColor: { value: new THREE.Color(0x33b8ff) },
    baseColor: { value: new THREE.Color(0x020815) }
  },
  vertexShader: `
    varying vec3 vNormal;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform vec3 glowColor;
    uniform vec3 baseColor;
    uniform float c;
    uniform float p;
    varying vec3 vNormal;
    void main() {
      float intensity = pow(c - dot(vNormal, vec3(0.0, 0.0, 1.0)), p);
      gl_FragColor = vec4(mix(baseColor, glowColor, intensity), intensity * 1.5 + 0.1);
    }
  `
};



function HumanBody() {
  const groupRef = useRef();
  
  // Load the humanoid GLTF model
  const { scene } = useGLTF('/models/Xbot.glb');
  
  const holographicGroup = useMemo(() => {
    const group = new THREE.Group();
    
    const shaderMaterial = new THREE.ShaderMaterial({
      uniforms: HologramShader.uniforms,
      vertexShader: HologramShader.vertexShader,
      fragmentShader: HologramShader.fragmentShader,
      transparent: true,
      opacity: 1.0, 
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.FrontSide
    });
    
    // Fine solid lines on the body
    const thinLineMaterial = new THREE.LineBasicMaterial({
      color: 0x44ccff,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    scene.traverse((child) => {
      if (child.isMesh && child.geometry) {
        const geom = child.geometry;
        
        // Solid rim-lit body shell
        const shell = new THREE.Mesh(geom, shaderMaterial);
        shell.position.copy(child.position);
        shell.rotation.copy(child.rotation);
        shell.scale.copy(child.scale);
        group.add(shell);
        
        // Fine edges (like veins/muscles in image 2)
        const edgesGeom = new THREE.EdgesGeometry(geom, 15);
        const lines = new THREE.LineSegments(edgesGeom, thinLineMaterial);
        lines.position.copy(child.position);
        lines.rotation.copy(child.rotation);
        lines.scale.copy(child.scale);
        group.add(lines);
      }
    });

    return group;
  }, [scene]);
  
  // Floating animation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = (Math.sin(state.clock.elapsedTime * 0.5) * 0.05) - 3.0; // Lowered baseline
    }
  });
  
  return (
    <group ref={groupRef} position={[0, -3.0, 0]} scale={3.0}> // Lowered initial position
      <primitive object={holographicGroup} />
    </group>
  );
}

useGLTF.preload('/models/Xbot.glb');
export default HumanBody;
