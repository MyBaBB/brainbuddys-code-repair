/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import { useMediaQuery } from "@react-hook/media-query";
import ShipBottle from "./ShipBottle.glb";

export default function Model(props) {
  const { nodes, materials } = useGLTF(ShipBottle);
  const isXsScreen = useMediaQuery("(max-width: 480px)");
  const modelScale = isXsScreen ? [0.05, 0.05, 0.05] : [0.057, 0.057, 0.057];

  return (
    <group
      {...props}
      dispose={null}
      position={[-0.4, 2.5, 0]}
      scale={modelScale}
      rotation={[-Math.PI / 2, 0, 0]}
    >
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group
          position={[0.034, -156.6, -140.327]}
          rotation={[-Math.PI / 2, 0, 0]}
        ></group>
        <group
          position={[0.034, -156.6, -140.327]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <group position={[-0.034, -140.327, 156.6]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object005_id_2_Object005_id_2_0.geometry}
              material={materials.Object005_id_2}
              position={[-3.044, -41.375, -27.975]}
            />
          </group>
        </group>
        <group
          position={[0.034, -156.6, -140.327]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <group position={[-0.034, -140.327, 156.6]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object005_id_3_Object005_id_3_0.geometry}
              material={materials.Object005_id_3}
              position={[-3.044, -41.375, -27.975]}
            />
          </group>
        </group>
        <group
          position={[0.034, -156.6, -140.327]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          {/* sail */}
          <group position={[-0.034, -140.327, 156.6]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object005_id_4_Object005_id_4_0.geometry}
              material={materials.Object005_id_4}
              position={[-3.044, -41.375, -27.975]}
            />
          </group>
        </group>
        <group
          position={[0.034, -156.6, -140.327]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          {/* Water */}
          <group position={[-0.034, -140.327, 156.6]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object005_id_5_Object005_id_5_0.geometry}
              material={materials.Object005_id_5}
              position={[-3.044, -41.375, -27.975]}
            />
          </group>
        </group>
        <group
          position={[0.034, -156.6, -140.327]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          {/* bottle */}
          <group position={[-0.034, -140.327, 156.6]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object005_id_6_Object005_id_6_0.geometry}
              material={materials.Object005_id_6}
              position={[-3.044, -41.375, -27.975]}
            />
          </group>
        </group>

        {/* wood */}
        <group
          position={[0.034, -156.6, -140.327]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <group position={[-0.034, -140.327, 156.6]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object005_id_7_Object005_id_7_0.geometry}
              material={materials.Object005_id_7}
              position={[-3.044, -41.375, -27.975]}
            />
          </group>
        </group>

        <group
          position={[0.034, -156.6, -140.327]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <group position={[-0.034, -140.327, 156.6]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object005_id_8_Object005_id_8_0.geometry}
              material={materials.Object005_id_8}
              position={[-3.044, -41.375, -27.975]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./ShipBottle.glb");
