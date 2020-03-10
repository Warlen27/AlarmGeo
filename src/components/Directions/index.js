import React from 'react';
import MapViewDirections from 'react-native-maps-directions';
import { apiKey } from '../../utils';


export default function Directions({ destination, origin, onReady }) {
  return (
    <MapViewDirections 
    origin={origin}
    destination={destination}
    onReady={onReady}
    apikey={apiKey}
    strokeWidth={5}
    strokeColor='#8e4dff'
    />
  );
}
