import { useMapEvents } from "react-leaflet";

function VisibleBuildings() {
  const locations = {
    C25: [20.36435919926926, 85.81697881227231],
    C26: [20.364800, 85.817200],
    C27: [20.365100, 85.817500],
  };

  useMapEvents({
    moveend(e) {
      const map = e.target;
      const bounds = map.getBounds();

      Object.entries(locations).forEach(([name, coords]) => {
        if (bounds.contains(coords)) {
          console.log(`${name} is visible`);
        }
      });
    },
  });

  return null;
}