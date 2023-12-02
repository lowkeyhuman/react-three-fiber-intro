import { CameraControls, OrthographicCamera, useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react"
import { Mesh } from 'three';
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";

type GLTFResult = GLTF & {
  nodes: {
    baked: THREE.Mesh;
  }
}

const Experience = () => {
  
  const model = useGLTF('./scene.glb') as GLTFResult;
  const bakedTexture = useTexture('./baked.jpg');
  bakedTexture.flipY = false;

  const boxRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    const box = boxRef.current;
    if (box == null) return;

    box.rotation.y += 0.2 * delta 
  })

  return (
    <>
      <mesh ref={boxRef}>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>

      <ambientLight />
      <OrthographicCamera 
        makeDefault
        zoom={250}
        position={[0, 3, 6]}
      />
      <CameraControls makeDefault />

      <mesh geometry={ model.nodes.baked.geometry }>
        <meshBasicMaterial map={ bakedTexture } />
      </mesh>
    </>
  )
}

export default Experience