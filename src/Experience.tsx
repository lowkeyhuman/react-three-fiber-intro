import { OrbitControls, PerspectiveCamera, Sparkles, useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";

type GLTFResult = GLTF & {
  nodes: {
    baked: THREE.Mesh;
    poleLight1: THREE.Mesh;
    poleLight2: THREE.Mesh;
    portalLight: THREE.Mesh;
  }
}

const Experience = () => {
  const { nodes } = useGLTF('./scene.glb') as GLTFResult;

  const bakedTexture = useTexture('./baked.jpg');
  bakedTexture.flipY = false;

  return (
    <>
      <color args={['#000']} attach={'background'} />

      <PerspectiveCamera 
        makeDefault
        position={[-3, 2, 5]}
      />
      <OrbitControls makeDefault />

      <mesh geometry={ nodes.baked.geometry }>
        <meshBasicMaterial map={ bakedTexture } />
      </mesh>

      <mesh 
        geometry={ nodes.poleLight1.geometry }
        position={ nodes.poleLight1.position }
      >
        <meshBasicMaterial color='#ffffff' />
      </mesh>

      <mesh 
        geometry={ nodes.poleLight2.geometry }
        position={ nodes.poleLight2.position }
      >
        <meshBasicMaterial color='#ffffff' />
      </mesh>

      <mesh
        geometry={ nodes.portalLight.geometry }
        position={ nodes.portalLight.position }
        rotation={ nodes.portalLight.rotation }
      >
        <meshBasicMaterial color='#ffffff' />
      </mesh>

      <Sparkles 
        size={ 4 }
        scale={[4, 2, 4]}
        position={[0, 1, 0]}
        speed={ 0.4 }
      />
    </>
  )
}

export default Experience