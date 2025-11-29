'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';

// Explicitly typing props for the Points component wrapper to avoid type errors
function Stars(props: any) {
  const ref = useRef<any>();
  const [sphere, setSphere] = useState<Float32Array | null>(null);

  useEffect(() => {
     // Generate random points manually to avoid NaN issues from external libs
     const count = 2000;
     const positions = new Float32Array(count * 3);
     for(let i = 0; i < count; i++) {
       const r = 1.5 * Math.cbrt(Math.random());
       const theta = Math.random() * 2 * Math.PI;
       const phi = Math.acos(2 * Math.random() - 1);
       
       const x = r * Math.sin(phi) * Math.cos(theta);
       const y = r * Math.sin(phi) * Math.sin(theta);
       const z = r * Math.cos(phi);

       positions[i * 3] = x;
       positions[i * 3 + 1] = y;
       positions[i * 3 + 2] = z;
     }
     setSphere(positions);
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  if (!sphere) return null;

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#00f3ff"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export const ParticleCanvas = () => {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};
