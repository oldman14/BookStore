import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {DetailBook, Order} from './screens/';
import Tabs from './navigaton/tabs';
import database from '@react-native-firebase/database';
import {Provider} from 'react-redux';
import store from './redux/store'

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'Home'}>
          {/* Tabs */}
          <Stack.Screen name="Home" component={Tabs} />

          {/* Screens */}
          <Stack.Screen
            name="BookDetail"
            component={DetailBook}
            options={{headerShown: false}}
          />
           <Stack.Screen
            name="Order"
            component={Order}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;
