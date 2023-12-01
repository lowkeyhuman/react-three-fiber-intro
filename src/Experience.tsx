import { useFrame } from "@react-three/fiber";
import { useRef } from "react"
import { Mesh } from 'three';

const Experience = () => {
  const boxRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    const box = boxRef.current;
    if (box == null) return;

    box.rotation.y += 0.8 * delta 
  })

  return (
    <>
      <mesh ref={boxRef}>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>

      <ambientLight />
    </>
  )
}

export default Experience