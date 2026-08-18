import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const Coverage = () => {
  const position = [23.685, 90.3563];
  const serviceCenter = useLoaderData();
  console.log(serviceCenter)
  return (
    <div>
      <div></div>
      <div></div>
      <div className="border border-gray-400">
        <MapContainer
          center={position}
          zoom={8}
          style={{ height: "500px", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
            serviceCenter.map((center, idx) => <Marker key={center.idx}
            position={[center.latitude, center.longitude]}>
            <Popup>
              <strong>{center.district}</strong>
              <br />
              Service Area: {center.covered_area.join(', ')}
            </Popup>
          </Marker>)
          }
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
