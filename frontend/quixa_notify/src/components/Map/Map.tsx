import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
} from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import useGeoLocation from "./useGeoLocation";
import { useState } from "react";
import { ICoordinates } from "../../types/ICoordinates";

const markerIcon = new L.Icon({
  iconUrl: "../../../node_modules/bootstrap-icons/icons/geo-alt-fill.svg",
  iconRetinaUrl: "../../../node_modules/bootstrap-icons/icons/geo-alt-fill.svg",
  iconSize: [35, 45],
});

interface MapProps {
  locationClick: React.Dispatch<React.SetStateAction<ICoordinates>>
}

const Map = ({locationClick} : MapProps) => {
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 0,
    lng: 0,
  });

  const location = useGeoLocation();
  const location2 = {
    loaded: true,
    cordinates: {
      lat: "-4.97913",
      lng: "-39.0188",
    },
  };
  const location3 = {
    loaded: true,
    cordinates: {
      lat: "-4.97813",
      lng: "-39.0288",
    },
  };
  const location4 = {
    loaded: true,
    cordinates: {
      lat: "-4.96513",
      lng: "-39.0388",
    },
  };

  const handleMapClick = (event: any) => {
    const { lat, lng } = event.latlng;
    setSelectedLocation({ lat, lng });
  };

  const MapClickHandler = () => {
    useMapEvents({
      click: (event) => {
        const { lat, lng } = event.latlng;
        setSelectedLocation({ lat, lng });
        const latitude = lat.toString();
        const longitude = lng.toString();
        locationClick({lat: latitude, lng: longitude})
      },
    });
    return null;
  };

  return (
    <MapContainer
      center={[-4.97813, -39.0188]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* {location.loaded && !location.error && ( */}
      {location.loaded && (
        <Marker
          draggable={true}
          position={[
            Number(location2.cordinates.lat),
            Number(location2.cordinates.lng),
          ]}
          icon={markerIcon}
        >
          <Popup>
            Reclamação 1 <br />
            {location.cordinates.lat}, {location.cordinates.lng}
          </Popup>
        </Marker>
        
      )}
      <MapClickHandler />
    </MapContainer>
  );
};
export default Map;

// Localização de Quixadá Latitude: -4.97813, Longitude: -39.0188 4° 58′ 41″ Sul, 39° 1′ 8″ Oeste
