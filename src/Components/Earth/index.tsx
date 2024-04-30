import { Canvas, ThreeElements, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import Earth from "./Earth";
import { Environment, OrbitControls } from "@react-three/drei";
import "./Earth.css";

const EarthBackground = () => {
  const earthRef = useRef<any>();
  return (
    <div id={"EarthBackground"}>
      <Canvas>
        <RotationFrame reference={earthRef} />
        <ambientLight intensity={-0.5} />
        <directionalLight intensity={-0.1} position={[5, 5, 5]} />
        <directionalLight intensity={0} position={[-5, -5, -5]} />
        <pointLight position={[0, 10, 0]} intensity={2} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping={false}
          enableRotate={false}
        />
        <mesh ref={earthRef}>
          <Suspense fallback={null}>
            <Earth />
          </Suspense>
          <Environment preset="sunset" />
        </mesh>
      </Canvas>
    </div>
  );
};

interface RotationFrameParam {
  reference: React.MutableRefObject<ThreeElements["mesh"] | undefined>;
}

const RotationFrame: React.FC<RotationFrameParam> = ({ reference }) => {
  useFrame(() => {
    if (reference.current) {
      if (reference.current.rotation) {
        //@ts-ignore
        reference.current.rotation.y += 0.0009;
      }
    }
  });
  return null;
};

export default EarthBackground;
