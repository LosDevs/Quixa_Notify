import { useState } from "react";

import ReclamationOffcanvas from "../components/ReclamationOffcanvas";
import Map from "../components/Map/Map";

import "../stylesCss/Reclamation.css";

const Reclamation = () => {
  const [selectedLocation, setSelectedLocation] = useState({
    lat: '',
    lng: ''
  });

  return (
    <div className="map-container">
      <ReclamationOffcanvas location={selectedLocation}></ReclamationOffcanvas>
      <Map locationClick={setSelectedLocation}></Map>
    </div>
  );
};

export default Reclamation;
