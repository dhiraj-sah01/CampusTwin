import { useGLTF } from "@react-three/drei";
import model from "../../Assets/models/Classroom3D.glb";

export default function ClassroomModel() {
  const { scene } = useGLTF(model);

//   scene.traverse((child) => {
//   if (child.isMesh) {
//     console.log(child.name);
//   }
// });

  return (
    <primitive
      object={scene}
      scale={1}
      position={[0, 0, 0]}
    />
  );
}

useGLTF.preload(model);
