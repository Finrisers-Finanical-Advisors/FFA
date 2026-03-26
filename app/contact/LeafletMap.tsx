'use client'

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

// Fix default marker icons in a type-safe way
(L.Icon.Default as any).mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
})

export default function LeafletMapComponent() {
  return (
    <MapContainer
      center={[30.2672, -97.7431]} // Austin, TX coordinates
      zoom={13}
      scrollWheelZoom={false}
      className="h-full w-full rounded-xl"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker position={[30.2672, -97.7431]}>
        <Popup>
          5900 Balcones Drive Suite 100<br />Austin, TX 78731
        </Popup>
      </Marker>
    </MapContainer>
  )
}