import { MapContainer, TileLayer, useMap, Marker, Popup} from 'react-leaflet'
import L from 'leaflet'
import  "leaflet/dist/leaflet.css"
import "./Map.css"
import useGeoLocation from './useGeoLocation'

const markerIcon = new L.Icon ({
    iconUrl: '../../../node_modules/bootstrap-icons/icons/geo-alt-fill.svg',
    iconRetinaUrl: '../../../node_modules/bootstrap-icons/icons/geo-alt-fill.svg',
    iconSize: [35,45],
    
});

const Map = ()=> {
    const location = useGeoLocation()
    const location2 = {
        loaded: true,
        cordinates: {
            lat: "-4.97913",
            lng: "-39.0188",
        }
    }
    const location3 = {
        loaded: true,
        cordinates: {
            lat: "-4.97813",
            lng: "-39.0288",
        }
    }
    const location4 = {
        loaded: true,
        cordinates: {
            lat: "-4.96513",
            lng: "-39.0388",
        }
    }
    
    return(
        <MapContainer center={[-4.97813, -39.0188]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {location.loaded && !location.error && (
                <Marker draggable={true} position={[location.cordinates.lat, location.cordinates.lng,]} icon={markerIcon}>
                    <Popup>
                    Reclamação 1 <br />
                        {location.cordinates.lat}, {location.cordinates.lng}
                    </Popup>
                </Marker>
            )}
            <Marker draggable={true} position={[location2.cordinates.lat, location2.cordinates.lng,]} icon={markerIcon}>
                    <Popup>
                       Reclamação 2 <br />
                        {location2.cordinates.lat}, {location2.cordinates.lng}
                    </Popup>
            </Marker>
            <Marker draggable={true} position={[location3.cordinates.lat, location3.cordinates.lng,]} icon={markerIcon}>
                    <Popup>
                        Reclamação 3 <br />
                        {location3.cordinates.lat}, {location3.cordinates.lng}
                    </Popup>
            </Marker>
            <Marker draggable={true} position={[location4.cordinates.lat, location4.cordinates.lng,]} icon={markerIcon}>
                    <Popup>
                        Reclamação 4 <br />
                        {location4.cordinates.lat}, {location4.cordinates.lng}
                    </Popup>
            </Marker>
        
        </MapContainer>
        
    )   
        
}
export default Map

// Localização de Quixadá Latitude: -4.97813, Longitude: -39.0188 4° 58′ 41″ Sul, 39° 1′ 8″ Oeste