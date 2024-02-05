import React from 'react';
import {StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

import MapStyle from '@/json/map_style.json';

export default function HomeMap() {
    return (
        <MapView
            provider="google"
            showsUserLocation={true}
            showsMyLocationButton={false}
            customMapStyle={MapStyle}
            style={StyleSheet.absoluteFillObject}
        />
    );
}
