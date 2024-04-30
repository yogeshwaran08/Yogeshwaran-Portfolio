import { useGLTF } from "@react-three/drei";

export function Model(props: any) {
  const { nodes, materials } = useGLTF("/assets/ThreeD/Astroids/astroids.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        //@ts-ignore
        geometry={nodes.Object_4.geometry}
        material={materials.Default_OBJ}
      />
      <mesh
        //@ts-ignore
        geometry={nodes.Object_5.geometry}
        material={materials.Default_OBJ}
      />
    </group>
  );
}

useGLTF.preload("/assets/ThreeD/Astroids/astroids.gltf");
