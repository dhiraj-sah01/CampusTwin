import { MapContainer, TileLayer, Polygon, Tooltip } from "react-leaflet";
import "./CampusMap.css";
import { useAuth } from "../../AuthContext";
import ChangeView from "./ChangeView";
import ZoomCampusMap from "./ZoomCampusMap";
import VisibleBuildings from "./VisibleBuildings";

import Location from "../../Data/Locations";
import { useState, useEffect } from "react";

function CampusMap({ updateShowBlueprint, setCampus, setBlock }) {
  const { center } = useAuth();
  const { setZoomCenterReceive } = useAuth();

  // const [showUserBlueprint, setShowUserBlueprint] = useState(false);

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

  const [visiableBuildings, setVisiableBuildings] = useState("");
  useEffect(() => {
    if (visiableBuildings) {
      setCampus(visiableBuildings);
    }
  }, [visiableBuildings, setCampus]);

  // console.log(center);
  return (
    <div className="map">
      <MapContainer
        center={center}
        zoom={19}
        style={{ height: "84vh", width: "100%" }}
      >
        <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />

        <ZoomCampusMap />

        <Polygon
          positions={c25Coordinates}
          eventHandlers={{
            click: () => {
              console.log("C25 clicked");
              setZoomCenterReceive(Location["C25"]);
              console.log(center);
              // setCampus("C25");
              setBlock("A");
              setTimeout(() => {
                updateShowBlueprint(true);
              }, 2200);
            },
          }}
          pathOptions={{
            color: "#151616",
            fillColor: "#74787ec1",
            fillOpacity: 0.5,
          }}
        >
          <Tooltip permanent>KIIT-C25</Tooltip>
        </Polygon>

        {/* <MapCoodinates /> */}
        <ChangeView center={center} />
        <VisibleBuildings setVisiableBuildings={setVisiableBuildings} />
      </MapContainer>
    </div>
  );
}

export default CampusMap;
