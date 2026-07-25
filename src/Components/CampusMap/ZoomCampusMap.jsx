import { useEffect } from "react";
import { useMap } from "react-leaflet";

export default function ZoomCampusMap({ BuildingCenter }) {
  const map = useMap();

  useEffect(() => {
    console.log(BuildingCenter);
    if (!BuildingCenter) return;
    map.flyTo(BuildingCenter, 22, {
      animate: true,
      duration: 2,
    });
  }, [BuildingCenter, map]);

  return null;
}
