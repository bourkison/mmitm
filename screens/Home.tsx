import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import HomeMap from '@/components/Home/HomeMap';
import {HomeStackScreenProps} from '@/types/nav';

export default function Home({navigation}: HomeStackScreenProps<'Home'>) {
    const {top} = useSafeAreaInsets();

    return (
        <View style={styles.container}>
            <View style={{paddingTop: top, ...styles.textInputContainer}}>
                <Pressable
                    onPress={() =>
                        navigation.navigate('Search', {type: 'beginning'})
                    }>
                    <View
                        style={{
                            width: '100%',
                            height: 48,
                            backgroundColor: 'red',
                        }}>
                        <Text>button</Text>
                    </View>
                </Pressable>
            </View>
            <HomeMap />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        width: '100%',
        backgroundColor: 'blue',
    },
    textInputContainer: {
        height: 200,
        width: '100%',
        backgroundColor: '#fff',
        zIndex: 9,
    },
});
