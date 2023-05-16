import ReclamationOffcanvas from "../components/ReclamationOffcanvas";
import Map from "../components/Map/Map";
import { useEffect, useState } from "react";

const Reclamation = () => {
  const [selectedLocation, setSelectedLocation] = useState({
    lat: '',
    lng: ''
  });

  useEffect(() => {
    console.log(selectedLocation);
  }, [selectedLocation]);

  return (
    <>
      <h1>Reclamações</h1>
      <Map locationClick={setSelectedLocation}></Map>
      <ReclamationOffcanvas location={selectedLocation}></ReclamationOffcanvas>
    </>
  );
};

export default Reclamation;
