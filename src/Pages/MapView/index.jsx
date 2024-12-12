import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Custom red icon for markers
const redIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Sample hospitals with coordinates and Google Maps URLs
const hospitals = [
  {
    name: 'National Hospital of Sri Lanka (NHSL)',
    address: '28, Kynsey Road, Colombo 8',
    position: [6.9271, 79.9744], // Coordinates for NHSL
    googleMapsUrl: 'https://www.google.com/maps?q=6.9271,79.9744',
  },
  {
    name: 'The Lanka Hospitals Corporation PLC',
    address: '5, Kynsey Road, Colombo 8',
    position: [6.8906, 79.8713], // Coordinates for Lanka Hospitals
    googleMapsUrl: 'https://www.google.com/maps?q=6.8906,79.8713',
  },
  {
    name: 'Colombo South Teaching Hospital',
    address: 'Kalubowila, Dehiwala',
    position: [6.8662, 79.9504], // Coordinates for Colombo South Teaching Hospital
    googleMapsUrl: 'https://www.google.com/maps?q=6.8662,79.9504',
  },
  {
    name: 'Sri Jayawardenepura General Hospital',
    address: 'Nugegoda, Colombo',
    position: [6.9276, 79.9733], // Coordinates for Sri Jayawardenepura General Hospital
    googleMapsUrl: 'https://www.google.com/maps?q=6.9276,79.9733',
  }
];

const MapView = () => {
  const handleCopyClick = (url) => {
    // Copy URL to clipboard
    const textArea = document.createElement('textarea');
    textArea.value = url;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    // Optional: alert user that the URL has been copied
    alert('Location URL copied to clipboard!');
  };

  return (
    <MapContainer
      center={[6.9271, 79.9744]} // Center the map on the National Hospital of Sri Lanka
      zoom={14} // Zoom level
      style={{ height: '100vh', width: '100%' }}
      scrollWheelZoom={false} // Disable scroll zoom
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {hospitals.map((hospital, index) => (
        <Marker key={index} position={hospital.position} icon={redIcon}>
          <Tooltip permanent>{hospital.name}</Tooltip>
          <Popup>
            <strong>{hospital.name}</strong>
            <br />
            {hospital.address}
            <br />
            <a
              href={hospital.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Google Maps
            </a>
            <br />
            <small>Copy this URL:</small>
            <br />
            <input
              type="text"
              value={hospital.googleMapsUrl}
              readOnly
              style={{ width: '100%' ,cursor:'pointer'}}
              onClick={() => handleCopyClick(hospital.googleMapsUrl)} // Copy URL when clicked
            />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
