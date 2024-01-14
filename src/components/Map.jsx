'use client'

import L from 'leaflet'
import MarkerIcon from '../../node_modules/leaflet/dist/images/marker-icon.png'
import MarkerShadow from '../../node_modules/leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useState } from 'react'

const DEFAULT_WIDTH = 600;
const DEFAULT_HEIGHT = 600;

const Map = () => {

    const [coord, setCoord] = useState([26.9124, 75.7873])

    const SearchLocation = () => {
        return (
            <div className="search-location">
                <input type="text" placeholder="Search Location" />
            </div>
        )
    }

    const GetMyLocation = () => {
        const getMyLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    setCoord([position.coords.latitude, position.coords.longitude])
                })
            } else {
                console.log("Geolocation is not supported by this browser.")
            }
        }

        return (
            <div className="get-my-location">
                <button onClick={getMyLocation}>Get My Location</button>
            </div>
        )
    }

    return (
        <div>
            {/* <SearchLocation />
            <GetMyLocation /> */}
            <MapContainer style={{
                height: "70vh",
                width: "70vw"
            }} center={coord} zoom={12} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker icon={
                    new L.Icon({
                        iconUrl: MarkerIcon.src,
                        iconRetinaUrl: MarkerIcon.src,
                        iconSize: [25, 41],
                        iconAnchor: [12.5, 41],
                        popupAnchor: [0, -41],
                        shadowUrl: MarkerShadow.src,
                        shadowSize: [41, 41],
                    })
                } position={[26.8668712,75.816524]}>
                     <Popup>
                    <br/> Address <br /> <br /> Camera Details <br/> <br/> <button> View Livestream </button> <br/> <br/> <button> Contact Owner </button> <br/>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map