// src/components/MapComponent.js
'use client';

import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// Dynamically import react-leaflet components
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });
const useMap = dynamic(() => import('react-leaflet').then(mod => mod.useMap), { ssr: false });

import L from 'leaflet';

// Fix Leaflet's default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Custom Marker Component
const CustomMarker = ({ position, popupText }) => {
  const map = useMap();

  const handleMarkerClick = () => {
    map.setView(position, map.getZoom(), {
      animate: true,
      duration: 1
    });
  };

  return (
    <Marker position={position} eventHandlers={{ click: handleMarkerClick }}>
      <Popup>{popupText}</Popup>
    </Marker>
  );
};

const MapComponent = () => {
  const markers = [
    { position: [28.7041, 77.1025], popupText: 'Marker 1: Delhi' },
    { position: [19.0760, 72.8777], popupText: 'Marker 2: Mumbai' },
    { position: [13.0827, 80.2707], popupText: 'Marker 3: Chennai' },
    { position: [22.5726, 88.3639], popupText: 'Marker 4: Kolkata' },
    { position: [12.9716, 77.5946], popupText: 'Marker 5: Bangalore' },
  ];

  return (
    <MapContainer
      center={[20.5937, 78.9629]}
      zoom={5}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker, index) => (
        <CustomMarker key={index} position={marker.position} popupText={marker.popupText} />
      ))}
    </MapContainer>
  );
};

export default MapComponent;
