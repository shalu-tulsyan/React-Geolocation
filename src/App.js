import React, { useState } from 'react';
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import './App.css';

function App() {

  const [location, setLocation] = useState();
  const [isMap, setIsMap] = useState(false);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  function success(position) {
    setLocation(position.coords)
    console.log(position.coords);
  }

  function error(error) {
    console.log(error)
  }

  function handleClick() {
    if (navigator.geolocation)
    {
      navigator.geolocation.getCurrentPosition(success,error);
    } 
  }

  function handleMapClick() {
    setIsMap(true)
  }

  return (
    <>
      <div className="App">
        <h1>Geolocation in React</h1>
        <button onClick={handleClick}>Get the Location</button>
        {location && 
          <>
          <p>The information of your location is: latitude {location.latitude} and longitude { location.longitude}</p>
            <div className='mapButtonContainer'>
              <button onClick={handleMapClick}>Show Location on Map</button>
            </div> 
            {isMap &&
              <div className='mapContainer'>
                {!isLoaded ? (
                  <h1>Loading...</h1>
                ) : (
                <GoogleMap
                  mapContainerClassName="map"
                  center={{ lat: location.latitude, lng: location.longitude }}
                  zoom={10}
                >
                   <Marker position={{ lat: location.latitude, lng: location.longitude }} /> 
                </GoogleMap>
      )}
              </div>
            }
          </>
        }
      </div>
    </>
  );
}

export default App;
