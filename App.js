
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import {DetailBook } from "./screens/";
import Tabs from "./navigaton/tabs";

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Home'}
            >
                {/* Tabs */}
                <Stack.Screen name="Home" component={Tabs} />

                {/* Screens */}
                <Stack.Screen name="BookDetail" component={DetailBook} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;