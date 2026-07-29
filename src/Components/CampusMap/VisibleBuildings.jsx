import { useMapEvents } from "react-leaflet";
import Location from "../../Data/Locations";

function VisibleBuildings({setVisiableBuildings}) {

  useMapEvents({
    moveend(e) {
      const map = e.target;
      const bounds = map.getBounds();

      Object.entries(Location).forEach(([name, coords]) => {
        if (bounds.contains(coords)) {
          // console.log(`${name} is visible`);
          setVisiableBuildings(name);
        }else{
          // setVisiableCampus("");
        }
      });
    },
  });

  return null;
}

export default VisibleBuildings;