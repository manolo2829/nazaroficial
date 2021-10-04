import React,{useState} from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: -32.919670,
  lng: -68.856280
};

function MyComponent() {
    const [magnitudes, setMagnitudes] = useState([]);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAhSqyseg_ISEDubsk6ebIdcv91yHCkeJg"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{lat: -32.919670, lng: -68.856280}}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={(e) => {setMagnitudes([e.latLng.lat(), e.latLng.lng()])}}

      >
        <Marker position={{lat: parseInt(magnitudes[0]), lng: parseInt(magnitudes[1])}}></Marker> 
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)