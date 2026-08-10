import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import ClassroomModel from "./ClassroomModel";
import "./ModelViewer.css";

export default function ModelViewer() {
  return (
    <div className="model-viewer">
      {console.log("ModelViewer component rendered")}
      <Canvas camera={{ position: [-90, 30, 50], fov: 100 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 10, 5]} intensity={1} />

        <ClassroomModel />

        <OrbitControls
          minDistance={60}
          maxDistance={100}
          minPolarAngle={0.4}
          maxPolarAngle={Math.PI / 2.5}
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
