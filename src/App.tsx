import { Canvas } from '@react-three/fiber'
import './App.css'
import Experience from './Experience'

function App() {

  return (
    <>
      <Canvas 
        flat>
        <Experience />
      </Canvas>
    </>
  )
}

export default App
