import React from 'react';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();
import { Home,Order, Favorite } from "../screens"

import { COLORS, icons } from "../constants"

const Tabs = () => {
    return (
        <Tab.Navigator
            labeled={false}
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#fff' }}
        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({focused}) =>(
                        <MaterialCommunityIcons
                            name="home"
                             style={{
                            color: focused ? COLORS.primary : COLORS.darkgray
                             }}
                            size={26}
                        />    
                    )
                }
                }
            />
            <Tab.Screen name="Favorite" component={Favorite}
              options={{
                tabBarIcon: ({focused}) =>(
                    <MaterialCommunityIcons
                        name="cards-heart"
                         style={{
                            color: focused ? COLORS.primary : COLORS.darkgray
                         }}
                        size={26}
                    />    
                )
            }
            }
            />
            <Tab.Screen name="Order" component={Order}
              options={{
                tabBarIcon: ({focused}) =>(
                    <MaterialCommunityIcons
                        name="cart"
                         style={{
                            color: focused ? COLORS.primary : COLORS.darkgray
                         }}
                        size={26}
                    />    
                )
            }
            }
            />
        </Tab.Navigator>
    )
}

export default Tabs