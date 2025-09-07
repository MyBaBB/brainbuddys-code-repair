/* eslint-disable react/no-unknown-property */
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import "./IDisplayComponent.css";
import Display from "./DisplayGLB";

function DisplayFunction() {
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.scale.set(0.14, 0.14, 0.14); // Adjust the scale values to zoom out
      meshRef.current.rotation.y =
        Math.sin(Date.now() * 0.0002) * 1.4 + Math.PI / 0.8;
      // Rotate left and right with 180-degree offset
    }
  });

  return (
    <mesh ref={meshRef}>
      <Display position={[0, 0, 0]} rotation={[0, 0, 0]} />
    </mesh>
  );
}
function Scene() {
  return (
    // find CanvasWrapper here border-2 border-varDARKBLUEFEATHER
    <>
      <div className="displayCanvasWrapper flex  border-2 border-red-500 ">
        <div
          className="canvasBgColor  relative   
         h-[300px] w-[300px] flex-row justify-center sm:h-[380px] sm:w-[380px]
         border-2 border-red-500  "
        >
          <Canvas camera={{ position: [5.1, 3, 5], fov: 50 }}>
            <OrbitControls enabled={false} enableZoom={false} />
            <Suspense fallback={null}>
              <ambientLight intensity={2.55} color="blue" />
              <directionalLight
                color={"skyblue"}
                intensity={10}
                position={[-10, 0, 5]}
              />
              <Environment preset="studio" />
              <DisplayFunction />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </>
  );
}
export default function App() {
  return <Scene />;
}

Environment.presets;
// city, park,  warehouse, apartment, forest,  sunset, night, dawn,   studio
