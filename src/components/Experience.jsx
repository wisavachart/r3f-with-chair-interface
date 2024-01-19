import {
  Float,
  Grid,
  MeshReflectorMaterial,
  PresentationControls,
  Stage,
} from "@react-three/drei";
import { Chair } from "./Chair";
import { Suspense } from "react";

const Experience = () => {
  return (
    <PresentationControls
      speed={1.5}
      global
      zoom={0.7}
      polar={[0.5, Math.PI / 4]}>
      <Stage
        adjustCamera={1}
        intensity={0.6}
        environment="city"
        shadows={false}>
        <Suspense fallback={null}>
          <group position={[0, 0, 0]}>
            <Chair />
          </group>
        </Suspense>
      </Stage>
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[170, 170]} />
        <MeshReflectorMaterial
          blur={[500, 500]}
          resolution={1080}
          mixBlur={1}
          mixStrength={40}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          metalness={0.5}
          color="#101010"
        />
      </mesh>
    </PresentationControls>
  );
};

export default Experience;
