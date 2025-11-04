import { useEffect, useState } from "react";
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
function MapComponent() {
    const [position, setPosition] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setPosition([pos.coords.latitude, pos.coords.longitude]);
            },
            (err) => {
                console.error(err);
                alert("Joylashuvni aniqlab bo‘lmadi.");
            }
        );
    }, []);
    return (
        <div style={{ height: "400px", width: "100%" }}>
            {position ? (
                <MapContainer
                    center={position}
                    zoom={15}
                    style={{ height: "100%", width: "100%" }}
                >
                    <TileLayer
                        attribution="&copy; OpenStreetMap"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>📍 Sizning hozirgi joylashuvingiz</Popup>
                    </Marker>
                </MapContainer>
            ) : (
                <p>Joylashuvingiz aniqlanmoqda...</p>
            )}
        </div>
    );
}

export default MapComponent;
