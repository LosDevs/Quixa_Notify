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
import { useState, useEffect } from "react";
import { ICoordinates } from "../../types/ICoordinates";
import { Link } from "react-router-dom";

const markerIcon = new L.Icon({
  iconUrl: "../../../node_modules/bootstrap-icons/icons/geo-alt-fill.svg",
  iconRetinaUrl: "../../../node_modules/bootstrap-icons/icons/geo-alt-fill.svg",
  iconSize: [35, 45],
});

interface MapProps {
  locationClick: React.Dispatch<React.SetStateAction<ICoordinates>>
}

type Reclamationprops =  {
  id : string;
  titulo: string;
  longitude: string;
  latitude: string;
  endereco: string;
  tipo_problema: string;
  nivel_gavidade: number;
  descricao : string;
  votacao: number;
  imagem: string;
}

type PositionProps = {
  id: any;
  tipo: any;
  pos: {
    lat: number;
    lon: number;  
  };
}

const Map = ({locationClick} : MapProps) => {
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 0,
    lng: 0,
  });
  const [reclamations , setReclamations] = useState<Reclamationprops[]>([]);
  const [positions, setPositions] = useState<PositionProps[]>([]);

  const location = useGeoLocation();

  useEffect(() => {
    const dataFetch = async () => {
      try {
        await fetch('http://localhost:3000/problemas')
        .then(res => res.json())
        .then(data => {
          setReclamations(data);

          const positionsData: PositionProps[] = data.map((e: any) => ({
            id: e.id,
            tipo: e.tipo_problema,
            pos: {
              lat: parseFloat(e.latitude),
              lon: parseFloat(e.longitude)
            }
          }));

          setPositions(positionsData);
        })
      } catch (error) {
        console.log(error)
      } 
    } 

    dataFetch();
  }, []);

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
      
      {positions.map((position: any, index) => (
        <Marker key={index} position={position.pos}>
          <Popup>
            <strong>Tipo: </strong>
            <span>{position.tipo}</span> 
            <br /> 
            <Link to={`/reclamation/${position.id}`}>Ver detalhes</Link>
          </Popup>
        </Marker>
      ))};

      <MapClickHandler />
    </MapContainer>
  );
};
export default Map;
