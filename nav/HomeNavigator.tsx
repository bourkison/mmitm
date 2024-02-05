import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import Home from '@/screens/Home';
import Search from '@/screens/Search';
import {HomeStackParamList} from '@/types/nav';

const Stack = createStackNavigator<HomeStackParamList>();

export default function HomeNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Search" component={Search} />
        </Stack.Navigator>
    );
}
