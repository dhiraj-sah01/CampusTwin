import { MapContainer, TileLayer, Polygon, Tooltip } from "react-leaflet";
import "./CampusMap.css";
import MapCoodinates from "./MapCoodinates";
import { useAuth } from "../../AuthContext";
import ChangeView from "./ChangeView";

function CampusMap() {
  const { center } = useAuth();

  //c25
  const c25Coordinates = [
    [20.36373215373193, 85.8163015075263],
    [20.363724009704672, 85.81773086879114],
    [20.364041913620333, 85.81800205065697],
    [20.36465010117728, 85.81782712967332],
    [20.36504513624607, 85.81696603213352],
    [20.36495507810227, 85.81601504389236],
    [20.36418299587854, 85.81623746574644],
    [20.36373215373193, 85.8163015075263],
  ];

  // console.log(center);
  return (
    <div className="map">
      <MapContainer
        center={center}
        zoom={19}
        style={{ height: "84vh", width: "100%" }}
      >
        <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
        <Polygon
          positions={c25Coordinates}
          eventHandlers={{ click: () => {console.log("C25 clicked")} }}
          pathOptions={{
            color: "#2563eb",
            fillColor: "#3b83f6c1",
            fillOpacity: 0.5,
          }}
        >
          <Tooltip permanent>KIIT-C25</Tooltip>
        </Polygon>

        {/* <MapCoodinates /> */}

        <ChangeView center={center} />
      </MapContainer>
    </div>
  );
}

export default CampusMap;
