// import {Geo} from '@aws-amplify/geo';
import {NavigationContainer} from '@react-navigation/native';
import {Amplify} from 'aws-amplify';
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import amplifyconfig from './aws-exports';

import HomeNavigator from '@/nav/HomeNavigator';

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
        <SafeAreaProvider>
            <NavigationContainer>
                <View style={styles.container}>
                    <HomeNavigator />
                    <StatusBar style="auto" />
                </View>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'violet',
    },
});
