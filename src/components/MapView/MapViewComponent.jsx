"use client";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";


export default function MapViewComponent() {
  const [geoData, setGeoData] = useState({ lat: 22.719568, lng: 75.857727 });

  const center = [geoData.lat, geoData.lng];

  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom={true} style={{height:"100vh"}}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={center} title="Indore Map">
      <Popup>
        Indore
      </Popup>
    </Marker>
  </MapContainer>
  );
}
