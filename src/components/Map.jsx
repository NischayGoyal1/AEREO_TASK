import React from 'react'
import { MapContainer ,TileLayer,Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { useSelector } from 'react-redux';
import L from 'leaflet';


const Map = () => {
    const defaultCenter = [37.7749, -122.4194];
    const MarkerVal=useSelector((state)=>state.movieData.isMarker);
    const PopVal=useSelector((state)=>state.movieData.movie);
  
    
  return (
    <MapContainer
    center={defaultCenter} zoom={13}
    >

            <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='© OpenStreetMap contributors'
                />
      
      {
            MarkerVal &&    <Marker
              
            position={[37.7749, -122.4194]}  
          >
            <Popup>
                <p>Title : <b> {PopVal.title}</b></p>
            
                <p>Release Year : <b> {PopVal.release_year}</b></p>
                
                <p>Production : <b> {PopVal.production_company}</b></p>
                
              </Popup>
            
          </Marker>
     }
     
    </MapContainer>
  )
}

export default Map


 