import { useEffect, useRef } from "react";
import { useMap } from "react-leaflet";

export default function ChangeView({ center }) {
  const map = useMap();

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      map.setView(center, 19); 
      return;
    }

    map.flyTo(center, 18, {
      animate: true,
      duration: 1.2,
    });
  }, [center, map]);

  return null;
}
