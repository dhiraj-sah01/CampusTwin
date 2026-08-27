import { useGLTF } from "@react-three/drei";
import model from "../../Assets/models/class26-08-026.glb";
import { useState } from "react";



export default function ClassroomModel({ setModelSelected, modelSelected }) {

  const { scene } = useGLTF(model);

  const [selectedObject, setSelectedObject] = useState(null);

  const handleClick = (e) => {
    e.stopPropagation();

    const branch = e.object.parent;

    console.log(branch.name);

    // Don't allow walls to be selected
    if (branch.name.toLowerCase().includes("assembly-1536")) {
      return;
    }

    //send name to userpage
    setModelSelected(() => {
      if (branch.name === "Node_451") {
        return "AC";
      } else if (branch.name === "Node_89") {
        return "Smartboard";
      } else if (branch.name === "Node_415") {
        return "Clock";
      } else if (branch.name === "Node_600") {
        return "FAN_001";
      } else if (branch.name === "Node_655") {
        return "FAN_002";
      } else if (branch.name === "Node_699") {
        return "FAN_003";
      } else if (branch.name === "Node_631") {
        return "FAN_004";
      } else if (branch.name === "Node_678") {
        return "FAN_005";
      } else if (branch.name === "Node_740") {
        return "FAN_006";
      } else {
        return branch.name;
      }
    });

    // Restore previous branch
    if (selectedObject) {
      selectedObject.traverse((child) => {
        if (child.isMesh && child.material?.color) {
          child.material.color.set("#f8f8f8");
        }
      });
    }

    // Clone material and color only this branch
    branch.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material = child.material.clone();

        if (child.material.color) {
          child.material.color.set("#00ff88");
        }
      }
    });

    setSelectedObject(branch);
  };

  //   scene.traverse((child) => {
  //   if (child.isMesh) {
  //     console.log(child.name);
  //   }
  // });

  return (
    <primitive
      object={scene}
      onClick={
        // (e) => {
        //   e.stopPropagation();

        //   const parent = e.object.parent;
        //   console.log("Parent:", parent?.name);
        //   parent.traverse((child) => {
        //   if (child.isMesh && child.material?.color) {
        //     child.material.color.set("#00ff88");
        //   }
        // });
        // }}
        handleClick
      }
      scale={1}
      position={[0, 0, 0]}
    />
  );
}

useGLTF.preload(model);
