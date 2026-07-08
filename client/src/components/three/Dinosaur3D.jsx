import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  ContactShadows,
  Environment,
  Bounds,
  Center,
} from "@react-three/drei";

function Model({ modelPath }) {
  const { scene } = useGLTF(modelPath);

  return <primitive object={scene} />;
}

function Dinosaur3D({ modelPath = "/models/dinosaur.glb", interactive = true }) {
  return (
    <Canvas shadows camera={{ position: [3, 2, 5], fov: 40 }} dpr={[1, 2]}>
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[4, 6, 3]}
        intensity={1.3}
        castShadow
      />

      <Suspense fallback={null}>
        <Bounds fit clip observe margin={1.3}>
          <Center>
            <Model modelPath={modelPath} />
          </Center>
        </Bounds>

        <Environment preset="city" />
      </Suspense>

      <ContactShadows
        position={[0, -1.01, 0]}
        opacity={0.5}
        scale={8}
        blur={2}
      />

      {interactive && (
        <OrbitControls
          makeDefault
          target={[0, 0, 0]}
          enableZoom={true}
          enablePan={false}
          minDistance={1}
          maxDistance={20}
        />
      )}
    </Canvas>
  );
}

export default Dinosaur3D;