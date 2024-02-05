// import {Geo} from '@aws-amplify/geo';
import {Amplify} from 'aws-amplify';
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import amplifyconfig from './aws-exports';

import Home from '@/screens/Home';

Amplify.configure(amplifyconfig);

export default function App() {
    // useEffect(() => {
    //     const fetchRes = async () => {
    //         const results = await Geo.searchByText('99 Downs Park Road', {
    //             countries: ['GBR'],
    //             maxResults: 10,
    //         }).catch(err => console.error(err));
    //         console.log('results', results);
    //     };

    //     fetchRes();
    // }, []);

    return (
        <View style={styles.container}>
            <Home />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
