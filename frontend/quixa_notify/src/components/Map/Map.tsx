import { MapContainer, TileLayer, useMap, Marker, Popup} from 'react-leaflet'
import L from 'leaflet'
import  "leaflet/dist/leaflet.css"
import "./Map.css"

// const markerIcon = new L.Icon ({
//     iconUrl: require(""),
//     iconSize: [35,45],
// });

const Map = ()=> {

    return(
        <MapContainer center={[-4.97813, -39.0188]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-4.97813, -39.0188]}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )   
        
}
export default Map

// Localização de Quixadá Latitude: -4.97813, Longitude: -39.0188 4° 58′ 41″ Sul, 39° 1′ 8″ Oeste