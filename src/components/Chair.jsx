import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useCustomiztion } from "../context/Customization";

export function Chair(props) {
  const { material } = useCustomiztion();
  const { leg } = useCustomiztion();
  const { chairColor } = useCustomiztion();
  const { nodes, materials } = useGLTF("public/models/chair.gltf");

  //   TextTure Here
  //   TextTure Here
  //   TextTure Here
  //   TextTure Here
  //   TextTure Here

  const letherTextureProps = useTexture({
    // map: "/public/textures/leather/Leather_008_Base Color.jpg",
    normalMap: "/public/textures/leather/Leather_008_Normal.jpg",
    roughnessMap: "/public/textures/leather/Leather_008_Roughness.jpg",
    aoMap: "/public/textures/leather/Leather_008_Ambient Occlusion.jpg",
  });

  // letherTextureProps.map.repeat.set(3, 3);
  letherTextureProps.normalMap.repeat.set(3, 3);
  letherTextureProps.roughnessMap.repeat.set(3, 3);
  letherTextureProps.aoMap.repeat.set(3, 3);
  // letherTextureProps.map.wrapS =
  //   letherTextureProps.map.wrapT =
  letherTextureProps.normalMap.wrapS =
    letherTextureProps.normalMap.wrapT =
    letherTextureProps.roughnessMap.wrapS =
    letherTextureProps.roughnessMap.wrapT =
    letherTextureProps.aoMap.wrapS =
    letherTextureProps.aoMap.wrapT =
      THREE.RepeatWrapping;

  const frabicTextureProps = useTexture({
    // map: "/public/textures/fabric/Fabric_Knitted_006_basecolor.jpg",
    normalMap: "/public/textures//fabric/Fabric_Knitted_006_normal.jpg",
    roughnessMap: "/public/textures/fabric/Fabric_Knitted_006_roughness.jpg",
    aoMap: "/public/textures/fabric/Fabric_Knitted_006_ambientOcclusion.jpg",
  });
  // frabicTextureProps.map.repeat.set(3, 3);
  frabicTextureProps.normalMap.repeat.set(3, 3);
  frabicTextureProps.roughnessMap.repeat.set(3, 3);
  frabicTextureProps.aoMap.repeat.set(3, 3);
  // frabicTextureProps.map.wrapS =
  //   frabicTextureProps.map.wrapT =
  frabicTextureProps.normalMap.wrapS =
    frabicTextureProps.normalMap.wrapT =
    frabicTextureProps.roughnessMap.wrapS =
    frabicTextureProps.roughnessMap.wrapT =
    frabicTextureProps.aoMap.wrapS =
    frabicTextureProps.aoMap.wrapT =
      THREE.RepeatWrapping;

  //   TextTure ABOVE
  //   TextTure ABOVE
  //   TextTure ABOVE
  //   TextTure ABOVE
  //   TextTure ABOVE
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Chair.geometry}>
        <meshStandardMaterial
          color={chairColor}
          {...(material === "leather"
            ? letherTextureProps
            : frabicTextureProps)}
        />
      </mesh>

      <mesh
        geometry={nodes.Cushion.geometry}
        material={materials.Cushion}
        position={[0, 0.064, 0.045]}>
        <meshStandardMaterial {...frabicTextureProps} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Legs1.geometry}
        material={materials.Legs}
        visible={leg === 1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Legs2.geometry}
        material={materials.Legs}
        visible={leg === 2}
      />
    </group>
  );
}

useGLTF.preload("public/models/chair.gltf");
