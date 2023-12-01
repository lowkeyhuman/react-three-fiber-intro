import { CameraControls, OrthographicCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react"
import { Mesh } from 'three';

const Experience = () => {
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
    </>
  )
}

export default Experience