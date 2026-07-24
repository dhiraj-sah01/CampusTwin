import { useMapEvents } from "react-leaflet";

function MapCoodinates() {
  useMapEvents({
    moveend(e) {
      const center = e.target.getCenter();
      console.log(center.lat, center.lng);
    },
  });

  return null;
}

export default MapCoodinates;