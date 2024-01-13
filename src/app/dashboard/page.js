"use client";

import Map from "@/components/Map";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[70vw] h-[70vh] text-center">
      <h1>Hello</h1>
        <Map
          width="800"
          height="400"
          zoom={12}
        >
          {({ TileLayer, Marker, Popup }) => (
            <>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </>
          )}
        </Map>
      </div>
    </div>
  );
}
