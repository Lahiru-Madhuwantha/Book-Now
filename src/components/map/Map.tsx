import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './map.scss';
import Pin from '../Pin/Pin';

type Item = {
  id: string;
  title: string;
  img: string;
  bedroom: number;
  bathroom: number;
  price: number;
  address: string;
  latitude: number;
  longitude: number;
};

type MapProps = {
  items: Item[];
};

function Map({ items }:MapProps) {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map(item=>(
      <Pin item={item} key={item.id}/>
    ))}
    </MapContainer>
  );
}

export default Map;
