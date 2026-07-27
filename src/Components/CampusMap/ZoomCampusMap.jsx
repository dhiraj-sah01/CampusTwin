import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { useAuth } from "../../AuthContext";

export default function ZoomCampusMap() {
  const map = useMap();
  const { zoomTo } = useAuth(); 

  useEffect(() => {
    console.log(zoomTo);
    if (!zoomTo) return;
    map.flyTo(zoomTo, 22, {
      animate: true,
      duration: 2,
    });
  }, [zoomTo, map]);

  return null;
}
