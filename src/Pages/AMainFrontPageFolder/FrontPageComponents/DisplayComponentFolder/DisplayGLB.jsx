/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import { useMediaQuery } from "@react-hook/media-query";
import ShipBottle from "./ShipBottle.glb";

export default function Model(props) {
  const { nodes, materials } = useGLTF(ShipBottle);
  const isXsScreen = useMediaQuery("(max-width: 480px)");
  const modelScale = isXsScreen ? [4.8, 4.8, 4.8] : [5, 5, 5];

   return (
    
    <group {...props} dispose={null}
    scale={modelScale}
    position={[1.8 , -7.2, 0.4]}
    rotation={[0, Math.PI / 0.8, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane064.geometry}
        material={materials['Dark Blue.004']}
        position={[1.191, 2.374, -0.809]}
        rotation={[Math.PI / 2, 0, .488]}
        scale={0.356}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle020.geometry}
          material={materials['Black Black.004']}
          position={[0, 1.042, -1.244]}
          rotation={[-Math.PI, Math.PI / 2, 0]}
          scale={0.148}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane059.geometry}
          material={materials['White.007']}
          position={[0.26, -0.105, -0.306]}
          rotation={[0, 0.192, -Math.PI / 2]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane067.geometry}
            material={materials['Blue.002']}
            position={[0.081, -0.073, -0.069]}
            scale={1.036}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane068.geometry}
            material={materials['Blue.002']}
            position={[0.097, -0.057, -0.049]}
            scale={0.892}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane063.geometry}
          material={materials['White.007']}
          position={[0.244, -0.142, -0.319]}
          rotation={[0, 0.202, -Math.PI / 2]}
        />
      </mesh>
      <group position={[0.103, 2.062, -0.159]} rotation={[0, 0.654, 0]} scale={[0.323, 0.37, 0.37]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials.Grey}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials.White}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube032.geometry}
          material={materials.Grey}
          position={[4.19, -0.242, -2.129]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube033.geometry}
          material={materials.Grey}
          position={[4.19, -0.242, 2.157]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube034.geometry}
          material={materials.Grey}
          position={[-4.133, -0.242, -2.129]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube035.geometry}
          material={materials.Grey}
          position={[-4.133, -0.242, 2.157]}
        />
      </group>
      <group position={[0.567, 3.873, -0.81]} rotation={[Math.PI, -1.469, Math.PI]} scale={0.311}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh.geometry}
          material={materials['Black Black.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1.geometry}
          material={materials.Metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube217.geometry}
          material={materials['Dark Metal.001']}
          position={[0, 0.307, 0]}
          scale={0.885}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.NurbsPath005.geometry}
            material={materials['Emission.001']}
            position={[0, 1.828, 0]}
            rotation={[0, 1.571, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.NurbsPath022.geometry}
            material={materials.Metal}
            position={[0, 1.249, 0]}
            rotation={[0, 1.571, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.NurbsPath023.geometry}
            material={materials.Metal}
            position={[0, 0.772, 0]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.NurbsPath024.geometry}
            material={materials['Emission.001']}
            position={[0, 1.263, 0]}
            rotation={[0, 1.571, 0]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube218.geometry}
          material={materials.Yellow}
          position={[0, 2.936, 0]}
          rotation={[0, -1.571, 0]}
          scale={5.361}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube219.geometry}
            material={materials.Yellow}
            position={[-0.186, -0.061, 0]}
            rotation={[Math.PI, 0, 2.271]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube220.geometry}
            material={materials.Yellow}
            position={[-0.271, -0.236, 0]}
            rotation={[Math.PI, 0, Math.PI / 2]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube221.geometry}
            material={materials.Yellow}
            position={[0.186, -0.061, 0]}
            rotation={[0, 0, -0.871]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube222.geometry}
            material={materials.Yellow}
            position={[0.271, -0.236, 0]}
            rotation={[0, 0, -Math.PI / 2]}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere023.geometry}
          material={materials['Glass.001']}
          position={[0, 1.714, 0]}
          scale={0.805}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane011.geometry}
        material={materials['Green.001']}
        position={[-2.277, 0.851, 0.911]}
        rotation={[-0.251, 1.359, 0.16]}
        scale={0.328}
      />
      <group position={[-0.295, 3.427, -0.613]} rotation={[0, -0.917, 0]} scale={0.409}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_1.geometry}
          material={materials['Denim Dark']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_2.geometry}
          material={materials['Denim Light']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials['Black Shirt']}
        position={[-0.295, 3.789, -0.613]}
        rotation={[0, -0.917, 0]}
        scale={0.409}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials['Man A-TShirt']}
        position={[-0.295, 3.789, -0.613]}
        rotation={[0, -0.917, 0]}
        scale={0.409}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials['Man A-TShirt']}
        position={[-0.295, 3.789, -0.613]}
        rotation={[0, -0.917, 0]}
        scale={0.409}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016.geometry}
        material={materials['Hair.005']}
        position={[-0.295, 3.789, -0.613]}
        rotation={[0, -0.917, 0]}
        scale={0.409}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube031.geometry}
        material={materials.Skin}
        position={[-0.295, 3.789, -0.613]}
        rotation={[3.141, -0.654, -1.574]}
        scale={0.095}
      />
      <group position={[1.326, 3.82, -1.88]} rotation={[1.354, -0.274, -2.254]} scale={0.24}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials['Black Rubber']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2.geometry}
          material={materials.Metal}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Man_Base_Rigg004.geometry}
        material={materials.Skin}
        position={[-0.295, 3.789, -0.613]}
        rotation={[0, -0.917, 0]}
        scale={0.409}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Man_Base_Rigg016.geometry}
        material={materials['Skin.004']}
        position={[-0.295, 3.789, -0.613]}
        rotation={[0, -0.917, 0]}
        scale={0.409}
      />
      <group position={[-0.27, 0.001, -0.58]} rotation={[0, 0.654, 0]} scale={0.409}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_1.geometry}
          material={materials['White Shoe Leather']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_2.geometry}
          material={materials['Shoe Laces']}
        />
      </group>
      <group position={[-0.281, 0.001, -0.594]} rotation={[0, 0.654, 0]} scale={0.409}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005_1.geometry}
          material={materials['White Shoe Leather']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005_2.geometry}
          material={materials['Shoe Laces']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Man_Base_Rigg017.geometry}
        material={materials['Red peach.004']}
        position={[-0.68, 2.65, -1.289]}
        rotation={[0.096, -0.666, 0.221]}
        scale={0.409}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Man_Base_Rigg018.geometry}
        material={materials['White.004']}
        position={[-0.68, 2.65, -1.289]}
        rotation={[0.096, -0.666, 0.221]}
        scale={0.409}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath008.geometry}
        material={materials.Hair}
        position={[-1.002, 4.422, -1.363]}
        rotation={[-0.253, 0.875, 0.273]}
        scale={0.308}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath009.geometry}
        material={materials.Hair}
        position={[-1.14, 4.393, -1.475]}
        rotation={[-0.253, 0.875, 0.273]}
        scale={0.308}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath010.geometry}
        material={materials.Hair}
        position={[-1.238, 4.373, -1.554]}
        rotation={[-0.253, 0.875, 0.273]}
        scale={0.308}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath011.geometry}
        material={materials.Hair}
        position={[-1.305, 4.288, -1.64]}
        rotation={[-0.253, 0.875, 0.273]}
        scale={0.308}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath012.geometry}
        material={materials.Hair}
        position={[-1.251, 4.283, -0.953]}
        rotation={[2.889, -0.875, 2.869]}
        scale={0.242}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath013.geometry}
        material={materials.Hair}
        position={[-1.364, 4.259, -1.044]}
        rotation={[2.889, -0.875, 2.869]}
        scale={0.242}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath014.geometry}
        material={materials.Hair}
        position={[-1.487, 4.234, -1.143]}
        rotation={[2.889, -0.875, 2.869]}
        scale={0.242}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath015.geometry}
        material={materials.Hair}
        position={[-1.357, 4.198, -1.688]}
        rotation={[-0.253, 0.875, 0.273]}
        scale={0.308}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath016.geometry}
        material={materials.Hair}
        position={[-1.524, 4.177, -1.253]}
        rotation={[2.889, -0.875, 2.869]}
        scale={0.242}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath017.geometry}
        material={materials.Hair}
        position={[-1.296, 4.014, -1.463]}
        rotation={[2.889, -0.875, 2.869]}
        scale={0.242}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath018.geometry}
        material={materials.Hair}
        position={[-1.042, 4.045, -1.785]}
        rotation={[2.889, -0.875, 2.869]}
        scale={0.242}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath019.geometry}
        material={materials.Hair}
        position={[-1.195, 4.057, -1.785]}
        rotation={[2.889, -0.875, 2.869]}
        scale={0.242}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath020.geometry}
        material={materials.Hair}
        position={[-1.306, 4.039, -1.737]}
        rotation={[2.889, -0.875, 2.869]}
        scale={0.242}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath021.geometry}
        material={materials.Hair}
        position={[-1.386, 4.029, -1.636]}
        rotation={[2.889, -0.875, 2.869]}
        scale={0.242}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008.geometry}
        material={materials['Hair.004']}
        position={[-0.963, 4.064, -1.375]}
        rotation={[-0.253, 0.875, 0.273]}
        scale={0.333}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001.geometry}
        material={materials['Black Glossy']}
        position={[-0.653, 4.022, -1.267]}
        rotation={[1.529, 0.173, -1.15]}
        scale={0.072}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere002.geometry}
        material={materials['Black Glossy']}
        position={[-0.786, 4.006, -1.102]}
        rotation={[1.529, 0.173, -0.636]}
        scale={0.072}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus.geometry}
        material={materials['Black Glossy']}
        position={[-0.63, 4.042, -1.115]}
        rotation={[1.529, 0.173, -0.893]}
        scale={0.115}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials['Black Glossy']}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials['Skin.007']}
        position={[2.765, 3.402, 0.505]}
        rotation={[3.141, 0.524, -1.573]}
        scale={0.086}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={materials['Hair.007']}
        position={[2.765, 3.308, 0.505]}
        rotation={[Math.PI, -1.047, Math.PI]}
        scale={0.37}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={materials['Grey.001']}
        position={[2.765, 3.402, 0.505]}
        rotation={[Math.PI, -1.047, Math.PI]}
        scale={0.37}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017.geometry}
        material={materials['Grey.001']}
        position={[2.765, 3.402, 0.505]}
        rotation={[Math.PI, -1.047, Math.PI]}
        scale={0.37}
      />
      <group position={[2.765, 3.402, 0.505]} rotation={[Math.PI, -1.047, Math.PI]} scale={0.37}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube021_1.geometry}
          material={materials['Dark Blue.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube021_2.geometry}
          material={materials['Daker Blue 2.002']}
        />
      </group>
      <group position={[2.765, 3.402, 0.505]} rotation={[Math.PI, -1.047, Math.PI]} scale={0.37}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020_1.geometry}
          material={materials['Lines.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020_2.geometry}
          material={materials['White.006']}
        />
      </group>
      <group position={[2.765, 3.402, 0.505]} rotation={[Math.PI, -1.047, Math.PI]} scale={0.37}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={materials['Black Rubber.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011_1.geometry}
          material={materials.Metal}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube023.geometry}
        material={materials['Pants.002']}
        position={[2.765, 3.402, 0.505]}
        rotation={[Math.PI, -1.047, Math.PI]}
        scale={0.37}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Man_Base_Rigg002.geometry}
        material={materials['Skin.006']}
        position={[2.765, 3.402, 0.505]}
        rotation={[Math.PI, -1.047, Math.PI]}
        scale={0.37}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Man_Base_Rigg008.geometry}
        material={materials['Skin.005']}
        position={[2.765, 3.402, 0.505]}
        rotation={[Math.PI, -1.047, Math.PI]}
        scale={0.37}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials['Gold.002']}
        position={[2.516, 4.411, 0.289]}
        rotation={[3.075, -1.325, 2.167]}
        scale={0.049}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube027.geometry}
        material={materials['Gold.002']}
        position={[3.035, 4.39, 0.714]}
        rotation={[0.105, 0.247, -0.738]}
        scale={0.049}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Man_Base_Rigg009.geometry}
        material={materials['Red peach.005']}
        position={[2.812, 3.414, 0.401]}
        rotation={[-3.081, -0.885, 3.069]}
        scale={0.37}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Man_Base_Rigg010.geometry}
        material={materials['White.005']}
        position={[2.812, 3.414, 0.401]}
        rotation={[-3.081, -0.885, 3.069]}
        scale={0.37}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath063.geometry}
        material={materials['Hair.007']}
        position={[2.661, 5.045, 0.517]}
        rotation={[-2.987, 0.684, -0.059]}
        scale={-0.26}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath070.geometry}
        material={materials['Hair.007']}
        position={[2.741, 5.015, 0.578]}
        rotation={[-2.987, 0.684, -0.059]}
        scale={-0.26}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath071.geometry}
        material={materials['Hair.007']}
        position={[2.838, 5.033, 0.462]}
        rotation={[-2.987, 0.684, -0.059]}
        scale={-0.26}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath072.geometry}
        material={materials['Hair.007']}
        position={[2.906, 5.046, 0.379]}
        rotation={[-2.987, 0.684, -0.059]}
        scale={-0.26}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath073.geometry}
        material={materials['Hair.007']}
        position={[2.959, 5.001, 0.285]}
        rotation={[-2.987, 0.684, -0.059]}
        scale={-0.26}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath074.geometry}
        material={materials['Hair.007']}
        position={[3.042, 4.902, 0.853]}
        rotation={[0.154, -0.684, -3.082]}
        scale={-0.205}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath075.geometry}
        material={materials['Hair.007']}
        position={[2.775, 4.74, 0.425]}
        rotation={[0.154, -0.684, -3.082]}
        scale={-0.205}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath076.geometry}
        material={materials['Hair.007']}
        position={[2.889, 4.758, 0.521]}
        rotation={[0.154, -0.684, -3.082]}
        scale={-0.205}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath077.geometry}
        material={materials['Hair.007']}
        position={[3.008, 4.944, 0.223]}
        rotation={[-2.987, 0.684, -0.059]}
        scale={-0.26}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath084.geometry}
        material={materials['Hair.007']}
        position={[3.232, 4.739, 0.77]}
        rotation={[0.154, -0.684, -3.082]}
        scale={-0.205}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath085.geometry}
        material={materials['Hair.007']}
        position={[3.17, 4.69, 0.728]}
        rotation={[0.154, -0.684, -3.082]}
        scale={-0.235}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath086.geometry}
        material={materials['Hair.007']}
        position={[3.01, 4.734, 0.618]}
        rotation={[0.154, -0.684, -3.082]}
        scale={-0.205}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath088.geometry}
        material={materials['Hair.007']}
        position={[2.732, 4.826, 0.514]}
        rotation={[0.154, -0.684, -3.082]}
        scale={-0.205}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath089.geometry}
        material={materials['Hair.007']}
        position={[2.676, 4.861, 0.584]}
        rotation={[0.154, -0.684, -3.082]}
        scale={-0.205}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath090.geometry}
        material={materials['Hair.007']}
        position={[3.019, 4.897, 0.881]}
        rotation={[0.154, -0.684, -3.082]}
        scale={-0.205}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials['Hair.006']}
        position={[2.777, 4.715, 0.522]}
        rotation={[0.154, -0.684, 0.059]}
        scale={0.302}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere005.geometry}
        material={materials['Black Glossy.004']}
        position={[2.536, 4.59, 0.654]}
        rotation={[1.688, 0.046, 0.942]}
        scale={0.065}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere006.geometry}
        material={materials['Black Glossy.004']}
        position={[2.683, 4.583, 0.777]}
        rotation={[1.688, 0.046, 0.428]}
        scale={0.065}
      />
      <group position={[2.363, 3.401, 1.399]} rotation={[-2.86, 0.157, 3.078]} scale={0.222}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006.geometry}
          material={materials.Metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh006_1.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006.geometry}
          material={materials['Black Shirt']}
          position={[0.066, 0.335, -0.114]}
          rotation={[1.59, 0.006, -3.096]}
          scale={0.373}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair006.geometry}
        material={materials.Metal}
        position={[-0.909, 1.078, -1.524]}
        rotation={[-Math.PI, 0.917, -Math.PI]}
        scale={0.635}>
        <group position={[-0.007, -1.357, 0]} rotation={[0, 0.553, 0]} scale={1.831}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube276.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube276_1.geometry}
            material={materials.Black}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NurbsPath002.geometry}
          material={materials['Dark Blue']}
          position={[0.279, 0.401, 0]}
          scale={0.44}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube201.geometry}
            material={materials['Daker Blue 2']}
            position={[4.06, 0.03, 0]}
            scale={3.816}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.NurbsPath001.geometry}
            material={materials.Metal}
            position={[0.186, 0, 0]}
            scale={3.816}
          />
        </mesh>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials['Black Shirt']}
        position={[0.439, 2.532, 0.302]}
        rotation={[1.802, -0.166, -0.61]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder092.geometry}
        material={materials.Metal}
        position={[0.579, 2.121, 0.011]}
        rotation={[-Math.PI, -0.654, Math.PI / 2]}
        scale={[0.442, 0.558, 0.442]}
      />
      <group position={[0.316, 2.104, 0.176]} rotation={[-1.325, 0.184, -2.511]} scale={0.442}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh009.geometry}
          material={materials.Metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh009_1.geometry}
          material={materials.Black}
        />
      </group>
      <group position={[0.043, 2.131, -0.179]} rotation={[Math.PI, -0.654, Math.PI]} scale={0.442}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh010.geometry}
          material={materials.Metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh010_1.geometry}
          material={materials['Dark Blue']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane086.geometry}
        material={materials['Dark Blue']}
        position={[0.599, 2.112, -0.23]}
        rotation={[Math.PI, -0.654, Math.PI]}
        scale={[0.059, 0.064, 0.059]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane087.geometry}
        material={materials['Dark Blue']}
        position={[0.599, 2.112, -0.23]}
        rotation={[Math.PI, -0.654, Math.PI]}
        scale={[0.059, 0.064, 0.059]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane088.geometry}
        material={materials.Metal}
        position={[-0.133, 2.137, -0.421]}
        rotation={[Math.PI, -0.654, Math.PI]}
        scale={[0.059, 0.064, 0.059]}
      />
      <group position={[-1.728, 0.182, 1.05]} rotation={[0, 0.992, 0]} scale={0.349}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_1.geometry}
          material={materials['Daker Blue 2.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006_2.geometry}
          material={materials.Chocolate}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath033.geometry}
        material={materials['dark green.001']}
        position={[-1.729, 0.542, 0.692]}
        rotation={[1.228, 1.138, 0.582]}
        scale={0.754}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane012.geometry}
        material={materials['Green.001']}
        position={[-1.744, 1.084, 0.274]}
        rotation={[1.04, 0.019, -0.025]}
        scale={0.385}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath006.geometry}
        material={materials['dark green.001']}
        position={[-1.936, 0.574, 0.817]}
        rotation={[2.538, 1.086, -0.885]}
        scale={0.598}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane010.geometry}
        material={materials['Green.001']}
        position={[-2.193, 0.968, 0.546]}
        rotation={[1.096, 0.438, -0.475]}
        scale={0.306}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007.geometry}
        material={materials['Orange.001']}
        position={[-1.697, 1.306, 1.094]}
        rotation={[-Math.PI, 0.977, -Math.PI]}
        scale={0.4}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath028.geometry}
        material={materials['dark green.001']}
        position={[-1.693, 0.827, 1.1]}
        rotation={[0, 0.594, Math.PI / 2]}
        scale={0.4}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009.geometry}
        material={materials['Orange.001']}
        position={[-1.546, 0.928, 1.167]}
        rotation={[2.696, 1.258, -2.515]}
        scale={0.325}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath031.geometry}
        material={materials['dark green.001']}
        position={[-1.615, 0.55, 1.113]}
        rotation={[0.204, 0.252, 1.383]}
        scale={0.325}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010.geometry}
        material={materials['Orange.001']}
        position={[-1.721, 1.138, 1.135]}
        rotation={[-Math.PI, 0.287, -Math.PI]}
        scale={0.37}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath007.geometry}
        material={materials['dark green.001']}
        position={[-1.715, 0.695, 1.137]}
        rotation={[0, 1.283, Math.PI / 2]}
        scale={0.37}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath032.geometry}
        material={materials['dark green.001']}
        position={[-2.122, 0.672, 0.96]}
        rotation={[3.055, 0.209, -2.43]}
        scale={0.445}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath064.geometry}
        material={materials['dark green.001']}
        position={[-1.422, 0.702, 0.874]}
        rotation={[0.411, 1.1, 0.442]}
        scale={0.393}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane013.geometry}
          material={materials['Green.001']}
          position={[0.538, 0.078, 0]}
          rotation={[-Math.PI / 2, -0.825, -Math.PI / 2]}
          scale={0.736}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("./ShipBottle.glb");
