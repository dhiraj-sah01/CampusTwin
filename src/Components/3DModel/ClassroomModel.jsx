import { useGLTF } from "@react-three/drei";
import model from "../../Assets/models/classroom2.glb";

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
      onClick={(e) => {
        e.stopPropagation();

        const parent = e.object.parent;
        console.log("Parent:", parent?.name);
      }}
      scale={1}
      position={[0, 0, 0]}
    />
  );
}

useGLTF.preload(model);
