import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
} from "react-leaflet";
import { useState, useEffect, useContext } from "react";
import { ICoordinates } from "../../types/ICoordinates";
import { Link } from "react-router-dom";
import { TipoProblema } from "../FormReclamation";

import L from "leaflet";

import "leaflet/dist/leaflet.css";
import "./Map.css";
import { ProblemaContext } from "../../context/ProblemaContext";

interface MapProps {
  locationClick: React.Dispatch<React.SetStateAction<ICoordinates>>
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
  const [positions, setPositions] = useState<PositionProps[]>([]);
  const { problemaCadastrado } = useContext(ProblemaContext);

  const redIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  const orangeIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  const yellowIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  const blueIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  useEffect(() => {
    dataFetch();
  }, [problemaCadastrado]);

  const dataFetch = async () => {
    try {
      await fetch('http://localhost:3000/problemas')
      .then(res => res.json())
      .then(data => {
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
      console.error(error);
    } 
  }

  const getIconType = (tipo: TipoProblema) => {
    if (
      tipo === TipoProblema.BURACOS_VIAS ||
      tipo === TipoProblema.ILUMINACAO_PUBLICA ||
      tipo === TipoProblema.VANDALISMO_PICHACOES
    ) {
      return redIcon;
    } else if (
      tipo === TipoProblema.FALTA_COLETA_LIXO ||
      tipo === TipoProblema.FALTA_MANUTENCAO_PARQUES
    ) {
      return orangeIcon;
    } else if (
      tipo === TipoProblema.PROBLEMAS_TRANSPORTE_PUBLICO ||
      tipo === TipoProblema.INFILTRACOES_VAZAMENTOS_AGUA
    ) {
      return yellowIcon;
    } else {
      return blueIcon;
    }
  }

  const MapClickHandler = () => {
    useMapEvents({
      click: (event) => {
        const { lat, lng } = event.latlng;
        const latitude = lat.toString();
        const longitude = lng.toString();
        locationClick({lat: latitude, lng: longitude})
      },
    });
    return null;
  };

  return (
    <>
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
          <Marker key={index} position={position.pos} icon={getIconType(position.tipo)}>
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

      <button className="btn btn-primary mt-3" onClick={dataFetch}>Atualizar</button>
    </>
  );
};

export default Map;
